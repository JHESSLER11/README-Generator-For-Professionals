// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


const renderLicenseBadge = license => {
  console.log(license)
  let licenseBadges = [];
  if (license.includes('Apache License 2.0')) {
    licenseBadges += 
    '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } if (license.includes('GNU AGPLv3')) {
    licenseBadges += 
    '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  }
   if (license.includes('MIT')) {
  licenseBadges += 
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license.includes('ISC')) {
    licenseBadges += 
    '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }
  

  if (!license.length) {
    return '';
  } else {
  return licenseBadges;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string    **********not needed likley 
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = newData => {
  return `
  # ${renderLicenseBadge(newData.license)}
  # ${newData.projectName}

  ## Project Description 
  ${newData.description}

  ## Table of Contents
  - [Instillation](#Instillation-for-use)
  - [Instructions](#Instructions-of-use)
  - [License](#License)
  - [Contributors](#Contributors) 
  - [Test](#Test) 
  - [Contact information](#Contract-information-for-questions)

  ## Instillation for use
  ${newData.installation}

  ## Instructions of use
  ${newData.usage}

  ### ${newData.photoDetails}
  ![alt text](${newData.linkPhoto})

  ## License
  ${newData.license}

  ## Contributors
  ${newData.contributors}

  ## Test 
  ${newData.tests}

  ## Contact information for questions 
  ${newData.questions}
`;
}

module.exports = generateMarkdown;
