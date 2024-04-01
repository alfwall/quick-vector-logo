const inquirer = require("inquirer")
const fs = require("fs")

const questions = [
    {
        name: "threeLetters",
        message: "Enter any 3 characters:",
        type: "input"
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
]

function Init() {
    inquirer.prompt().then((answers) => {}).catch((err) => {});
}

Init();