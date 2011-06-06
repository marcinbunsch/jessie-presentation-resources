describe('Sugar specs', function() {

  var number = 1
  var array  = [1,2]
  var func   = function() {}
  it("should work", function() {
    "aaa".should_be("aaa")
    number.should_be(1)
    array.should_be([1,2])
    func.should_be_a(Function)
    "bike courier".should_match("bike")
  })

  it("should work with not", function() {
    "bbb".should_not_be("aaa")
    number.should_not_be(2)
    array.should_not_be([3,4])
  })

})
