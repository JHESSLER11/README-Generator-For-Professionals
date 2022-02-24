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
const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Project Description 
  ${data.description}

  ## Table of Contents 
  ${data.tableContents}

  ## Instillation for use
  ${data.instillation}

  ## Instructions of use
  ${data.usage}

  ### ${data.photoDetails}
  ![alt text](${data.linkPhoto})

  ## License
  ${data.LicenseTable}

  ## Contributors
  ${data.contributors}

  ## Test 
  ${data.tests}

  ## Contact information for questions 
  ${data.questions}
`;
}

module.exports = generateMarkdown;
