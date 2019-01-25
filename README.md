BLOG-NODE - small blog application with authentication
===

# Main maintainer

Nikola Kusibojovski

## Description:

Small blog application with authentication created with Node JS. 

Authenticated user can create category, create post and list all posts and categories.

MySql is used as  database.

ExpressJS is used as server.

Sequelize is used as ORM.

Handlebars is used as a template engine.

## Starting application

First you have to install all dependencies. To do that just run : 
```
npm install
```

Then, you have to insert your informations in the .env file. Please make sure that you have mysql server running.

After that run :

```
npm run make-db
```

This command should create all tables in the database and to seed one test user. 

Credentials for the test user are:

username: nkusibojoski
password: nikola

Finaly, run :

```
npm run start
```
and application should be running.

If you have any questions, don't hesitate to contact me on: nikola_kusibojoski@hotmail.com

## Commands to run application

### 1. Install packages

```
npm install
```

### 2. Create migrations

```
npm run migrate
```

### 3. Create seeders

```
npm run seed
```

### 4. Make database

```
npm run make-db
```

### 5. Start application in development mode

```
npm run dev
```

### 6. Start application

```
npm run start
```

## Environment variables

APP_NAME

APP_ENV

NODE_ENV=development

PORT

SESSION_SECRET

DB_HOST

DB_PORT

DB_DATABASE

DB_USERNAME

DB_PASSWORD
