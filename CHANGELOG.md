# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2022-12-14

### Added

- Added project folder structure diagram in README file.

### Changes

- Fixed API endpoints section.

## [1.1.0] - 2022-12-14

### Added

- Added how it works page.
- Added features page.

### Changes

- Fixed home page.
- Fixed release links in CHANGELOG file.
- Fixed footer.
- Removed support tab from navigation.
- Fixed search page.

## [1.0.9] - 2022-12-11

### Changes

- Fixed typo under [1.0.8] changes.

## [1.0.8] - 2022-12-11

### Changes

- Removed unnecessary files (null.json, restaurants.json, reviews.json).
- Added anchor and span tag targets in `_body.scss` file.
- Reformated order of .scss files.
- Added function to handle heights and widths in `_functionss.css` file.

## [1.0.7] - 2022-12-11

### Added

- Completed index page design/layout and content added.
- Added branding and links to footer.
  - Added CTA area in footer.
- Created model for user testimonials/reviews.
  - Imported reviews in index and search page.
- Added necessary images for testimonials/reviews area.

### Changes

- Fixed footer layout.
- Added margins to footer.
- Added new color to variables file in the sass directory.
- Fixed CHANGE log release links.

## [1.0.6] - 2022-12-09

### Added

- Added content to index page.
  - Experimenting with Bootstrap column layouts.
- Added custom functions to handle margins and padding css code generation.
- Added custom index page code.

### Changes

- Reorganized sass files.

## [1.0.5] - 2022-12-09

### Added

- Started the frontend Sass styles.
  - Compiled into centralized .css file.
- Created footer includes file, added in the layout file.
- Images and favicons in the public/img folder.

### Changes

- Connected favicon to the main frontend layout file.
- Removed styles hard coded in the layout file.
- Connected the dedicated stylesheet.
- Added link to public files/assets in server file.
- Added finDining logo in navigation bar.

## [1.0.4] - 2022-12-09

### Changes

- Fixed project description in README file.
- Added known bugs section, and API endpoints section to README file.
- Added quick start section in README file.

## [1.0.3] - 2022-12-09

### Changes

- Removed `restaurants.json` file.

## [1.0.2] - 2022-12-09

### Added

- Started the frontend configuration.
  - Configured ejs as view engine.
- Created `<client>` subdirectory to house all frontend files and code. Linked in server file.
  - Created `<views>` subdirectory in the client folder to house all frontend views of app. Linked in server file.
  - Created `<includes>` subdirectory in the `<client\views>` folder for navigation, footer, and other frontend components.
  - Created the main frontend layout file, configured with minimal settings to rendered views.
- Successfully linked frontend dependencies in server file.
- Successfully rendered restaurants data in the `/api/search` endpoint.
- Successfully linked root endpoint to search endpoint.

## [1.0.1] - 2022-12-09

### Changes

- Fixed release 1.0.0 date.
- Added restaurants results limit to 100 in the search controller.
  - Temporary fix to help with loading issues when deployed to Heroku.

## [1.0.0] - 2022-12-09

### Added

- Created search router file to manage the ROOT endpoint methods/requests.
- Created search controller to house all request logic associated with the API index endpoint.
- Installed mongoose-long to help with Restaurant model data types.
- Created the restaurant model schema.
- Successfully connected backend to MongoDB server.
- Generated restaurant data (provided by MongoDB test data sets).
  - Successfully loaded restaurants in the `/api/search` endpoint.

### Changes

- Imported database connection code to config index file.
- Enabled database connection in server file.
- Enabled search router in the server file.

## [0.0.9] - 2022-12-08

### Changes

- Removed release tracker badge in README file.

## [0.0.8] - 2022-12-08

### Changes

- Corrected links to latest two releases and linked compare to HEAD.

## [0.0.7] - 2022-12-08

### Added

- Created dedicated routes subdirectory within `<src>` to house API router code.
- Created dedicated controller subdirectory within `<src>` to house API router controller code.
- Created index router file to manage the ROOT endpoint methods/requests.
- Created index controller to house all request logic associated with the API index endpoint.

### Changes

- Moved root API endpoint code to dedicated index router file.
- Enabled case sensitive routing in the server.

## [0.0.6] - 2022-12-08

### Added

- Procfile for Heroku deployment.

### Changes

- Changed release version badge in README file.
- Changed repo size badge in README file.

## [0.0.5] - 2022-12-08

### Added

- Added dedicated backend environment variable configurations subdirector (`<src/config>`).
  - Imported configuration file in the `server` file.
- Configured port variable to use for server.

### Changes

- Imported and utilized custom port variable in `server` file.
- Modified script in `<package.json>` file to run nodemon with server file.

## [0.0.4] - 2022-12-08

### Added

- Added `<src>` subdirectory to house all backend code for the API.
- Created a server file in the `<src>` subdirectory with a basic express server build to test that the server setup is working.

## [0.0.3] - 2022-12-08

### Changes

- Fixed v0.0.2 release link.
- Pasted details in README file.

## [0.0.2] - 2022-12-08

### Added

- This CHANGELOG file to track the evolution of the project.
- `README.md` now contains a detailed project description along with contact information.
- Initialized npm and installed backend and frontend dependencies to get project up running.
- `<package.json>` and `<package-lock.json>` to track added and removed dependencies.

## [0.0.1] - 2022-12-08

### Added

- [Repository license document](https://github.com/ogre2/findDining/blob/main/LICENSE).
- [README.md](https://github.com/ogre2/findDining/blob/main/README.md) file, with skeleton project details.
- [.gitignore](https://github.com/ogre2/findDining/blob/main/.gitignore) file.

[Unreleased]: https://github.com/ogre2/findDining/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/ogre2/findDining/compare/v1.1.1...v1.1.0
[1.1.0]: https://github.com/ogre2/findDining/compare/v1.1.0...v1.0.9
[1.0.9]: https://github.com/ogre2/findDining/compare/v1.0.9...v1.0.8
[1.0.8]: https://github.com/ogre2/findDining/compare/v1.0.8...v1.0.7
[1.0.7]: https://github.com/ogre2/findDining/compare/v1.0.7...v1.0.6
[1.0.6]: https://github.com/ogre2/findDining/compare/v1.0.6...v1.0.5
[1.0.4]: https://github.com/ogre2/findDining/compare/v1.0.4...v1.0.3
[1.0.3]: https://github.com/ogre2/findDining/compare/v1.0.3...v1.0.2
[1.0.2]: https://github.com/ogre2/findDining/compare/v1.0.2...v1.0.1
[1.0.1]: https://github.com/ogre2/findDining/compare/v1.0.1...v1.0.0
[1.0.0]: https://github.com/ogre2/findDining/compare/v1.0.0...v0.0.9
[0.0.9]: https://github.com/ogre2/findDining/compare/v0.0.9...v0.0.8
[0.0.8]: https://github.com/ogre2/findDining/compare/v0.0.8...v0.0.7
[0.0.7]: https://github.com/ogre2/findDining/compare/v0.0.7...v0.0.6
[0.0.6]: https://github.com/ogre2/findDining/compare/v0.0.6...v0.0.5
[0.0.5]: https://github.com/ogre2/findDining/compare/v0.0.5...v0.0.4
[0.0.4]: https://github.com/ogre2/findDining/compare/v0.0.4...v0.0.3
[0.0.3]: https://github.com/ogre2/findDining/compare/v0.0.3...v0.0.2
[0.0.2]: https://github.com/ogre2/findDining/compare/v0.0.2...v0.0.1
[0.0.1]: https://github.com/ogre2/findDining/releases/tag/v0.0.1
