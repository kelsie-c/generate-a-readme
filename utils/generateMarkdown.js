let licenseArray = [];
let listOfBadges = [];
let licenseURL;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenses) {
  // for each license in the list of licenses
  for (const license of licenses) {
    // declare a new variable and set it equal to the license badge url
    let licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    renderLicenseLink(license);
    // add the url to the array 
    listOfBadges.push(licenseBadge + licenseURL);

    // if no license selected
    if (license === 'None' || license === undefined || license === null) {
      // return an empty string
      licenseBadge = '';
      listOfBadges = [];
    }
  }
  return listOfBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseURL = `(https://opensource.org/licenses/${license})`;
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  
  for (const license of licenses) {
    licenseArray.push(`[${license}]${renderLicenseLink(license)}`);
  }

  return licenseArray;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const url = 'https://www.github.com/' + data.userName;
  const licenses = data.licenses;
  
  renderLicenseBadge(licenses);
  renderLicenseSection(licenses);
  
  return `# ${data.title}
${listOfBadges}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing Instructions](#testing)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installInstruct}

## Usage

${data.usageInfo}

## Contribution

${data.contribution}

## Testing Instructions

${data.testInstruct}

## License

${licenseArray}

## Questions?

[${data.userName}](${url})

Email: ${data.email}
`
;
}

module.exports = generateMarkdown;