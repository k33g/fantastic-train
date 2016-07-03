"use strict";

var summer = require('../');
var assert = require('chai').assert;

describe("yo it's cold", () => {
  var winter = summer(-40);

  it("should return 0", () => {
    assert.equal(winter(40), 20)
  });
});
