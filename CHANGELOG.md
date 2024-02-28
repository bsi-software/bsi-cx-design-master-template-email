# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 02.02.2024

### New Features for templates with version CX 23.2:
* Introduced new format for CX styles, which allows DOM manipulations
* Replacement of similar elements by elements with CX styles
* Archiving of elements that are no longer required due to CX styles
* Add styling for CX placeholder/bracket links (e.g. [unsubscribe])

### Other Changes
* Improved accessibility:
    * Keep alt attributes empty if only decorative images are included
    * Smiley rating element: transfer alt texts to properties file
* Social media follow element: replaced Twitter by X
* Dependency updates

[1.2.0]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.2.0


## [1.1.5] - 14.12.2023

### Changes
* Extension of overwriting properties: Social follow alignment
* Dependency updates

[1.1.5]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.1.5


## [1.1.4] - 22.09.2023

### Changes
* Extension of overwriting properties: Pre-Header text and colored footer width
* Dependency updates

[1.1.4]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.1.4

## [1.1.3] - 05.06.2023

### Changed
* Major dark mode issues fixed. To solve the remaining, [we are looking for your help](https://github.com/bsi-software/bsi-cx-design-master-template-email/issues/26)

[1.1.3]: https://github.com/bsi-software/bsi-cx-design-master-template-email/releases/tag/1.1.3

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