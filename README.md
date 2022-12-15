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

## Project Structure

```
findDining/
├─ src/
│  ├─ config/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
├─ .gitignore
├─ CHANGELOG.md
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ Procfile
├─ README.md
├─ client/
│  ├─ public/
│  │  ├─ css/
│  │  ├─ sass/
│  │  ├─ js/
│  │  ├─ img/
│  ├─ views/
│  │  ├─ layouts/
│  │  ├─ includes/

```

## Quick Start

You can view and interact with the the application on your browser by visiting [https://find-dining-app.herokuapp.com/](https://find-dining.herokuapp.com/).  

## Prerequisites

Before you begin, make sure you have met the following prerequisites:

- You have installed the latest version of `<Node>`.
  - You can download the latest LTS version here: [https://nodejs.org/en/](https://nodejs.org/en/).
- You have installed the latest version of `<npm>`.
  - You can download the latest version here: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- You have installed the latest version of Git.
  - You can download Git here: [https://git-scm.com/downloads](https://git-scm.com/downloads).

## **Installing findDining**

To download the `<findDining>` API repo, follow the following instrunctions for your OS.

### **1) Using Git** (Recommended)

Run the following command in your terminal/CLI to clone the API repo.

```
git clone https://github.com/ogre2/findDining.git
```

### **2) Windows**

If you're a Windows OS user, you can install findDining using Git by following the instrunctions above.  
You can also install the project using the **[latest release version](https://github.com/ogre2/findDining/releases)** and downloading the zipped source code folder.

### **3) Linux and MacOS**

If you're a Linux or MacOS user, with the aforementioned prerequisites installed and running on your machine. You can employ the Git method  
to install/clone the repo locally on your machine and test the API.

You can also install the project using the **[latest release version](https://github.com/ogre2/findDining/releases)** and downloading the `<tar.gz>` folder.  
Then in your terminal run the following command to unzip and extract

```
tar -xzf tarfile
```

### **4) Web Browser**

Alternatively, you can view the API on your browser by visiting **[https://find-dining-app.herokuapp.com/](https://find-dining-app.herokuapp.com/)**.  
Note: The API's HTTP requests are limited to `<GET>` requests only. It is recommended that you install and run the project **locally** to take advantage of all created endpoints.

## **Launching/Using API**

1. Using your terminal/CLI, navigate to the **findDining-vX.X.X** folder.
2. Using your terminal/CLI, run the `<npm install>` command to automatically download all dependencies for the project.
3. Using your terminal/CLI, run the `<npm start>` command to launch the API server.
   1. Your console will log '**<span style="color:#15a766">[nodemon] server is running on port: 8080</span>**', to indicate that the API has launched successfully.
   2. Your console will log '**<span style="color:#3f70b8">[nodemon] server connected to Mongo database...</span>**', to indicate that the API has successfully connected to the database.
4. On your browser, navigate to `<localhost:4000>`.
5. You should see `<{"message":"Ok"}>`, which will indicate that the API is working.
6. Visit the various API end points at your leisure.

## API Endpoints

Below are some of the endpoints that are currently accessible, do note that a dedicated API documentation will be created in due time.

### **Open Endpoints**

Open endpoints require no authentication.

| Methods     | URLS             |Description                    |Status|
| ----------- | -----------      | -----------                   | -----------      |
| GET         | /                |Retrieves index view           |200|
| GET         | /api/search      |Retrieves search view          |200|
| GET         | /api/howitworks  |Retrieves how it works view    |200|
| GET         | /api/features    |Retrieves features view        |200|

## Known Bugs

- Spacing on restaurant cards in the search page.
- Responsive layout on devices smaller than tablets.
- Search box on seach page not rendering results page.

## Author

Created and maintained by [Stephen Mwingira](https://www.linkedin.com/in/stephen-mwingira-098819184/).

## Contributors

[@ogre2](https://github.com/ogre2/)

## License

findDining is available under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).