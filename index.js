// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

import generateMarkdown from '../Professional-README-Generator/utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "what is the title of your readme"
    },
    {
        type: 'input',
        name: 'description',
        message: "leave a brief description"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Add some installation instructions"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the application used for?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Select License",
        choices: [
            'Apache',
            'Boost',
            'BSD'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Are there any contributors on this project?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Do you have any tests for your application"
    },
    {
        type: 'input',
        name: 'github',
        message: "Do you have a Github you'd like to add"
    }, {
        type: 'input',
        name: 'email',
        message: "Please include your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log("You've done it. Congradulations")
        // file written successfully
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
           var data = generateMarkdown(answers);
           writeToFile("README.md", data)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
