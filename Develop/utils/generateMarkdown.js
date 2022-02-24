// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = newData => {
  return `
  # ${newData.title}

  ## Project Description 
  ${newData.description}

  ## Table of Contents 
  ${newData.tableContents}

  ## Instillation for use
  ${newData.instillation}

  ## Instructions of use
  ${newData.usage}

  ### ${newData.photoDetails}
  ![alt text](${newData.linkPhoto})

  ## License
  ${newData.LicenseTable}

  ## Contributors
  ${newData.contributors}

  ## Test 
  ${newData.tests}

  ## Contact information for questions 
  ${newData.questions}
`;
}

module.exports = generateMarkdown;
