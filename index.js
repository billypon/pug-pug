const pug = require('pug');

module.exports = function (get_filename) {
  return function (str, options) {
    const filename = options.filename;
    const pretty = options.pretty;
    const id = options.id;
    const html = pug.render(str, {
      filename: get_filename ? get_filename(filename) : filename,
      pretty: pretty
    });
    return '<script type="text/html"' + (id ? ' id="' + id + '"' : '')>' + html + '</script>';
  }
}
