var Extend_breaks_java_compiler = require("nativescript-extend_breaks_java_compiler").Extend_breaks_java_compiler;
var extend_breaks_java_compiler = new Extend_breaks_java_compiler();

describe("greet function", function() {
    it("exists", function() {
        expect(extend_breaks_java_compiler.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(extend_breaks_java_compiler.greet()).toEqual("Hello, NS");
    });
});