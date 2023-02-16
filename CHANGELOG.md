# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 16.02.2023

### Changed
* This package is now pulling the `@bsi-cx/design-standard-library-email` package from NPM
* Bump dependencies

[1.1.2]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.1.2

## [1.1.1] - 27.12.2022

### Changed
* Bump dependencies, use the new Library 1.1.1 features

For all new features and bug fixes, please refer to the [Library 1.1.1 Release Notes](https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.1)

[1.1.1]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.1.1


## [1.1.0] - 13.12.2022

### Changed
* New properties added to support Library 1.1.0 features
* Support to change the visited link color for CTA Button on Outlook for windows
* Better CSS reset for Outlook
* Dependency updates

Pay attention to the following breaking changes, that came in with the new library release:
* CTA Button: We've added a new default implementation that is more robust among different clients. As a consequence, rounded corners in Outlook are no longer supported. If you intend to keep the previous implementation, set 'buttonLegacyVml: true' in the properties.js
* Dark Footer Layout: the dark background color now spans over the entire width, which is the default use case for most brands.

For all new features and bug fixes, please refer to the [Library 1.1.0 Release Notes](https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.0)

[1.1.0]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.1.0

## [1.0.2] - 04.11.2022

### Changed
* Dependency updates
* Outlook Layout improvements
* Explanations for sizing properties

[1.0.2]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.0.2


## [1.0.1] - 23.08.2022

### Changed
* Add migration guide
* Extend preview

[1.0.1]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.0.1


## [1.0.0] - 19.08.2022

### Changed
* Extend dropzones in `design.js`
* Add dark mode support
* Bug fixes on various email clients
* Extend two column ratio 2:1 element
* Add german translation of labels

[1.0.0]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.0.0


## [1.0.0-rc.3] - 25.07.2022

### Changed
* Update dependencies

[1.0.0-rc.3]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.0.0-rc.3


## [1.0.0-rc.2] - 30.06.2022

### Changed
* Add dropzone allowed elements

[1.0.0-rc.2]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.0.0-rc.2


## [1.0.0-rc.1] - 28.06.2022

### Added
* Master template for email designs.

[1.0.0-rc.1]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.0.0-rc.1