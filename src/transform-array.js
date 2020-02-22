module.exports = function transform(arr) {
    const res = [];
    if (!Array.isArray(arr)) {
      throw TypeError('Wrong type!');
    } else {
      for (let i = 0, len = arr.length; i < len; i++) {
        switch (arr[i]) {
          case '--discard-next': {
            i++
            break;
          }
          case '--discard-prev': {
            res.pop();
            break;
          }
          case '--double-next': {
            if (i + 1 < len ) res.push(arr[i + 1]);
            break;
          }
          case '--double-prev': {
            if (i - 1 >= 0) res.push(arr[i - 1]);
            break;
          }
          default: {
            res.push(arr[i]);
          }
        }
      }
    }
    return res;
};
