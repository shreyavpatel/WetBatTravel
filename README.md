# Getting Started with WetBat Travel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup required

In both the client and server directory, run:

### `npm install`

## Setting up the database

### Creating the connection

I utilized [MySQL](https://www.mysql.com/downloads/) for this application. \
After downloading it, use [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) to create a MySQL connection with this information:
```
Host: 127.0.0.1
Port: 3306
User: root
Password: password
```

### Creating the database

In the server directory, run:
### `sequelize db:create wetbatdb`

### Creating the database schema

In the server directory, run:
### `sequelize db:migrate`

### Populating the data into the database

In the server directory, run:
### `sequelize db:seed:all`

## Available scripts to run the app

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

In the server directory, you can run:

### `npm start`

Runs the development server.\
Accessed through [http://localhost:3001/api](http://localhost:3001/api).

## Structural decisions
I utilized MySQL for the database, and used Sequelize to insert bulk data into the database.  
My React front-end client application is connected to an Express back-end server with the use of Axios to make API requests.\
I also integrated TypeScript into my project.\
I used the Material-UI component library, as well as Semantic-UI in my application.
