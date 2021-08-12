# "Frens"

# https://frens-app.herokuapp.com

# Project Description

A social app for students to meet new people with similar interests. Users will be able to input their interests and the app will use a machine learning clustering algorithm to look through users who share similar interests. Our app will display a list of suggested friends and users can chat with each of them.

---

### A CPSC455 Project by Danny Deng, Ivy He, Matt Bekhterev &amp; Michaux Sun

- [Project Overview](#project-description)
- [Project Goals](#project-goals)
  - [Minimal Requirements](#minimal)
  - [Standard Requirements](#standard)
  - [Stretch Requirements](#stretch)
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
  
- chat
  ![Alt text](./frens-web/src/images/overview8.png?raw=true "Optional Title")
 

---

# Project Goals

## Minimal 

- ✅ Welcome page (animation), then display logo (at the top) and "login(goto Login page)" & "register(goto Register page)" button, transition between pages 
- ✅ Login page, with account name and password input
- ✅ Register page, form with input for username, password, email, choose 3 interests from 10
- ✅ Profile page (scrollable), user bio, profile picture, school and general account biography display info, pre-defined questions
- ✅ Main page, display the account information of user (name, picture) as header, updating "find friends" list with suggested friends

## Standard 

- ✅ Set up Express and connect frontend to the backend, setup routes with Axios
- ✅ Data persistence with MongoDB, as well as data security with B-Crypt
- ✅ User Authentication with JWT/ local storage
- ✅ Deploy to Heroku, serve frontend on backend
- ❌ Add prompts which are displayed once you match with someone

## Stretch 

- ✅ Chat functionality between matches with chat persistence
- ✅ Implement Machine Learning Cluster Algorithm to generate suggested users
- ❌ "Remember Me" and "Forgot Your Password?" functionality for login page
- ❌ Ability to send media
- ❌ Display mutual friends

---

# Project Tech Stack

## Unit 1 - HTML CSS JS

When it comes to Web Applications, having HTML CSS AND JS in your project is essential because everything is built upon these (other than the unlikely event that you're using Silverlight or JavaFX). Although we used styled components instead of the standard CSS sheets, our knowledge of CSS has allowed us to create an appealing UI without the use of stock frameworks like Material-UI. There are benefits to using styled components over CSS sheets, like code cleanliness, dynamic styling and of course themes which we used to create our Dark Mode. Having themes opens up a world of opportunity for the user to customize their own identity on the app, along with the obvious benefit to working in a team and having clean code our choice of using styled-components enhances user experience.

## Unit 2 - React (Redux)

Because we are designing a single page web application, there are a few contenders to choose from to serve as the front-end framework. However, React is easy to learn and easy to use and comes with a great Dev Tools which came in handy when implemented Redux as opposed to Angular or Vue. Having React makes the responsiveness of the application much faster because it re-renders components when something changes instead of having to refresh the page, etc. Even though Redux was not covered during the lecture we think its worthwhile to mention how easily it integrates with React and how useful it is to a full-stack application. Sharing data across multiple pages and classes would become nightmare when trying to pass things through props, also considering that you can only pass down, Redux makes this very easy and preserves developer sanity.

## Unit 3 - MongoDB

Data persistence is crucial to any project, so having some sort of database is important. However MongoDB worked exceptionally well in our case because our application is based on users and their data (name, email, interests, etc). Since users are inherently different, they require different information to be stored, which is one of the limitations to having an SQL database. With the use of MongoDB we are able to define schemas for Users which are very malleable depending on which information we want (or not want) to store about a specific user. The cloud version of MongoDB (Atlas) also scales easier when the user number increases as the app becomes more popular. Mongoose is also a very handy ODM, which made our interaction with MongoDB easy and hassle free.

## Unit 4 - Node Express

Node is a lightweight and efficient way to execute Javascript code outside the browser, specifically it is a Javascript runtime which allows us to build the backend. Since Node is event driven it helps us handle asynchronous JS code, which is essentialy for our project since user interactions are asynchronous. Express is a user friendly framework which has made our server setup smooth and problem free. Express made it easy to define routes, listen on specific ports and even serve the frontend when deploying to Heroku.

## Unit 5 - Release Engineering

We deployed our project on Heroku and set up the CI/CD pipeline with Github. Aside from being extremely user friendly (unlike AWS), we chose to use Heroku because they provided us with a personal public link without the need of buying and registering a domain as well as the ability to use their services for free without the need of a credit card. By writing an Action which sets up the auto deployment functionality, automatic deployment will be triggered by each push on master or final_project branch, if the code passes the test, the project will be auto deployed to our website: https://frens-app.herokuapp.com.

# Above and Beyond

## User Authentication

We set up user authentication with the use of JSON Web Token. Once a user is logged in essentially all the user information (name, email, interests, etc) are written into a Token which is encrypted and stored into local storage, this Token is then used throughout the app through decryption to provide a better user experience. To further increase security of the app we also made the Web Token have an expiration date, which then wipes the token after a set amount of time to prevent malicious users from tampering with other users data. Paired with B-Crypt password encryption, such web tokens provide a much more secure application. We wanted to simulate a real-world application, beyond what is required in this course, and it would be hard to find any application which doesn't have user authentication. Since it is such a widely used feature, we knew that we had to work hard to implement it and learn how to do it. 

## Chat

We implemented the ability for users to be able to chat with each other. The chat feature is built upon Web Sockets with the use of the Socket.IO library, sockets provide a multi-directional channel for users to exchange information in real-time which is much faster than waiting for HTTP requests. The entire task seemed like a daunting challenge because sockets are Event Driven and therefore inherently asynchronous, and nothing related to implementing them was covered in the course. But, we were up for the challenge because it seemed like a social platform like "Frens" would be incomplete without the ability to chat with other users.

## Machine Learning Clustering Algorithm 

Our application uses machine learning clustering algorithm to generate clusters of users which share similar interests, by having such clusters we can produce lists of suggested friends for each individual user. Our entire idea for this project revolved around the concept of connecting people with similar interests, so that they can make meaningful connections. After considering a few different algorithms (K-means, DBScan, etc) and the advantages and disadvantages of each of them, we decided to go with K-Modes because the data we use is categorical, and K=Modes works well with categorical data. We believe that this makes our project unique and different from a lot of the other team projects, so it was important for us to accomplish this goal even though it wasn't a strict requirement.

# Next Steps

## Chat Persistence
  Given more time it would be great to have chat history persist with the use of the database. With that ability users will be able to message "offline" users, start chats with multiple people, and see any messages which they may have missed. 

## Ability to send media
  Since we already supported the chat functionality in out app, the next step is to enhance the variety of information to send via chat. Such as voice massage, video, picture.

## Enhance User Experience
  Adding "remember me" with the use JWT/ local storage would make it more convenient for users returning to our app. As well "Forgot your password?" functionality, with predetermined user verification questions and a reset password page.

## Display mutual friends
  We plan in the future, to establish a community for friends with similar interests. So our app will not only recommend the friends based on their interests, we will also put mutual friends as one of friend-recommend factors.

# List of Contributions

## Matt Bekhterev

  - Designed and Developed the Welcome page
  - Built the login page and implemented password encryption
  - Implemented the chat logic, set up Sockets and relevant routes

## Danny Deng

  - Set up the register page
  - Helped to build the redux 
  - Designed the Chat UI

## Ivy He

  - Created the profile page
  - Researched the machine learning clustering algorithm 
  - Connected to the database and Heroku

## Michaux Sun

  - Created the main page
  - Implemented user authentication/ persistence using JWT/ local storage and Redux
  - Integrated the python script, generated recommended friends list
