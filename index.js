const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        name: "threeCharacters",
        message: "Enter any 3 characters:",
        type: "input",
        validate: (input) => {
            console.log(`3 character input: ${input}`);
            if (/(.*[a-z]){3}/i.test(input)) {
                console.log("Validate true!");
                return true;
            }
            return "Validate FALSE"
        }
    },
    {
        name: "color",
        message: "Enter a color:",
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
            console.log(`answers: ${answers}`);
            // We have a shape, a color, and 3 characters
            
         })
        .catch((err) => { 
            console.log(`Uh ohhh! ERROR: ${err}`)
        });
}

Init();