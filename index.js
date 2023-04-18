// Download Inquirer@v8.2.4, fs calls file systems as well
const inquirer = require("inquirer");
const fs = require("fs");
// Importing classes from shapes directory
// const { Triangle, Square, Circle } = require("./assets/shapes");
// Creates variable that will be used to get the generateMarkdown data.
const generateMarkdown = require("./utils/generateMarkdown");
// Questions for user input
const questions = [
  // Brand Name
  {
    type: "input",
    name: "title",
    message: "What is your brand name? Enter up to three characters.",
  },
  // Color of the logo
  {
    type: "input",
    name: "color",
    message:
      "Enter a color for the background of your logo. Hexadecimal codes are accepted.",
  },
  // Text Color of the logo
  {
    type: "input",
    name: "textcolor",
    message: "Enter a color for the text of your logo.",
  },
  // Shape of the logo to choose from
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your new logo to be?",
    choices: ["Circle", "Triangle", "Square"],
  },
];

// This is the function that creates the SVG file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw new Error(err);
    console.log(
      "Your new logo is now generated! View it in the newly created 'Logo.svg' file."
    );
  });
}
// This is the function that will initialize the application
function init() {
  console.log(`
    ========================================================
    Create a new branding for your company!
    Answer the following questions/prompts to create your brand.
    ========================================================
    `);

  inquirer.prompt(questions).then((data) => {
    writeToFile("logo.svg", generateMarkdown(data));
  });
}
// Function call to initialize app
init();
