# "Frens"

### A CPSC455 Project by Danny Deng, Ivy He, Matt Bekhterev &amp; Michaux Sun

## Project Description

A social app for students to meet new people with similar interests. Users will be able to input their interests and the app will use machine learning clustering algorithm to look through a list of other users who share similar interests and match with them.

## Project Overview

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

## Minimal Requirements

- Welcome page (animation), then display logo (at the top) and "login(goto Login page)" & "register(goto Register page)" button, transition between pages

  - Login page, with account name and password input

- Register page, form with input for username, password, email, choose 3 interests from 10
- Profile page (scrollable), user bio, profile picture, school and general account biography display info, pre-defined questions
- Main page, display the account information of user (name, picture) as header, updating "find friends" list with suggested friends

## Standard Requirements

- Account page, displays information about user account and ability to change bio/ photo/ etc
- Matches page, displays a page of current matches with clickable sections which display their accounts
- Password reset functionality for login page
- Add prompts which are displayed once you match with someone

## Stretch Requirements

- "Remember me" data persistence for the app
- Chat functionality between matches with chat persistence
- Ability to send media
- display mutual friends

## Minimal Requirements Tasks Break Down

- Register page:
  - **Forms** for user "Basice Info" collection, including textbox, checkbox, radioboxes, etc. Define required fields.
  - **Upload picture(s)** functionality
- Main page:

  - create JSON user, display their info on Main page later on
  - **Header** to display user profile info
  - **List** of "find friends" to display recommendations
  - **Daily auto-updation** functionality with number of total matches or new matches
  - **Clickable** names in "find friends" list to display contact info

- Treat "project_2" as "Development" branch
