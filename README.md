[![node >= 14.16.0](https://img.shields.io/badge/node-%3E%3D14.16.0-brightgreen)](https://nodejs.org/)
[![BSI Studio >= 1.0.0](https://img.shields.io/badge/BSI%20Studio-%3E%3D1.0.0-brightgreen)](https://www.bsi-software.com/cx)
[![BSI CX >= 1.3.0](https://img.shields.io/badge/BSI%20CX-%3E%3D1.3.0-brightgreen)](https://www.bsi-software.com/cx)
[![Latest available version](https://img.shields.io/github/v/tag/bsi-software/bsi-cx-design-master-template-email?label=npm)](https://github.com/bsi-software/bsi-cx-design-master-template-email/releases)

[![Open GitHub issues](https://img.shields.io/github/issues/bsi-software/bsi-cx-design-master-template-email)](https://github.com/bsi-software/bsi-cx-design-master-template-email/issues)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/w/bsi-software/bsi-cx-design-master-template-email)](https://github.com/bsi-software/bsi-cx-design-master-template-email/commits)
[![GitHub last commit](https://img.shields.io/github/last-commit/bsi-software/bsi-cx-design-master-template-email)](https://github.com/bsi-software/bsi-cx-design-master-template-email/commits)
[![GitHub contributors](https://img.shields.io/github/contributors/bsi-software/bsi-cx-design-master-template-email)](https://github.com/bsi-software/bsi-cx-design-master-template-email/graphs/contributors)


# @bsi-cx/design-master-template-email

The [BSI CX](https://www.bsi-software.com/en/cx) master template for e-mails. This repository serves as the foundation for creating new templates. You can fork this repository to create your own BSI CX design. 

This repository uses the [BSI CX design standard library](https://github.com/bsi-software/bsi-cx-design-standard-library-email) for content elements.

To build the design ZIP files, the [BSI CX design build](https://github.com/bsi-software/bsi-cx-design-build) based on webpack is used. Checkout
the [Wiki](https://github.com/bsi-software/bsi-cx-design-build/wiki) to get more information on the design build. 

To get more information on BSI CX designs, checkout our [online documentation](https://bsi-software.github.io/bsi-cx-docs/).

## Requirements

To use this package you have to fulfill the following requirements:

* [Node](https://nodejs.org/) >= 16.16.0
* [NPM](https://nodejs.org/) >= 8.11.0
* A code editor e.g. [Visual Studio Code](https://code.visualstudio.com/), [IntelliJ](https://www.jetbrains.com/idea/)
  or [Web Storm](https://www.jetbrains.com/webstorm/)
* To test your design, you need access to [BSI CX](https://www.bsi-software.com/cx)

## Setup

Fulfill the requirements, download or fork this repository and run the following command in your project folder (where the `package.json` is placed):

````shell script
npm install
````

Make sure you run `npm update` regularly (e.g. once a week).
To view the preview template locally, run the following command:

````shell script
npx webpack serve --config webpack.config.js --mode development --progress
````

## Supported Clients
We do our best to support as much clients as possible. However, discontinued software versions and operating systems are not supported.

## Known issues
The following issues on different email clients are known, but cannot be solved easily due to technical limitations of these email cients.

* __Outlook on Windows__: 
  * Various Ghost lines when zoom level inside email is not 100%
  * Rounded corners on images and buttons not supported
  * Button is not fully clickable and incorrect spacing/indent when text breaks to multiple lines
* __Dark Mode__: Dark mode visualization differs between clients
* __GMX - Windows 10__: Fonts are only displayed correctly if no fallback fonts are specified
* __Web.de - Windows 10__: Fonts are only displayed correctly if no fallback fonts are specified

We would highly appreciate pull requests to resolve these issues if you are able to resolve one of them.

## Emerging issues

If you have any problems using this package or found a bug,
please [create a new issue](https://github.com/bsi-software/bsi-cx-design-master-template-email/issues) in this repository on GitHub.


## Contributing

If you like to contribute to this project, feel free to fork it and create a pull request.