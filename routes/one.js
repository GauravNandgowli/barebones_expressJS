/**
 *A /routes/route.js file responsible for defining the routes the application.Uses  Express Router to create isolated instances of routes and middleware.
 */

const express = require("express"); //importing express form node_modules
const oneController = require("./../controllers/oneController"); //importing the middleware function "one" from the routes folder

/**
 * router object is an isolated instance of middleware and routes
 * const router = express.Router();
router.get(<insert path here>, <insert middleware here>, <insert handler here>)
module.exports = router
 */
const router = express.Router();

//runs when a parameter is present in the route and executes the middleware function oneController.checkID
//here id is the parameter
router.param("id", oneController.checkID);

/**
 * DEFINING ROUTES
 
 */
/**
 * Router object defines controllers/handelers for HTTP GET and POST requests to the  ("/") path.
 */
//router.route("/"): This method is used to create a new route path
//.get(oneController.getAllUsers): is a get request
//.post(oneController.createUser): is a post request
router.route("/").get(oneController.getAllUsers).post(oneController.createUser);

// Define a route for GET requests to "/:id"
// The ":id" is a route parameter, meaning it can be any string
// When a GET request is made to this route, the oneController.getUser function will be called
router.route("/:id").get(oneController.getUser);

module.exports = router; //exporting the router instance
