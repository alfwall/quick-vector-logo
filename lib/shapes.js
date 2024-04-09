class Shape {
    constructor(color, text) {
        this.color = color || "";
        this.text = text || "";
    }
    render() {
        throw Error("What are you doing?? Make a SPECIFIC shape!")
    }
}

class Circle extends Shape {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        console.log("Rendering a CIRCLE...")
    }
}

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        console.log("Rendering a TRIANGLE...")
    }
}

class Square extends Shape {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        console.log("Rendering a SQUARE...")
    }
}

module.exports = {
    Shape: Shape,
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
};