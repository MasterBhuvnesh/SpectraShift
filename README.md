# User Data API

This is a simple Node.js API that uses Express and Mongoose to connect to a MongoDB database and serve user data. The API allows you to fetch all user data stored in the `Users` collection of the MongoDB database.

## Features

- Connects to a MongoDB database using Mongoose.
- Fetches all user data from the `Users` collection.
- Serves data through a simple GET endpoint.

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

You also need to install the required npm packages:

```bash
npm install express mongoose cors


.
├── index.js # Main application file
├── models
│ └── Users.js # Mongoose model for Users collection
└── README.md # Project documentation
```
