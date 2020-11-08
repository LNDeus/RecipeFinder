const ClientError = require('../../../app/libs/ClientError');
const { clientErrors } = require('../../../app/libs/ClientError');
const { extraValues } = require('./mock');

test('Instantiating all ClientErrors', () => {
  for (const v of clientErrors) {
    let extraValue;

    if (v.extraField) {
      extraValue = extraValues[v.extraField.type];
    }

    const clientError = new ClientError(v.code, extraValue);

    expect(!!clientError).toBeTruthy();
    expect( typeof (clientError.format()) === 'object').toBeTruthy();
  }
});
