var postcss = require('postcss')

module.exports = postcss.plugin('postcss-overflow-scrolling-touch', function (opts) {
  opts = opts || {}
  return function (root, result) {
    root.walkRules(function (rule) {
      rule.walkDecls(/^overflow-?/, function (decl) {
        if (['scroll', 'auto'].includes(decl.value)) {
          var hasTouch = rule.some(function (i) {
            return i.prop === '-webkit-overflow-scrolling'
          })
          if (!hasTouch) {
            rule.append({
              prop: '-webkit-overflow-scrolling',
              value: 'touch'
            })
          }
        }
      })
    })
  }
})

