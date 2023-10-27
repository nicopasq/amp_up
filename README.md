# Music Media: Phase 4 Project

Project Description: The goal of this app is to connect musical individuals through community discussion posts. It utilizes a Rails API to effectively communicate requests to and from the backend. React.js makes up the frontend and uses complex state management to update how a user's view is rendered.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features
The project is built with the following features in mind:
1. User Authentication and Authorization - Users can create an account, login, stay logged in after leaving the site, and logout.
2. User registration and login system uses password encryption for security purposes.
3. Users can view all discussion posts that have been created, and create a new discussion post.
4. Users can add, update, or delete a response on a discussion post.
5. Users can view all of the posts they've responded to, along with the responses they created on a post, in the Profile page.
6. Users do not need to refresh the site to view changes they've made.

## Installation
To install this application you will need NodeJS installed along with npm package manager, and Bundler. You also need to have Postgresql installed and running for the backend API.

Ensure that you have React.js and Ruby on Rails installed aswell.

1. Clone this repository and add it to your local machine.
2. In the app, open the console and download all dependencies
    with 'bundle install' (for Rails backend), and 'npm install --prefix client' (for React.js frontend).
3. migrate files with 'rails db:migrate'
4. Start both servers by running 'rails s' (Rails server) and 'npm start
    --prefix client (React frontend).

## Usage
Once the installation process has been completed, users will be able to access the website through their browser at localhost:3000.
To use this application, follow these steps:

1. Register an account if you don't already have one. You will be able to log into your profile page where you can see your profile details and all the responses you've made.
2. Create a post, or if there are existing posts you can respond to any post.
3. Create, Read, Update, and Delete responses on a discussion post.
     
      3a. Use the ✏️ button to update a response 

      3b. Use the 🗑️ button to delete a response
4. View all posts and their corresponding responses.
5. The user will be able to see changes without refreshing the page.
6. Logout if desired, otherwise you will be automatically logged in when re-visiting the site.