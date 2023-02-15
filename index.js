// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your  GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },
    {
        type: 'input', //change to list: MIT, APACHE 2.0, GPL 3.0, BSD 3, None
        message: 'What kind of license should your project have?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies? (npm i)', //make it default if pushed enter
        name: 'install',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests? (npm test)', //make it default if pushed enter
        name: 'run',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'using',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('Generating README...'))
  }
  );

  // message says Generating README... after answering all questions