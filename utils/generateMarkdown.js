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
function generateMarkdown(data) {
  return `# ${data.title}
  # Weather-Dashboard <!-- project name -->
  <!-- license badge -->
  <!-- https://img.shields.io/badge/license-MIT-blue.svg -->
  <!-- https://img.shields.io/badge/license-APACHE%202.0-blue -->
  <!-- https://img.shields.io/badge/license-GPL%203.0-blue -->
  <!-- https://img.shields.io/badge/license-BSD%203-blue -->
  
  ## Description
  
  <!-- description -->
  
  ## Tale of Contents
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)
  
  ## Installation
  
  To install neccessary dependencies, run the following command:
  <!-- data here -->
  
  ## Usage
  
  <!-- data here -->
  
  ## License
  
  <!-- data here -->
  
  ## Contributing
  
  <!-- data here -->
  
  ## Tests
  
  To run tests, run the following command:
  
  <!-- data here -->
  
  ## Questions
  
  If you have any questions about the repository, open an issue or contact me directly at  <!-- username --> . You can see more of my work at
  <!-- username link here --> .
  
`;
}

module.exports = generateMarkdown;
