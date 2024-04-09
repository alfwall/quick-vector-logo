const { writeFile } = require("fs/promises")
const inquirer = require("inquirer");
const snap = require("snapsvg")

const questions = [
    {
        name: "threeCharacters",
        message: "Enter up to 3 characters:",
        type: "input",
        validate: (input) => {
            //console.log(`3 character input: ${input}`);
            if (input.length <= 3) {
                //console.log(`"${input}" is valid~`);
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

const keysToShapes = {
    "Circle": {Circle},
    "Triangle": {Triangle},
    "Square": {Square}
};

function Init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(`answers: ${JSON.stringify(answers)}`);
            // We have a shape, a color, and 3 characters
            let outputImage = Snap(300, 200);
            //let shape = 
         })
        .catch((err) => { 
            console.log(`Uh ohhh! ERROR: ${err}`)
        });
}

Init();