// This will reference the local file storage
const fs = require('fs');
// This will reference inquirer
const inquirer = require('inquirer');
// This will reference markdown.js which is the function that creates the readme.md file
const markdown = require('./utils/markdown');


// This is the prompt for the inquirer questions
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your projects description?"
    },       
    {
        type: 'input',
        name: 'install',
        message: "What are the instillation instructions for this project?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: [
            'The_Unlicense',
            'MIT_License',
            'Apache_License_2.0',
            'GNU_AGPLv3',
            'GNU_GPLv3',
            'GNU_LGPLv3',
            'Mozilla_Public_License_2.0',
            'Boost_Software_License 1.0',    
        ]
    },    
    {
        type: 'input',
        name: 'usage',
        message: "How is this application used?"
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is the authors name?'
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },    
])

.then((response) => {

    let readmeContent = markdown.generateReadme(response)

    //This will create the readme file
    fs.writeFile('Generated-README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
});
