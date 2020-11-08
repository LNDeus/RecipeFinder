/*eslint no-empty-function:0*/

class ResponseTemplateInterface {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    const superProto = ResponseTemplateInterface.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find(name =>
      typeof superProto[name] === 'function' && !(name in proto)
    );
    if (missing) throw new TypeError(`${this.constructor.name} needs to implement ${missing}`);
  }

  static apply = () => {};
  static template;
}

module.exports = ResponseTemplateInterface;
