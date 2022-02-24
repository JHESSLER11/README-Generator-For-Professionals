// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { rejects } = require('assert');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = 
    [
        //Project Name
        {
            type: 'input',
            name: 'projectName',
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
        // Description of Project
        {
            type: 'input',
            name: 'description',
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
        // Table of Contents

        {
            type: 'checkbox',
            name: 'tableContent',
            message: 'What information do you want to add to the table of contents? (Check all that apply)',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
            
        },
        //installation instructions 
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
        // examples of use
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use! (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide usage details!');
                    return false; 
                }
            }
        },
    
        {
            type: 'confirm',
            name: 'newPhoto',
            message: 'Would you like to insert a link to a photo?',
            default: true
        },

        {
            type: 'input',
            name: 'photoDetails',
            message: 'Provide detail of photo you want to insert! (required)',
            when: ({ newPhoto }) => {
                if (newPhoto) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'linkPhoto',
            message: 'Enter a link to your photo. (Required)',
            when: ({ newPhoto }) => {
              if (newPhoto) {
                return true;
              } else {
                return false;
              }
            }
          },
          ///ask if they want another question and use a when to get it back up to new photos
          //License 
          {
            type: 'confirm',
            name: 'license',
            message: 'Would you like to add Licensing?',
            default: true
          },

          {
            type: 'checkbox',
            name: 'licenseTable',
            message: 'What information do you want to add to the table of contents? (Check all that apply)',
            choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
            when: ({ license }) => {
                if (license) {
                    return true;
                } else {
                    return false;
                }
            }
            
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Include the Github user name of all contributors! (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide at least 1 contributor!');
                    return false; 
                }
            }
        },

        //test instructions 
        {
            type: 'input',
            name: 'tests',
            message: 'What do other need to know before testing your product?',
            
        },

        //questions
        {
            type: 'input',
            name: 'questions',
            message: 'Provide an email for questions about your repository!',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your email!');
                    return false; 
                }
            }
        },
    
    ];
 


// function to write README file
const writeToFile = data => {
    let newData = generateMarkdown(data)
    fs.writeFile('README.md', newData, function (error) {
        if (error) {
            return console.log(error);
        } else {
            console.log('Your README was created!')
        }
            
    });
}

const init = () => {
    return inquirer.prompt(questions)
    .then (data => {
        return data;
    })
}
init()
    .then(MD => {
         return writeToFile(MD)
     })






