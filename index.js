const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const { writeFile } = require("fs/promises");

const questions = [
    {
        name: "threeCharacters",
        message: "Enter up to 3 characters:",
        type: "input",
        validate: (input) => {
            if (input.length <= 3) {
                return true;
            }
            return "Enter UP TO 3 characters";
        }
    },
    {
        name: "textColor",
        message: "Enter a text color:",
        type: "input",
        validate: (input) => {
            console.log(`Color input: "${input}"`);

            return true;
        }
    },
    {
        name: "shape",
        message: "Choose a shape:",
        type: "list",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: "shapeColor",
        message: "Enter a shape color:",
        type: "input",
        validate: (input) => {
            console.log(`Color input: "${input}"`);

            return true;
        }
    }
];



function Init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(`answers: ${JSON.stringify(answers)}`);
            // We have a shape, a color, and 3 characters
            var threeCharacters = answers.threeCharacters;
            var textColor = answers.textColor;
            if (textColor === "") {
                textColor = "white";
            }
            var shape = answers.shape;
            var shapeColor = answers.shapeColor;
            if (shapeColor === "") {
                shapeColor = "black";
            }

            let shapeObject;
            switch (shape) {
                case "Circle":
                    shapeObject = new Circle();
                    break;
                case "Square":
                    shapeObject = new Square();
                    break;
                case "Triangle":
                    shapeObject = new Triangle();
                    break;
                default:
                    throw new Error("Shape failed to generated.");
            }


            shapeObject.setColor(shapeColor);
            let svgOutput = `<svg width="300" height="200"><g>`;
            svgOutput += shapeObject.render();
            svgOutput += `<text fill="${textColor}" font-size="45" font-family="Comic Sans" x="0" y="0">${threeCharacters}</text>`;
            svgOutput += "</g></svg>";

            writeFile("icon.svg", svgOutput, (err) => {
                if (err) throw err;
                console.log("Successfully saved icon.svg!")
            });
        })
        .catch((err) => {
            console.log(`Uh ohhh! ERROR: ${err}`)
        });
}

Init();