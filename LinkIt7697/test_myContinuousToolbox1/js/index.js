let workspace = null;

function start() {
    workspace = Blockly.inject('blocklyDiv', {
        media: 'media/',
        //renderer: 'zelos',
        toolbox: '<xml id="toolbox">' + toolbox_system + '</xml>',
        zoom: {
            controls: true,
            wheel: false,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        },
        move: {
            scrollbars: {
                horizontal: true,
                vertical: true
            },
            drag: true,
            wheel: true
        },
        trashcan: true,
        plugins: {
            'flyoutsVerticalToolbox': ContinuousFlyout,
            'toolbox': ContinuousToolbox,
            'metricsManager': ContinuousMetrics,
        }
    });

    var continuousFlyout = Blockly.getMainWorkspace().toolbox_.flyout_;
    continuousFlyout.setVisible(false);

    var blocklyWorkspace = document.getElementsByClassName("blocklyFlyout");
    for (var f = 0; f < blocklyWorkspace.length; f++) {
        blocklyWorkspace[f].addEventListener('dblclick', function() {
            continuousFlyout.setVisible(false);
            Blockly.hideChaff();
        });
    }

    function onWorkspaceChanged(event) {
        if ((event.type == "create" || event.type == "click") && continuousFlyout.isVisible_ == true) {
            continuousFlyout.setVisible(false);
        } else if (event.type == "toolbox_item_select" && continuousFlyout.isVisible_ == false) {
            continuousFlyout.setVisible(true);
        } else if (event.type == "toolbox_item_select" && (!event.newItem) && continuousFlyout.isVisible_ == true) {
            workspace.toolbox_.clearSelection();
            setTimeout(function() {
                continuousFlyout.setVisible(false);
            }, 10);
        }
    }
    workspace.addChangeListener(onWorkspaceChanged);
}
