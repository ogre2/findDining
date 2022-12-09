# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/ogre2/findDining/compare/v0.0.5...HEAD
[0.0.5]: https://github.com/ogre2/findDining/compare/v0.0.5...v0.0.4
[0.0.4]: https://github.com/ogre2/findDining/compare/v0.0.4...v0.0.3
[0.0.3]: https://github.com/ogre2/findDining/compare/v0.0.3...v0.0.2
[0.0.2]: https://github.com/ogre2/findDining/compare/v0.0.2...v0.0.1
[0.0.1]: https://github.com/ogre2/findDining/releases/tag/v0.0.1
