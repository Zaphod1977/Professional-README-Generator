// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        if (license === 'Apache') {
                return "![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
        } else if (license === 'Boost') {
                return "![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
        } else if (license === 'BSD') {
                return "![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
        } else {
                return "";
        }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        if (license === 'Apache') {
                return "[license](https://opensource.org/licenses/Apache-2.0)";
        } else if (license === 'Boost') {
                return "[license](https://www.boost.org/LICENSE_1_0.txt)";
        } else if (license === 'BSD') {
                return "[license](https://opensource.org/licenses/BSD-3-Clause)";
        } else {
                return "";
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        return "<h2> License </h2><br/>" + renderLicenseBadge(license) + renderLicenseLink(license)
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
        console.log("can you see me")

        return "##  <h1>" + data.title + "</h1>" +

                "<h2>Description</h2> " +
                "<p>" + data.description + "</p>" +

                "<h2>Installation</h2> " +
                "<p>" + data.installation + "</p>" +

                "<h2>Usage</h2> " +
                "<p>" + data.usage + "</p>" +

                // "<h2>License " + "<br/>" +
                // "<p>" + data.license + "<br/>" +
                renderLicenseSection(data.license) + 


                "<h2>Contributors</h2> " +
                "<p>" + data.contributing + "</p>" +

                "<h2>Testing</h2> " +
                "<p>" + data.tests + "</p>" +

                "<h2>Table of Contents</h2> " +
                "<p>" + data.github + "</p><br/>" +

                "<h2>Questions</h2>" + 
                "<p>" + data.email + "</p>";


        // return `# ${data.title}
}

export default generateMarkdown;
