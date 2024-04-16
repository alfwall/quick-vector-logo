class Shape {
    constructor() {
        this.bgColor = "black";
        this.text = "";
    }
    render() {
        throw Error("What are you doing?? Make a SPECIFIC shape!")
    }
    setColor(newColor) {
        this.bgColor = newColor;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
    render() {
        //console.log("Rendering a CIRCLE...")
        return `<circle cx="150" cy="100" r="75" fill="${this.bgColor}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        //console.log("Rendering a TRIANGLE...")
        return `<polygon points="40,175 150,0 260,175" fill="${this.bgColor}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        //console.log("Rendering a SQUARE...")
        return `<rect x="75" y="25" width="150" height="150" fill="${this.bgColor}" />`;
    }
}

module.exports = {
    Shape: Shape,
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
};