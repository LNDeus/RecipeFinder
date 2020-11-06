const clientErrors = require('./client-errors');

class ClientError extends Error {
  static ERROR_BAD_REQUEST_ERROR = 1;
  static ERROR_THIRD_PART_SERVICES_UNAVAILABLE_ERROR = 2;
  static ERROR_PATH_NOT_FOUND = 3;
  static ERROR_INTERNAL_ERROR = 4;

  constructor(code, extraValues) {
    super();
    this.errorResource = ClientError.findByCode(code);

    if (!this.errorResource) {
      throw Error(`Unknown error code ${code}.`);
    }

    if (!this.errorResource.name) {
      throw Error(`Property 'name' missing on error with code ${code}`);
    }

    if (!this.errorResource.description) {
      throw Error(`Property 'description' missing on error with code ${code}`);
    }

    if (!this.errorResource.statusCode) {
      throw Error(`Property 'statusCode' missing on error with code ${code}`);
    }

    if (this.errorResource.extraField === undefined) {
      throw Error(`Property 'extraField' missing on error with code ${code}`);
    }

    this.checkTypes(extraValues);
    this.extraValues = extraValues;
    this.structure = this.struct();
  }

  get statusCode() {
    return this.errorResource.statusCode;
  }

  static findByCode(code) {
    return clientErrors.find((v) => v.code === code);
  }

  format() {
    return this.structure;
  }

  struct() {
    const object = Object.assign({}, this.errorResource);

    this.message = object.description;
    if (object.extraField) {
      const extraField = Object.assign({}, this.errorResource.extraField);
      object[extraField.field] = this.extraValues;
    }

    delete object.statusCode;
    delete object.extraField;
    return object;
  }

  checkTypes(extraValues) {
    const notNullExtraValues = extraValues !== null;
    const notNullExtraField = this.errorResource.extraField !== null;

    if (notNullExtraValues && notNullExtraField) {
      const isArray = Array.isArray(extraValues);
      const requiresArray = this.errorResource.extraField.type === 'array';
      const arrayComparision = isArray && requiresArray;

      if (arrayComparision) {
        return true;
      }

      if (typeof extraValues !== this.errorResource.extraField.type) {
        throw Error(
          'Extra values must be compatible with extra field resource type.');
      }
    }
  }
}

module.exports = ClientError;
