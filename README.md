# social-network-api
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Description
    This is a social network web application API for a social media start up that uses a NoSQL database. This is intended so that the website can handle large amounts of unstructured data. 


  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Testing](#testing)
  5. [Credits](#credits)
  6. [License](#license)
  7. [Questions](#questions)

  ## Installation
  This application is not deployed live, but it is a functional API which can be tested using Insomnia. The user will need to install express version 4.17.1, Mongoose version 7.0.2, and Insomnia to test.

  ## Usage

  When using this application, the user must run "npm start" to start the server, and then the Mongoose models are synced to the MongoDB database. The user will be able to test the GET routes in Insomnia for users and thoughts and the data for each of these routes is displayed in a formatted JSON. The user can test the POST, PUT, and DELETE routes in Insomnia and be able to successfully create, update, and delete users and thoughts in the database. The user can test the user routes through http://localhost:3001/api/users. The user can test the thought routes through http://localhost:3001/api/thoughts. When the user is testing the POST user routes, they can input the following JSON request body into Insomnia: '{ "username": "user5", "email": "user5@gmail.com"}'. When the user is testing the thought POST route, they can inpute the following JSON request body into Insomnia to test: '{"thoughtText": "Here's a cool thought...", "username": "lernantino", "userId": "5edff358a0fcb779aa7b118b"}'. To post and delete friends from a user's friend list, the user can test through http://localhost:3001/api/users/:userId/friends/:friendId. The following link demonstrates the functionality of the application. 


  Here is a link to the walkthrough demo video:
  https://drive.google.com/file/d/1VQ7e-S0Pvh_ajXZIongPjKYKVOZj2y2B/view
  

  ## Contribution
  N/A

  ## Testing
  N/A

  ## Credits
  Used Xpert Learning Assistant, used module 18 activities, referenced the mini project, and used developer.mozilla.org (MDN) as resources to help create code. Also referred to MongoDB & Mongoose documentation, referenced Challenge 18 instructions to set up models, and referenced these links:
  https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
  https://blog.bounceless.io/mastering-email-validation-in-mongoose-syntax-uniqueness-and-beyond/

  

  ## License
  MIT License
  ![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)
  

  For more information on this license, go to: https://opensource.org/licenses/MIT.


  ## Questions
  github.com/sjdavila210
  Email: sarahjdavila210@gmail.com
