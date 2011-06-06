var someFunction = function() {
  return 'Foo'
}

var publicFunction = function() {
  return someFunction()
}

exports.publicFunction = publicFunction
