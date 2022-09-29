
class AutoScroll {
  /**
   * Creates an AutoScroll instance for a specified workspace.
   * @param {!Blockly.WorkspaceSvg} workspace Workspace to scroll.
   * @constructor
   */
  constructor(workspace) {
    /**
     * Workspace to scroll.
     * @protected {!Blockly.WorkspaceSvg}
     */
    this.workspace_ = workspace;

    /**
     * Current active vector representing scroll velocity in pixels per
     * millisecond in each direction.
     * @protected {!Blockly.utils.Coordinate}
     */
    this.activeScrollVector_ = new Blockly.utils.Coordinate(0, 0);

    /**
     * ID of active requestAnimationFrame callback key.
     * @type {number}
     * @protected
     */
    this.animationFrameId_ = 0;

    /**
     * Time in ms last animation frame was run.
     * @type {number}
     * @protected
     */
    this.lastTime_ = Date.now();

    /**
     * Whether the scroll animation should continue. If this is false, the next
     * animation frame will not be requested.
     * @type {boolean}
     * @protected
     */
    this.shouldAnimate_ = false;
  }

  /**
   * Cancels the current autoscroll and resets properties.
   */
  stopAndDestroy() {
    this.activeScrollVector_ = new Blockly.utils.Coordinate(0, 0);
    this.shouldAnimate_ = false;
    cancelAnimationFrame(this.animationFrameId_);
    this.animationFrameId_ = 0;
  }

  /**
   * Ticks scrolling behavior and triggers another
   * frame request.
   * @param {number} now Current time in ms. This is usually passed
   *     automatically by `requestAnimationFrame`.
   * @protected
   */
  nextAnimationStep_(now) {
    if (this.shouldAnimate_) {
      const delta = now - this.lastTime_;
      this.lastTime_ = now;
      // This method could be called multiple times per ms, and we only want to
      // scroll if we should actually move.
      if (delta > 0) {
        this.scrollTick_(delta);
      }

      this.animationFrameId_ =
          requestAnimationFrame((time) => this.nextAnimationStep_(time));
    }
  }

  /**
   * Perform scroll given time passed.
   * @param {number} msPassed Number of ms since last scroll tick.
   * @protected
   */
  scrollTick_(msPassed) {
    const scrollDx = this.activeScrollVector_.x * msPassed;
    const scrollDy = this.activeScrollVector_.y * msPassed;
    this.scrollWorkspaceWithBlock(scrollDx, scrollDy);
  }

  /**
   * Scrolls the workspace the given amount during a block drag.
   * Also updates the dragger based on the amount actually scrolled.
   * @param {number} scrollDx Amount to scroll in horizontal direction.
   * @param {number} scrollDy Amount to scroll in vertical direction.
   */
  scrollWorkspaceWithBlock(scrollDx, scrollDy) {
    const dragSurface = this.workspace_.getBlockDragSurface();
    const oldLocation = dragSurface.getWsTranslation();

    // As we scroll, we shouldn't expand past the content area that existed
    // before the block was picked up. Therefore, we use cached ContentMetrics
    // so that the content area does not change as we scroll.
    const metricsManager =
    /** @type {ScrollMetricsManager} */ (
        this.workspace_.getMetricsManager());
    metricsManager.useCachedContentMetrics = true;
    const newX = this.workspace_.scrollX + scrollDx;
    const newY = this.workspace_.scrollY + scrollDy;
    this.workspace_.scroll(newX, newY);
    metricsManager.useCachedContentMetrics = false;

    const newLocation = dragSurface.getWsTranslation();

    // How much we actually ended up scrolling.
    const deltaX = newLocation.x - oldLocation.x;
    const deltaY = newLocation.y - oldLocation.y;

    // If we did scroll, we need to let the dragger know by how much.
    // The dragger will update its values so that things like connection
    // markers will stay consistent.
    if (deltaX || deltaY) {
      this.workspace_.currentGesture_.getCurrentDragger()
          .moveBlockWhileDragging(deltaX, deltaY);
    }
  }

  /**
   * Updates the scroll vector for the current autoscroll and begins the
   * animation if needed.
   * @param {!Blockly.utils.Coordinate} scrollVector New scroll velocity vector
   *     in pixels per ms.
   */
  updateProperties(scrollVector) {
    this.activeScrollVector_ = scrollVector;
    this.shouldAnimate_ = true;

    // Start new animation if there isn't one going.
    if (this.animationFrameId_ == 0) {
      this.lastTime_ = Date.now();
      this.nextAnimationStep_(this.lastTime_);
    }
  }
}
