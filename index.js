module.exports = function(source) {
  this.cacheable()
  var json = this.query.replace(/^\?json=/, '')
  return "module.exports = " + json;
}
