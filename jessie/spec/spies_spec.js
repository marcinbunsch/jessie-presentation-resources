describe('Spies', function() {

  var some_object = { some_func: function() {} }

  it("should be able to spy on existing objects", function() {
    spyOn(some_object, 'some_func')
    some_object.some_func()
    expect(some_object.some_func).toHaveBeenCalled()
  })

  it("should be able to create spies", function() {
    var spy_func = jasmine.createSpy()
    spy_func()
    expect(spy_func).toHaveBeenCalled()
  })

})
