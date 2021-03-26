let licenseArray = [];
let licenseList = [];
let listOfBadges = [];
let allBadges = [];
let licenseURL;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenses) {
  // for each license in the list of licenses
  for (const license of licenses) {
    // declare a new variable and set it equal to the license badge url
    let searchCrit;

    if (license === 'Apache') {
      searchCrit = `Apache%202.0-red.svg`;
    } else if (license === 'GNU') {
      searchCrit = `GPL%20v3-lightgrey.svg`;
    } else if (license === 'IBM') {
      searchCrit = `IPL%201.0-blue.svg`;
    } else if (license === 'MIT') {
      searchCrit = `MIT-green.svg`;
    } else if (license === 'Mozilla') {
      searchCrit = `MPL%202.0-yellow.svg`;
    }

    let licenseBadge = `[![License](https://img.shields.io/badge/License-${searchCrit})]`;
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

  allBadges = listOfBadges.join('   ');
  return allBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'Apache') {
    searchLicense = `Apache-2.0`;
  } else if (license === 'GNU') {
    searchLicense = `GPL-3.0`;
  } else if (license === 'IBM') {
    searchLicense = `IPL-1.0`;
  } else if (license === 'MIT') {
    searchLicense = `MIT`;
  } else if (license === 'Mozilla') {
    searchLicense = `MPL-2.0`;
  }

  licenseURL = `(https://opensource.org/licenses/${searchLicense})`;
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  
  for (const license of licenses) {
    licenseArray.push(`[${license}]${renderLicenseLink(license)}`);
  }

  licenseList = licenseArray.join(`

`);
  return licenseList;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const url = 'https://www.github.com/' + data.userName;
  const licenses = data.licenses;
  
  renderLicenseBadge(licenses);
  renderLicenseSection(licenses);
  
  return `# ${data.title}
${allBadges}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing Instructions](#testing-instructions)
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

${licenseList}

## Questions?

[${data.userName}](${url})

Email: ${data.email}
`
;
}

module.exports = generateMarkdown;