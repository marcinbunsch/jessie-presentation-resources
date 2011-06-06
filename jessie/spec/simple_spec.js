describe('Simple specs', function() {

  it("should work", function() {
    expect("aaa").toEqual('aaa')
  })

  it("should work with not", function() {
    expect("bbb").not.toEqual('aaa')
  })

})

require('coffee-script')
