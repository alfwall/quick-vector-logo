# Quick Vector Logo

## Description
Command line prompt that generates simple logos as .svg files.

## The Result
![Screenshot of the deployed project.](SCREENSHOT_OF_PROJECT_IN_ASSETS)

## Credits
- [Description of whose code you've taken](URL_TO_THEIR_WEBSITE_AND_OR_CODE)

## TODO
- [x] Make this README
- [ ] Create the index.js
- [ ] `npm i inquirer@8.4.2`
- [ ] Get 3 characters
    - [ ] Validate that it's only 3 characters
- [ ] Get a color
    - [ ] List some pre-defined colors
    - [ ] Allow for hexcodes!
- [ ] Get a shape
    - [ ] Circle, Triangle, Square ONLY
- [ ] Create the 300x200 .SVG file "logo.svg"
    - [ ] console.log("Generated logo.svg")


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