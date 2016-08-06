# JSON string loader for webpack

Overload imported module contents with given JSON string.

## Installation

npm install json-string-loader --save-dev

## Usage

In webpack.config.js:

```js
var appConfig = {
  key: 'data'
}
...
loaders: [
{
    test: /config.json$/,
    loader: 'json-string-loader?json=' + JSON.stringify(appConfig)
}
```

In browser:

```js
var appConfig = require("./config.json");
// => returns {key: 'data'}
```

[Documentation](http://webpack.github.io/docs/using-loaders.html)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
