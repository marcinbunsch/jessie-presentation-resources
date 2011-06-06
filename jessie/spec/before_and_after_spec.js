describe('Before and after specs', function() {

  var a = 1

  beforeEach(function() {
    a += 1
  })

  afterEach(function() {
    a += 1
  })

  it("should execute the beforeEach", function() {
    expect(a).toEqual(2)
  })

  it("should execute the afterEach", function() {
    expect(a).toEqual(4)
  })

})
