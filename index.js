const fs = require('fs');
const inquirer = require('inquirer');

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Project installation instructions..',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Describe the usage for the project..',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Please enter the license used',
            name: 'license',
            choices: [
                'Apache License 2.0',
                'BSD 3-Clause',
                'GNU (GPL v3)',
                'MIT',
            ],
                filter: (val) => { switch(val) {
                
                    case 'Apache License 2.0': return ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'];
                    case 'BSD 3-Clause': return ['[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' ]
                    case 'GNU (GPL v3)': return ['[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'];
                    case 'MIT': return ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'];
                    default: return [val, '#license']; 
                };
            },
        },
        {
            type: 'input',
            message: 'Enter any contributing information..',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Enter any tests..',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Please enter your Email',
            name: 'email',
        }
    
]).then ((answers) => {
        
const readMeGen = `
        
# ${answers.title}

## Table of Contents
* [1. Description](#description)
* [2. Installation](#installation)
* [3. Usage](#usage)
* [4. License](#license)
* [5. Contributions](#contributions)
* [6. Tests](#tests)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributions
${answers.contributing}

## Tests
${answers.tests} 
`
    fs.writeFile('./README.md', readMeGen, (err) => {
        if (err) throw err
        else {
            console.log('Successfully wrote file to README.md')
        }
    });
});

}

init();