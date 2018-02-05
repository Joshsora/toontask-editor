/**
 * An extension of a regular Function object.
 * Provides a means to create objects that are callable.
 */
export class CallableObject extends Function {
  constructor(callFunc) {
    super();
    if (new.target === CallableObject) {
      throw new TypeError('Cannot construct CallableObject instances directly.');
    }
    return Object.setPrototypeOf(callFunc, new.target.prototype);
  }
}

export default CallableObject;
