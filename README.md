## Setup filter

```javascript
const pug = require('pug');
pug.filters.pug = require('pug-pug')();
```

Set filename for pug when render

```javascript
pug.filters.pug = require('pug-pug')(function (options, args) {
  options.filename = args.filename;
});
```

## Use filter

```pug
:pug
  div Message for pug filter.
```

Output:

```html
<script type="text/html"><div>Message for pug filter.</div></script>
```

Pretty render.

```pug
:pug(pretty=true)
  div Message for pug filter.
```

Output:

```html
<script type="text/html">
  <div>Message for pug filter.</div>
</script>
```
