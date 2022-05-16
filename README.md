# wayfair-frontend-task
Repo that contains the take home assessment project

## Dependencies
* React: 18.1.0
* Node: 16.15.0
* npm: 8.9.0

Package  | Version
------------- | -------------
@reduxjs/toolkit  | 1.8.1
@testing-library/jest-dom  | 5.16.4
@testing-library/react  | 13.2.0
@testing-library/user-event  | 13.5.0
axios  | 0.27.2
bootstrap  | 5.1.3
react-redux  | 8.0.1
react-scripts  | 5.0.1
react-icons  | 4.3.1
react-test-renderer  | 18.1.0

## Install the project locally & test it
* Run 'git clone https://github.com/musakhalil/wayfair-frontend-task.git partnerhomeapplication' to get the project source
* Run 'cd partnerhomeapplication' to enter project directory
* Run 'npm install' to get modules/packages files required for the project
* Run 'npm start' to run the application. Navigate to the localhost link shown in the cmd to access the application

## Steps for building project using cmd.exe

* Install create react package: npm install -g create-react-app
* * Create react project: npx create-react-app partnerhomeapplication
* Access created project: cd partnerhomeapplication
* Install Redux: npm install react-redux
* Install Redux Toolkit: npm install @reduxjs/toolkit
* Install Bootstrap: npm install bootstrap
* Install React Icons Package: npm install react-icons –save
* Install Axios: npm install axios
* Install Redux Mock Store for testing purposes: npm install redux-mock-store --save-dev
* Install React Test Renderer for testing purposes : npm install react-test-renderer
* Create assets folder: mkdir src\assets, then copy the files from src/assets directory in the repo
* Create api folder: mkdir src\api, then copy the files from src/api directory in the repo
* Create components folder: mkdir src\components, then copy the files from src/components directory in the repo
* Create containers folder: mkdir src\containers, then copy the files from src/containers directory in the repo
* Create reducers folder: mkdir src\reducers, then copy the files from src/reducers directory in the repo
* remove logo.svg file in the root of src folder which was added automatically when creating the project, then replace the below files with the files from the src folder in the repo:
** index.js
** App.test.js
** App.js
** App.css
* Run 'npm start' to run the application. Navigate to the localhost link shown in the cmd to access the application
* Run 'npm test' to test the application, press a to run all tests

## Notes
* If you are copying the files from the repsitory, run npm install after getting the project locally so it would install the needed modules so the project would run without any problems

## Enhancements
* Expand test cases and separate each components tests in a separate file in tests folder
* Explore the option to deploy the Side Menu component in a different project to be used in other projects as a reusable component
* Test/Adjust the design to be responsive for different screens sizes
* Check cross-browser compatibility to make sure the application works well on all browsers
