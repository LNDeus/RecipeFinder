const ResponseTemplateInterface = require('./ResponseTemplateInterface');

class SuccessResponseTemplate extends ResponseTemplateInterface {
  static template = {
    error: false,
    data: undefined
  };

  static apply (data) {
    const response = Object.assign({}, SuccessResponseTemplate.template);
    response.data = data;
    return response;
  }
}

module.exports.SuccessResponseTemplate = SuccessResponseTemplate;

class ErrorResponseTemplate extends ResponseTemplateInterface {
  static template = {
    error: true,
    details: undefined
  };

  static apply(data) {
    const response = Object.assign({}, ErrorResponseTemplate.template);
    response.details = data;
    return response;
  }
}

module.exports.ErrorResponseTemplate = ErrorResponseTemplate;
