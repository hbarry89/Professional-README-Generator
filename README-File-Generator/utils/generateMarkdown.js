// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = "";
  license  === "None" ? result = "" : result = `![${license}](https://img.shields.io/badge/license-${license}-blue)`
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result = "";
  license  === "None" ? result = "" : result = `* [License](#license)`
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = "";
  license  === "None" ? result = "" : result = `## License
  This project is licensed under the ${license} license.
  `
  return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.license)} 

  ## Description
  
  ${data.description}
  
  ## Tale of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  ${renderLicenseLink(data.license)}
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install neccessary dependencies, run the following command:

  <code>${data.install}</code>
  
  ## Usage
  
  ${data.using}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  <code>${data.run}</code>
  
  ## Questions
  
  If you have any questions you can contact me at ${data.email}. You can see more of my work at [${data.username}](https://github.com/${data.username}).
  
`;
}

module.exports = generateMarkdown;