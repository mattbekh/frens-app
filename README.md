# "Frens"

# https://frens-app.herokuapp.com

# Project Description

A social app for students to meet new people with similar interests. Users will be able to input their interests and the app will use machine learning clustering algorithm to look through users who share similar interests. Out app will display a list of matched friends and user can chat with each of them.

---

### A CPSC455 Project by Danny Deng, Ivy He, Matt Bekhterev &amp; Michaux Sun

- [Project Overview](#project-description)
- [Project Goals](#project-goals)
  - [Minimal Requirements](#minimal-requirements)
  - [Standard Requirements](#standard-requirements)
  - [Stretch Requirements](#stretch-requirements)
- [Project Tech Stack](#project-tech-stack)
  - [Unit 1 - HTML CSS JS](#unit-1---html-css-js)
  - [Unit 2 - React Redux](#unit-2---react-redux)
  - [Unit 3 - MongoDB](#unit-3---mongodb)
  - [Unit 4 - Node Express](#unit-4---node-express)
  - [Unit 5 - Release Engineering](#unit-5---release-engineering)
- [Above and Beyond](#above-and-beyond)
- [Next Steps](#next-steps)
- [List of Contributions](#list-of-contributions)

---

# Project Overview

- [Project Demo](https://frens-app.herokuapp.com/)

- Front Page
  ![Alt text](./frens-web/src/images/overview1.png?raw=true "Optional Title")

- Dark Mode
  ![Alt text](./frens-web/src/images/overview6.png?raw=true "Optional Title")

- Profile Page
  ![Alt text](./frens-web/src/images/overview5.png?raw=true "Optional Title")
  ![Alt text](./frens-web/src/images/overview7.png?raw=true "Optional Title")

- Main Page
  ![Alt text](./frens-web/src/images/overview3.png?raw=true "Optional Title")
  ![Alt text](./frens-web/src/images/overview2.png?raw=true "Optional Title")
  ![Alt text](./frens-web/src/images/overview4.png?raw=true "Optional Title")

---

# Project Goals

## Minimal Requirements

- ✅ Welcome page (animation), then display logo (at the top) and "login(goto Login page)" & "register(goto Register page)" button, transition between pages

  - ✅ Login page, with account name and password input

- ✅ Register page, form with input for username, password, email, choose 3 interests from 10
- ✅ Profile page (scrollable), user bio, profile picture, school and general account biography display info, pre-defined questions
- ✅ Main page, display the account information of user (name, picture) as header, updating "find friends" list with suggested friends

## Standard Requirements

- ✅ Account page, displays information about user account and ability to change bio/ photo/ etc
- ✅ Matches page, displays a page of current matches with clickable sections which display their accounts
- ✅ Password reset functionality for login page
- ✅ Add prompts which are displayed once you match with someone

## Stretch Requirements

- ✅ "Remember me" data persistence for the app
- ✅ Chat functionality between matches with chat persistence
- ❌ Ability to send media
- ❌ display mutual friends

---

# Project Tech Stack

## Unit 1 - HTML CSS JS

We use JSX syntax, which allows us to directly write HTML in React, instead of seperating markup and logic in selerated files. We also decided to use styled components so that we can support dynamic styling, because of that, we can save more time and essentially write less CSS. When first enter to the app, we used GSAP animations to create an appealing look to the welcome page.

## Unit 2 - React Redux

We integrated Redux into React, for example, we created a themes toggle which used Redux to maintain a global state for a light and dark theme that was able to switch using an action. We also combined jwt, localStorage and Redux so the logged in user info can be easily accessed between web pages.

## Unit 3 - MongoDB

We created two schema for Users and Questions, created the routes and hooked the entire project to MongoDB and Atlas using Mongoose. We chose the cloud version of MongoDB database because it is easier to scale when user number increases in the future.

## Unit 4 - Node Express

In order to connect to the backend, we created Express backend architecture and linked frontend pages to the server using Axios. We installed diagnostic library Morgan as well as create a custom error class to better identify errors and server calls. We also investigate login authentication using Bcrypt.

## Unit 5 - Release Engineering

We deployed our project on Heroku and set up the CI/CD pipeline with Github. The auto deployment functionality will be triggered by each push on master or final_project branch, if the code passes the test, the project will be auto deployed to our website: https://frens-app.herokuapp.com.

# Above and Beyond

1. user authentication
2. local storage
3. web sockets

# Next Steps

- Ability to send media

  Since we already supported the chat functionality in out app, the next step is to enhance the variety of information to send via chat. Such as voice massage, video, picture.

- display mutual friends

  We plan in the future, to establish a community for friends with similar interests. So our app will not only recommand the friends based on their interests, we will also put mutual friends as one of friend-recommend factors.

# List of Contributions

- Matt Bekhterev

  welcome animation, login page, user authentication, chat,

- Danny Deng

  register page, redux user interest

- Ivy He

  profile page, algo reserach, database connet

- Michaux Sun

  main page, redux distribute user info, python integration
