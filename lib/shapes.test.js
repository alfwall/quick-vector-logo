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
        it("should default bgColor to black.", () => {
            let test = new Shape();
            let result = "black";
            expect(test.bgColor).toEqual(result);
        });
        it("should update shape color when updated, I guess?", () => {
            let test = new Shape();
            test.setColor("red")
            let result = "red";
            expect(test.bgColor).toEqual(result);
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
        it("should default bgColor to black.", () => {
            let test = new Circle();
            let result = "black";
            expect(test.bgColor).toEqual(result);
        });
        it("should update bgColor when .setColor() is called.", () => {
            let test = new Circle();
            test.setColor("red");
            let result = "red";
            expect(test.bgColor).toEqual(result);
        });
        it("should render by default correctly.", () => {
            let test = new Circle();
            let result = `<circle cx="150" cy="100" r="75" fill="black" />`;
            expect(test.render()).toEqual(result);
        });
        it("should render with new color correctly.", () => {
            let test = new Circle();
            test.setColor("red")
            let result = `<circle cx="150" cy="100" r="75" fill="red" />`;
            expect(test.render()).toEqual(result);
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
        it("should default bgColor to black.", () => {
            let test = new Triangle();
            let result = "black";
            expect(test.bgColor).toEqual(result);
        });
        it("should update bgColor when .setColor() is called.", () => {
            let test = new Triangle();
            test.setColor("red");
            let result = "red";
            expect(test.bgColor).toEqual(result);
        });
        it("should render by default correctly.", () => {
            let test = new Triangle();
            let result = `<polygon points="40,175 150,10 260,175" fill="black" />`;
            expect(test.render()).toEqual(result);
        });
        it("should render with new color correctly.", () => {
            let test = new Triangle();
            test.setColor("red")
            let result = `<polygon points="40,175 150,10 260,175" fill="red" />`;
            expect(test.render()).toEqual(result);
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
        it("should default bgColor to black.", () => {
            let test = new Square();
            let result = "black";
            expect(test.bgColor).toEqual(result);
        });
        it("should update bgColor when .setColor() is called.", () => {
            let test = new Square();
            test.setColor("red");
            let result = "red";
            expect(test.bgColor).toEqual(result);
        });
        it("should render by default correctly.", () => {
            let test = new Square();
            let result = `<rect x="75" y="25" width="150" height="150" fill="black" />`;
            expect(test.render()).toEqual(result);
        });
        it("should render with new color correctly.", () => {
            let test = new Square();
            test.setColor("red")
            let result = `<rect x="75" y="25" width="150" height="150" fill="red" />`;
            expect(test.render()).toEqual(result);
        });
    });
});