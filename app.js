/**
 *
 * app.js is responsible for defining routes and middlewares
 *
 */

/**
 * IMPORTING  ALL THE REQUORED MODULES
 */

/*
 * express(): This is a factory function that creates a new Express application. The returned application is fully configured and ready to handle HTTP requests. Fcatory functions are functions that return objects, where keyword new is not used.
 */
const express = require("express"); //importing express form node_modules
const app = express(); // initializing express instance to app variable
const one = require("./routes/one.js"); //importing the middleware function "one" from the routes folder

/**
 *
 * DEFINING MIDDLEWARES
 */
// express.json() is a middleware used to parse , the json data.
app.use(express.json());
// ezpress.static() is a middleware used to serve static files.
app.use(express.static(`${__dirname}/public`));

/**
 * DEFINING ROUTES
 */

// Importing the routes from the routes folder
//middleware is called for this path whenever a request is made to this path (parent route, and the route in route.js is its child : parent/child)
app.use("/expressRoute/generallisedRoute1", one); //one is a middleware function

module.exports = app; //exporting the app instance
