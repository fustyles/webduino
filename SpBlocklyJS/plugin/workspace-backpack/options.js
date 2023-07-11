/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Typedefs and utility methods for parsing options for the
 * backpack plugin.
 * @author kozbial@google.com (Monica Kozbial)
 */

/**
 * @typedef {{
 *   emptyBackpack:(boolean|undefined),
 *   removeFromBackpack:(boolean|undefined),
 *   copyToBackpack:(boolean|undefined),
 *   copyAllToBackpack:(boolean|undefined),
 *   pasteAllToBackpack:(boolean|undefined),
 *   disablePreconditionChecks:(boolean|undefined)
 * }}
 */
let BackpackContextMenuOptions;

/**
 * @typedef {{
 *    allowEmptyBackpackOpen: (boolean|undefined),
 *    useFilledBackpackImage: (boolean|undefined),
 *    contextMenu:(!BackpackContextMenuOptions|undefined)
 * }}
 */
let BackpackOptions;

/**
 * Returns a new options object with all properties set, using default values
 * if not specified in the optional options that were passed in.
 * @param {BackpackOptions=} options The options to use.
 * @returns {!BackpackOptions} The created options object.
 */
function parseOptions(options) {
  const defaults = {
    allowEmptyBackpackOpen: true,
    useFilledBackpackImage: false,
    contextMenu: {
      emptyBackpack: true,
      removeFromBackpack: true,
      copyToBackpack: true,
      copyAllToBackpack: true,
      pasteAllToBackpack: true,
      disablePreconditionChecks: false,
    },
  };

  if (!options) {
    return defaults;
  }

  return {
    allowEmptyBackpackOpen,
    useFilledBackpackImage,
    contextMenu: {
      ...defaults.contextMenu,
      ...options.contextMenu,
    },
  };
}
