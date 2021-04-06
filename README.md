# Digital-ToolBelt

[View Live Site](https://digital-toolbelt.netlify.app/)

## Overview

_**Digital Toolbelt** is designed to be another tool in a contractors tool belt to help manage the business.
The software will help keep track of materials and time for a project, and keep a running total so that it is
simple to see if a project is coming in at or under budget. This will help lead to more accurate bids in the future and a lead to a more profitable business._


<br>

## MVP

> The MVP of this project is to create a simple and intuitive app for contractors to keep track of their projects on the go. It will utilize a ruby/rails backend to create and store 4 tables to keep track of users, projects, materials, and time. The frontend will be a react architecture that will allow the user to sign in. Once authorized the user can add and edit projects as necessary to keep track of time, costs, and details on the project. 

<br>

### Goals

- _Authorization_
- _Full crud on both backend and frontend_
- _Clean well documented code_
- _Nicely styled and intuitive site_

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The frontend framework to build highly responsive app._ |
|   React Router   | _The react package to aid in routing between pages in the app._ |
|     AXIOS        | _The package to control GET/POST/PUT/DELETE from frontend to backend._ |
| Styled Components| _Package to write CSS directly in the react component._ |
|    Bcrypt Gem    | _Password encryption_ |
|    JWT Gem       |_Token Based Authentication_|

<br>

### Client (Front End)

#### Wireframes

[View All Wireframes](https://whimsical.com/UE2dxyXNXDkEiFdeztQ7pf)

#### Component Tree

![Component Tree ](https://i.imgur.com/TwvqQm5.png)

#### Component Architecture


``` structure

src
|__ Screens/
      |__ Landing.jsx
      |__ SignUp.jsx
      |__ SignIn.jsx
      |__ Projects.jsx
      |__ ProjectDetail.jsx
      |__ AddProduct.jsx
      |__ EditProduct.jsx
|__ components/
      |__ Layout.jsx
      |__ Footer.jsx
      |__ Nav.jsx
      |__ ProjectCard.jsx
|__ containers/
      |__ ProjectsContainer.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ projects.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time | 
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Rails Backend Setup |    H     |     3 hrs      |     3 hrs     |    3 hrs      |
| Testing Backend     |    H     |     3 hrs      |     1 hrs     |     1 hrs     |
| Deploying Backend   |    H     |     1 hrs      |     .5 hrs     |     .5 hrs     |
| Miscelaneous Backend Updates/Changes |    H     |     3 hrs      |     1 hrs     |     1 hrs     |
| Frontend CRUD Routes |    H     |     2 hrs      |     2 hrs     |     2 hrs   |
| Landing Page         |    H     |     3 hrs      |     2 hrs     |     2 hrs    |
| Sign Up/Sign In      |    H     |     2 hrs      |     3 hrs     |     2 hrs     |
| Project Component    |    H     |     3 hrs      |     2 hrs     |     2 hrs   |
| Projects Screen    |    H     |     2 hrs      |     3 hrs     |     3 hrs    |
| Projects Detail Screen    |    H     |     3 hrs      |     4 hrs     |     4 hrs     |
| Add Project Screen    |    H     |     2 hrs      |     2 hrs     |     2 hrs    |
| Edit Project Screen    |    H     |     2 hrs      |     1 hrs     |     1 hrs    |
| CSS Flex and Grid |    H     |     10 hrs      |     6 hrs     |     6 hrs   |
| Media Queries    |    H     |     3 hrs      |     2 hrs     |     2 hrs    |
| Post MVP    |    L     |     2 hrs      |     2 hrs     |     2 hrs     |
| TOTAL               |          |     44 hrs      |     36.5 hrs     |     36.5 hrs    |

<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://i.imgur.com/byLg7YN.png)
<br>

***

## Post-MVP

- _A clock in function for project that will keep a running clock until clocked out._
- _An additional employees table that would essentially just be a user with different permissions so the app would extend to a whole crew rather than just one user_
- _Direct photo upload for material receipts_

***

## Code Showcase

## Code Issues & Resolutions


