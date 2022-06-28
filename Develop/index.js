// TODO: Include packages needed for this application
const generate = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What name did you think of for your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:'
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Whats your GitHub name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What the user needs to know about the repository?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What the user needs to know about contributing to the repository?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What the user needs to know about using the repository?'
        },
        {
            type: 'input',
            name: 'instalation',
            message: 'What the user needs to know about contributing to the repository?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What king of license shoul your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        }
    ])
    .then((data) => {
        const confirm = `${data.title.toLowerCase().split('').join('')}.md`;
        //title
        var stringFile = generate.generateMarkdown(data);
        stringFile = stringFile.concat(generate.addLine());

        //decription
        stringFile = stringFile.concat(generate.generateSubTitle('~Description~'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateDescription(data));
        stringFile = stringFile.concat(generate.addLine());

        
        //table of contents
        stringFile = stringFile.concat(generate.generateSubTitle('~Table of Contents~'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateNewLink('Installation', '#installation'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateNewLink('Usage', '#usage'));//Esta faltando links 
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateNewLink('License', '#license'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateNewLink('Contributing', '#contributing'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateNewLink('Tests', '#tests'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateNewLink('Questions', '#questions'));
        stringFile = stringFile.concat(generate.addLine());


        //Instalation
        stringFile = stringFile.concat(generate.generateSubTitle('Installation'));//feito
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(`To install necessary dependencies, run the following command: \n${data.instalation}`);
        stringFile = stringFile.concat(generate.addLine());

        //Usage
        stringFile = stringFile.concat(generate.generateSubTitle('Usage'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(`${data.usage}`);//feito

        //License
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateSubTitle('License'));//Não sei como fazer
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(`${data.license}`);

        //Contributing
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateSubTitle('Contributing'));
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(`${data.contributing}`);//feito

        //Tests
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateSubTitle('Tests'));//feito
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(`To run tests, run the following command:`, generate.addLine(), `${data.tests}`);

        //gitHub userName/Questions
        stringFile = stringFile.concat(generate.addLine());
        stringFile = stringFile.concat(generate.generateSubTitle('Questions'));
        stringFile = stringFile.concat(generate.addLine())//feito
        stringFile = stringFile.concat('If your have any questions about the repo, contact me ', `${data.email}.`, ' You can find more of my work at ')
        stringFile = stringFile.concat(generate.generateLink(generate.generateUserName(data), generate.generateGitHubLink(data)));
        stringFile = stringFile.concat(generate.addLine());
        



        fs.writeFile(confirm, stringFile , (err) => err ? console.log(err) : console.log('DEu bom'));

    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    

}



// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
