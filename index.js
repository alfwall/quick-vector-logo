const inquirer = require("inquirer");
const fs = require("fs");

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
        name: "color",
        message: "Enter a color:",
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
    }
];

function Init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(`answers: ${JSON.stringify(answers)}`);
            // We have a shape, a color, and 3 characters
            // TODO: LEARN SNAP.SVG
         })
        .catch((err) => { 
            console.log(`Uh ohhh! ERROR: ${err}`)
        });
}

Init();