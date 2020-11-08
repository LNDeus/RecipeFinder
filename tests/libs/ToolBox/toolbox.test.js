const mock = require('./mock');
const {ToolBox} = require('../../../src/app/libs');

test('Testing toolbox methods', () => {
  expect(
    ToolBox.stringListToArray(mock.stringListToArray.string1)
  ).toEqual(mock.stringListToArray.array);

  expect(
    ToolBox.stringListToArray(mock.stringListToArray.string2, {
      order: true,
      splitter: ', '
    })
  ).toEqual(mock.stringListToArray.array);
});
