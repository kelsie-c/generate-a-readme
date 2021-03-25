let badge1;
let badge2;
let badge3;
let badge4;
let badge5;
let badge6;
let badge1URL;
let badge2URL;
let badge3URL;
let badge4URL;
let badge5URL;
let badge6URL;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenses) {
  // initiate array that will hold the badge urls of each selected license
  let listOfBadges = [];

  // for each license in the list of licenses
  for (const license of licenses) {
    // declare a new variable and set it equal to the license badge url
    let licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    // add the url to the array 
    listOfBadges.push(licenseBadge);

    // if no license selected
    if (license === 'None' || license === undefined || license === null) {
      // return an empty string
      licenseBadge = '';
      listOfBadges = [];
    }
  }
  badge1 = listOfBadges[0];
  if (badge1 === 'None' || badge1 === undefined || badge1 === null) {
    badge1 = '';
  }
  
  badge2 = listOfBadges[1];
  if (badge2 === 'None' || badge2 === undefined || badge2 === null) {
    badge2 = '';
  }
  badge3 = listOfBadges[2];
  if (badge3 === 'None' || badge3 === undefined || badge3 === null) {
    badge3 = '';
  }
  badge4 = listOfBadges[3];
  if (badge4 === 'None' || badge4 === undefined || badge4 === null) {
    badge4 = '';
  }
  badge5 = listOfBadges[4];
  if (badge5 === 'None' || badge5 === undefined || badge5 === null) {
    badge5 = '';
  }
  badge6 = listOfBadges[5];
  if (badge6 === 'None' || badge6 === undefined || badge6 === null) {
    badge6 = '';
  }

  renderLicenseLink(licenses);

  return [badge1, badge2, badge3, badge4, badge5, badge6];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  let listOfURLs = [];
  for (const license of licenses) {
    let licenseURL = `(http://opensource.org/licenses/${license})`;
    listOfURLs.push(licenseURL);

    if (license === 'None' || license === undefined || license === null) {
      // return an empty string
      licenseURL = '';
      listOfURLs = [];
    }
  }
  badge1URL = listOfURLs[0];
  if (badge1URL === 'None' || badge1URL === undefined || badge1URL === null) {
    badge1URL = '';
  }
  badge2URL = listOfURLs[1];
  if (badge2URL === 'None' || badge2URL === undefined || badge2URL === null) {
    badge2URL = '';
  }
  badge3URL = listOfURLs[2];
  if (badge3URL === 'None' || badge3URL === undefined || badge3URL === null) {
    badge3URL = '';
  }
  badge4URL = listOfURLs[3];
  if (badge4URL === 'None' || badge4URL === undefined || badge4URL === null) {
    badge4URL = '';
  }
  badge5URL = listOfURLs[4];
  if (badge5URL === 'None' || badge5URL === undefined || badge5URL === null) {
    badge5URL = '';
  }
  badge6URL = listOfURLs[5];
  if (badge6URL === 'None' || badge6URL === undefined || badge6URL === null) {
    badge6URL = '';
  }

  return [badge1URL, badge2URL, badge3URL, badge4URL, badge5URL, badge6URL];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const url = 'https://www.github.com/' + data.userName;
  const licenses = data.licenses;
  
  renderLicenseBadge(licenses);
  renderLicenseSection(licenses);
  
  return `# ${data.title}
${badge1}${badge1URL} ${badge2}${badge2URL} ${badge3}${badge3URL} ${badge4}${badge4URL} ${badge5}${badge5URL} ${badge6}${badge6URL}

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

${data.licenses}

## Questions?

[${data.userName}](${url})

Email: ${data.email}
`
;
}

module.exports = generateMarkdown;