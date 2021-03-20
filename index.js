const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is the project title",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of the project",
    name: "description",
  },
  {
    type: "input",
    message: "Please  provide installation instructions",
    name: "instructions",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What tests should you run to make sure the application deploys appropriately?",
    name: "tests",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
  {
    type: "input",
    message: "What is your name",
    name: "name",
  },
];

inquirer
  .prompt(questions)

  .then(function (data) {
    console.log(data);
    fs.writeFile("KateReadMe.md", convertToMarkDown(data), () =>
      console.log("Wrote to file.")
    );
  });

  function renderLicense(license){
      if (license == "MIT") {
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (license == "APACHE 2.0"){
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        };
        if (license == "GPL 3.0"){
            return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        if (license == "BSD 3") {
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        }
        else
            return ""
        }       
      ;
  
  

function convertToMarkDown(data) {
  return `# ${data.title}
${renderLicense(data.license)}

## Description
${data.description}


## Table of Contents 

*  [Installation](#instruction)

*  [Usage](#usage)

*  [License](#license)

*  [Contributing](#contributing)

*  [Tests](#tests)

*  [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
npm i
\`\`\`

## Usage
​
${data.usage}

## License

The following license is used in this application:
${renderLicense(data.license)}

## Contributing

${data.contribution}

## Tests

To run tests, run the following:
${data.tests}

\`\`\`
npm test
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}.com. You can find more of my work at ${data.github}. This file was authored by ${data.name}
 `;
}
