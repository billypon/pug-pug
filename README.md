## Setup filter

```javascript
const pug = require('pug');
pug.filters.pug = require('pug-pug')();
```

With filename getter for pug parser.

```javascript
pug.filters.pug = require('pug-pug')(function (filename) {
  return 'test.pug';
});
```

## Use filter

```pug
:pug
  div Message for pug filter.
```

Output result:

```html
<script type="text/html"><div>Message for pug filter.</div></script>
```

Pretty render.

```pug
:pug(pretty=true)
  div Message for pug filter.
```

Output result:

```html
<script type="text/html">
  <div>Message for pug filter.</div>
</script>
```

Render with id.

```pug
:pug(id="foo")
  div Message for pug filter.
```

Output result:

```html
<script type="text/html" id="foo"><div>Message for pug filter.</div></script>
```
