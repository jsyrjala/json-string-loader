"use strict"

const util = require("loader-utils")

module.exports = function(source) {
  this.cacheable && this.cacheable()

  // loading options.
  // there is a related issue:
  //
  // https://github.com/webpack/loader-utils/issues/69
  //
  // which prevents loading JSON from `query` when there is an `options`
  // definition in LOADER config
  // So, currently lets define ONLY ONE: options/query

  // loads json from query/from options of loader:
  const opt = util.getOptions(this)

  let json = opt.json || {}
  if ("string" !== typeof json) {
    json =  JSON.stringify(json)
  }

  return "module.exports = " + json
}
