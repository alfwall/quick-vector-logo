# Quick Vector Logo

## Description
Command line prompt that generates simple logos as .svg files.

## The Result
[Click here for the video demo!](https://drive.google.com/file/d/1jx8Fg2ivsJrafCF63XuYQKId2UXCIIRy/view?usp=sharing)

## Credits
- [npm inquirer](https://www.npmjs.com/package/inquirer)
- [npm parse-color](https://www.npmjs.com/package/parse-color)

## TODO
- [x] Make this README
- [x] Create the index.js
- [x] `npm i inquirer@8.2.4`
- [x] Write tests for everything 
- [x] Get 3 characters
    - [x] Validate that it's only 3 characters
- [x] Get a TEXT color
    - [x] Allow for hexcodes!
- [x] Get a shape
    - [x] Circle, Triangle, Square ONLY
    - [x] Create Shape class, extended by Triangle, Circle, Square.
- [x] Get a SHAPE color
    - [x] Allow for hexcodes!
- [x] Create the 300x200 .SVG file "logo.svg"
    - [x] console.log("Generated logo.svg")
    - [x] Generate those images!
- [x] Record demo of use WITH TESTS RUN


## User Story
AS a freelance web developer,
I WANT to generate a simple logo for my projects,
SO THAT I don't have to pay a graphic designer.

## Acceptance Criteria
GIVEN a command-line application that accepts user input...

WHEN I am prompted for text,
THEN I can enter up to three characters.

WHEN I am prompted for the text color,
THEN I can enter a color keyword (OR a hexadecimal number).

WHEN I am prompted for a shape,
THEN I am presented with a list of shapes to choose from: circle, triangle, and square.

WHEN I am prompted for the shape's color,
THEN I can enter a color keyword (OR a hexadecimal number).

WHEN I have entered input for all the prompts,
THEN an SVG file is created named `logo.svg`,
AND the output text "Generated logo.svg" is printed in the command line.

WHEN I open the `logo.svg` file in a browser,
THEN I am shown a 300x200 pixel image that matches the criteria I entered.