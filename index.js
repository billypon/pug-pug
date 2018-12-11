const pug = require('pug');

module.exports = function (callback) {
  return function (str, options) {
    const pugOptions = {
      pretty: options.pretty
    };
    if (callback) {
      callback(pugOptions, options, str);
    }
    const html = pug.render(str, pugOptions);
    return html;
  }
}
