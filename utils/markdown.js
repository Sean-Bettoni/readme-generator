 function generateReadme(data){

  return`
  # ${data.title}

  ![${data.license}](https://img.shields.io/badge/${data.license}-License-purple)
  ## Table of Contents:
  ${data.description}
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  ### Installation:
  In order to install the necessary dependencies, open the console and run the following:
  ${data.install}
  ### Usage:
  ${data.usage}
  ### License:
  This project is licensed under:
  ${data.license}
  ### Contributing:
  ${data.contribute}
  ### Tests:
  ${data.tests}
  ### Questions:
  If you have any questions please contact me on GitHub:
  (https://github.com/${data.username}), or contact ${data.author} at ${data.email}
  `
}

module.exports = {generateReadme};