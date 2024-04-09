const { Shape, Circle, Triangle, Square } = require("./shapes.js")

describe("Shapes", () => {
    describe("Shape", () => {
        it("should throw an error if Shape is constructed directly.", () => {
            const badCall = () => {
                const shape = new Shape();
                shape.render();
            };
            expect(badCall).toThrow(Error);
        });
    });
    describe("Circle", () => {
        it("should not throw an error rendering a Circle.", () => {
            const okCall = () => {
                const shape = new Circle();
                shape.render();
            };
            expect(okCall).not.toThrow(Error);
        });
    });
    describe("Triangle", () => {
        it("should not throw an error rendering a Triangle.", () => {
            const okCall = () => {
                const shape = new Triangle();
                shape.render();
            };
            expect(okCall).not.toThrow(Error);
        });
    });
    describe("Square", () => {
        it("should not throw an error rendering a Square.", () => {
            const okCall = () => {
                const shape = new Square();
                shape.render();
            };
            expect(okCall).not.toThrow(Error);
        });
    });
});