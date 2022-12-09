# findDining

![license](https://img.shields.io/static/v1?label=license&message=Apache%202.0&color=informational)
![contributors](https://img.shields.io/static/v1?label=contributors&message=1&color=success)
![repo size](https://img.shields.io/github/repo-size/ogre2/findDining)
![code size](https://img.shields.io/github/languages/code-size/ogre2/findDining?color=red)
![files](https://img.shields.io/github/directory-file-count/ogre2/findDining?color=skyblue)
![forks](https://img.shields.io/github/forks/ogre2/findDining?style=social)
![stars](https://img.shields.io/github/stars/ogre2/findDining?style=social)

findDining is a fullstack web application that lets users find restaurants and food spots near them based on simple search criterieas. Users can find suggestions through search using keywords, i.e. #ice-cream, or phrases, which will return a number of options near them that sell ice cream.

This application is built on Node.js, Express, EJS, Bootstrap, Sass, and MongoDB.

## Quick Start

You can view and interact with the the application on your browser by visiting [https://find-dining-app.herokuapp.com/](https://find-dining.herokuapp.com/).  
**Note**: The API's HTTP requests are limited to `<GET>` requests only at this time.

## API Endpoints

Below are some of the endpoints that are currently accessible, do note that a dedicated API documentation will be created in due time.

### **Open Endpoints**

Open endpoints require no authentication.

| Methods     | URLS             |Description            |Status|
| ----------- | -----------      | -----------        | -----------      |
| GET         | /    |Retrieves index view           |200
| GET         | /api/search    |Retrieves search view           |200|

## Known Bugs

- Spacing on restaurant cards in the search page.

## Author

Created and maintained by [Stephen Mwingira](https://www.linkedin.com/in/stephen-mwingira-098819184/).

## Contributors

[@ogre2](https://github.com/ogre2/)

## License

findDining is available under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).