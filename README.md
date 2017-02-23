# Object/JSON-string loader for webpack

[![npm version](https://img.shields.io/npm/v/json-string-loader.svg)](https://www.npmjs.com/package/json-string-loader)
[![npm downloads](https://img.shields.io/npm/dm/json-string-loader.svg)](https://www.npmjs.com/package/json-string-loader)
[![Known Vulnerabilities](https://snyk.io/test/npm/json-string-loader/badge.svg)](https://snyk.io/test/npm/json-string-loader)

[![codebeat badge](https://codebeat.co/badges/2f597cc8-1d1e-42d6-9f58-da43b3bcb15e)](https://codebeat.co/projects/github-com-jsyrjala-json-string-loader)

Overload imported module contents with given `Object` or JSON-string.

## Installation

```sh
npm install json-string-loader --save-dev
```

## Usage

In webpack.config.js:

```js
var appConfig = {
  key: 'data'
}
...
loaders: [
  // first way: pass an object with `query`
  {
    test: /config.json$/,
    loader: 'json-string-loader?json=' + JSON.stringify(appConfig)
  },
  // second way: using `options`
  {
    test: /[^\w\.]?package.json$/,
    loader: 'json-string-loader',
    options: {
      json: appConfig
    }
  }
]
```

In browser:

```js
var appConfig = require("./config.json");
// => returns {key: 'data'}
```

[Documentation](http://webpack.github.io/docs/using-loaders.html)

## License

[MIT](https://spdx.org/licenses/MIT)
