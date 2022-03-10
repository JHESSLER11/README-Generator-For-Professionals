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
 
          //License 
          {
            type: 'confirm',
            name: 'licenseYN',
            message: 'Would you like to add Licensing?',
            default: true
          },

          {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses would you like to include? (Check all that apply)',
            choices: ['Apache License 2.0', 'GNU AGPLv3', 'MIT', 'ISC'],
            when: ({ licenseYN }) => {
                if (licenseYN) {
                    return true;
                } else {
                    return false;
                }
            }
            
        },
        //contributing guidelines
        {
            type: 'input',
            name: 'contributors',
            message: 'How would someone contribute to this project?',
            
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
        //github link
        {
            type: 'input',
            name: 'github',
            message: 'Provide your Github user name!',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your Github User name!');
                    return false; 
                }
            }
        },
    
    ];
 


// function to write README file
const writeToFile = data => {
    let newData = generateMarkdown(data)
    fs.writeFile('./dist/README.md', newData, function (error) {
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






