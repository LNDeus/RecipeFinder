class ToolBox {
  /**
   * Converts a string list into an array.
   * @param stringList
   * @param options
   * @param {undefined | boolean} options.order
   * @param {undefined | string} options.splitter
   * @return {* | string[]}
   */
  static stringListToArray(stringList, options = {}) {
    let array = stringList.split(options.splitter || ',');

    if (options.order) {
      array = array.sort();
    }

    return array;
  }
}

module.exports = ToolBox;
