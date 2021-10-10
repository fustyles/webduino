
class ScrollMetricsManager extends Blockly.MetricsManager {
  /** @override */
  constructor(workspace) {
    super(workspace);

    /**
     * Whether to stop recalculating content metrics and used the cached value
     * instead. Note that if there are no cached metrics, they will be
     * recalculated even if this value is true.
     * @type {boolean}
     */
    this.useCachedContentMetrics = false;

    /**
     * Cached content metrics, if available.
     * @type {?Blockly.MetricsManager.ContainerRegion}
     */
    this.contentMetrics = null;
  }

  /** @override */
  getContentMetrics() {
    if (this.useCachedContentMetrics && this.contentMetrics) {
      return this.contentMetrics;
    }

    this.contentMetrics = super.getContentMetrics();
    return this.contentMetrics;
  }
}
