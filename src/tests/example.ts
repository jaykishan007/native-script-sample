var reflect = require("reflect-metadata");
var component = require("../app/home/home.component");

describe("Tests for app/app.component.ts", function() {
    it("Verify default message", function() {
        var appComponent = new component.HomeComponent();
        expect(appComponent.message).toBe("16 taps left");
    });
});


describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
