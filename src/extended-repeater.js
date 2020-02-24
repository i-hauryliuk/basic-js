module.exports = function repeater(str, options) {
  const stringRepeatNumber = options.repeatTimes || 1;
  const additionRepeatNumber = options.additionRepeatTimes || 1;
  const addition = (options.addition !== undefined) ? options.addition : '';
  const separator = options.separator || '+';
  const addittionSeparator = options.additionSeparator || '|';
  const result = [];

  for (let i = 0; i < stringRepeatNumber; i++) {
    result.push(`${str}`);
    for (let j = 0; j < additionRepeatNumber; j++) {
      result.push(`${addition}`);
      if (additionRepeatNumber - j > 1) {
        result.push(addittionSeparator);
      }
    }
    if (stringRepeatNumber - i > 1) {
      result.push(separator);
    }
  }
  return result.join('');
};
  