// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log(license)
  let licenseBadges = [];
  if (license.includes('Apache 2.0 License')) {
    licenseBadges += 
    '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === []) {
    return '';
  } else {
  return licenseBadges;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = newData => {
  return `
  ${renderLicenseBadge(newData.license)}
  # ${newData.projectName}

  ## Project Description 
  ${newData.description}

  ## Table of Contents
  
  ${newData.tableContent}

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
