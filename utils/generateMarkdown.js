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
console.log("generateMarkdown")
return  "##  <h1>" + data.title + "<br/>" +

        "<h2>Description " +
        "<p>" + data.description + "<p/>" + "<br/>" +

        "<h2>Installation " + "<br/>" +
        "<p>" + data.installation + "<br/>" +

        "<h2>Usage " + "<br/>" +
        "<p>" + data.usage + "<br/>" +

        "<h2>License " + "<br/>" +
        "<p>" + data.license + "<br/>" +

        "<h2>Contributors " + "<br/>" +
        "<p>" + data.contributing + "<br/>" +

        "<h2>Testing " + "<br/>" +
        "<p>" + data.tests + "<br/>" +

        "<h2>Table of Contents " + "<br/>" +
        "<p>" + data.github + "<br/><br/>" +

        "<h2>Questions " + "<br/>" +
        "<p>" + data.email;
  
        // return `# ${data.title}

`;
}

module.exports = generateMarkdown;
