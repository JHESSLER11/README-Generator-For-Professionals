// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project name',
            message: 'What is the name of the project? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the project!');
                    return false; 
                }
            }
        },

        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of your project! (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false; 
                }
            }
        },

        {
            type: 'checkbox',
            name: 'table of contents',
            message: 'What information do you want to add to the table of contents? (Check all that apply)',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
            
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Provide the steps to install your project! (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions!');
                    return false; 
                }
            }
        },
    
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init()






