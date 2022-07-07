// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        if (data.license === 'Apache') {
                return "![license](//img.shields.io/badge/License-Apache_2.0-blue.svg)";
        } else if (data.license === 'Boose') {
                return "![license](//img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
        } else if (data.license === 'BSD') {
                return "![license](//img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
        } else {
                return "";
        }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        if (data.license === 'Apache') {
                return "![license](https://opensource.org/licenses/Apache-2.0)";
        } else if (data.license === 'Boose') {
                return "![license](https://www.boost.org/LICENSE_1_0.txt)";
        } else if (data.license === 'BSD') {
                return "![license](https://opensource.org/licenses/BSD-3-Clause)";
        } else {
                return "";
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
        console.log("can you see me")

        return "##  <h1>" + data.title + "<br/>" +

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
}

export default generateMarkdown;
