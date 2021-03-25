// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief project description:',
        },
        {
            type: 'input',
            name: 'installInstruct',
            message: 'Please enter any instructions your user may need to install your project:',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please enter all relevant usage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter your contribution guidelines:',
        },
        {
            type: 'input',
            name: 'testInstruct',
            message: 'Please provide testing instructions:',
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which licenses were used for this project?',
            choices: ['Apache', 'CreativeCommons', 'GNU', 'IBM', 'MIT', 'Mozilla', 'None'],
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(filename, data) {    
    fs.writeFile(filename, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('Successfully wrote to README.md');
      });
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => writeToFile('README.md', data))
        // .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
