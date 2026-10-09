# -*- coding: utf-8 -*-
"""
手把橋接程式（無人機足球多人版用）

Chrome／Edge 的網頁同時最多只能讀到 4 支手把。這個小程式在電腦上直接讀取「全部」手把
（沒有 4 支的限制），再透過本機 WebSocket（ws://127.0.0.1:8765）即時傳給遊戲網頁。
遊戲網頁會自動偵測並連上，不必重新整理；關掉這個視窗後，網頁會自動改回瀏覽器直接讀取。

需要：Python 3.8 以上，以及 pygame、websockets 兩個套件
      （「啟動手把橋接.bat」會自動安裝）
"""
import asyncio
import json
import os
import sys

# 讓手把在這個程式沒有視窗焦點時也能持續讀取（玩家看的是瀏覽器畫面）
os.environ.setdefault('SDL_JOYSTICK_ALLOW_BACKGROUND_EVENTS', '1')
os.environ.setdefault('PYGAME_HIDE_SUPPORT_PROMPT', '1')

try:
    import pygame
    import websockets
except ImportError:
    print('缺少套件，請先執行：  python -m pip install pygame websockets')
    input('按 Enter 結束…')
    sys.exit(1)

HOST, PORT = '127.0.0.1', 8765
RATE_HZ = 120

pygame.display.init()   # 事件佇列需要；不會開視窗
pygame.joystick.init()
joys = {}       # instance_id -> pygame.joystick.Joystick
clients = set()


def add_joystick(device_index):
    try:
        j = pygame.joystick.Joystick(device_index)
        j.init()
    except pygame.error:
        return
    iid = j.get_instance_id()
    if iid not in joys:
        joys[iid] = j
        print(f'[接上] 手把 B{iid}：{j.get_name()}（{j.get_numaxes()} 軸、{j.get_numbuttons()} 鍵）　目前共 {len(joys)} 支')


async def handler(ws, *args):
    clients.add(ws)
    print(f'[網頁] 遊戲已連上（{len(clients)} 個頁面）')
    try:
        await ws.wait_closed()
    finally:
        clients.discard(ws)
        print(f'[網頁] 遊戲已離開（剩 {len(clients)} 個頁面）')


def snapshot():
    pads = []
    for iid in sorted(joys):
        j = joys[iid]
        try:
            pads.append({
                'id': iid,
                'name': j.get_name(),
                'axes': [round(j.get_axis(a), 4) for a in range(j.get_numaxes())],
                'buttons': [1 if j.get_button(b) else 0 for b in range(j.get_numbuttons())],
            })
        except pygame.error:
            pass
    return json.dumps({'pads': pads}, ensure_ascii=False)


async def pump():
    for i in range(pygame.joystick.get_count()):
        add_joystick(i)
    while True:
        for ev in pygame.event.get():
            if ev.type == pygame.QUIT:      # Ctrl+C 或關閉視窗
                return
            elif ev.type == pygame.JOYDEVICEADDED:
                add_joystick(ev.device_index)
            elif ev.type == pygame.JOYDEVICEREMOVED:
                j = joys.pop(ev.instance_id, None)
                if j is not None:
                    print(f'[拔除] 手把 B{ev.instance_id}　目前共 {len(joys)} 支')
        if clients:
            msg = snapshot()
            websockets.broadcast(clients, msg)
        await asyncio.sleep(1 / RATE_HZ)


async def main():
    async with websockets.serve(handler, HOST, PORT):
        print('=' * 56)
        print(' 手把橋接程式已啟動　ws://%s:%d' % (HOST, PORT))
        print(' 現在打開（或切回）遊戲網頁，會自動連上。')
        print(' 遊戲進行中請保持這個視窗開著；要結束時直接關閉即可。')
        print('=' * 56)
        await pump()


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except OSError as e:
        print(f'無法啟動：{e}\n可能已經有另一個橋接程式在執行（連接埠 {PORT} 被占用）。')
        input('按 Enter 結束…')
    except KeyboardInterrupt:
        pass
