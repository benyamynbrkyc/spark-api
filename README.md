![](img/SparkShopAPI.png)

# Project Title

SparkShop backend API made as a final project for the certificate of completion of the Spark School programming course.
Built with Node.js, Express, MongoDB (Mongoose ODM, bcrypt for password hashing) and JWT authentication on routes that write to the database.
Supports creating Customer (Basic) and Admin (elevated privileges) users, creating, modifying and deleting products from the database and dinamically creating orders and shipments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
node.js (v14+)
A MongoDB Atlas connection string to connect to the DB
(Optional) Postman or other API testing software
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install node

```
https://nodejs.org/en/download/
```

Create an account on MongoDB Atlas or sign into an existing one

```
https://account.mongodb.com/account/login
```

Click the Connect button

```
Click the connect button on the cluster management panel
```

Whitelist your IP address and select your connection method

```
In the Setup connection security step in the modal window, check to make sure your IP address is in the whitelist for Atlas connections. If it is not, add it. 0.0.0.0  to whitelist all addresses
```

Copy the connection string

```
In the Choose your connection method step in the modal, select the button marked Connect Your Application. You will see your connection string.
```

Open the project in your favorite editor. In the project root folder, create a .env file and add the following

```
JWT_SECRET=some-secret-key
MONGO_ATLAS_CONNECTION_STRING=your-connection-string
```

## Built With

* Node.js - The server environment
* NPM - Dependency Management
* Bcrypt - Used to generate hashed passwords
* MongoDB - database
* Mongoose - Object Data Modeling library for MongoDB
* Express - Node.js web application framework

## Contributing

Please contact me for contributing. See Authors section.

## Authors

* **Benjamin Brkić | benjamin.brkic@gmail.com** - *Initial work* - [LinkedIn](https://www.linkedin.com/in/benjamin-brki%C4%87-4727111b4/)

## License

This project is licensed under the ISC License.

## Acknowledgments

* Profa Sale
* Boško Bezik
