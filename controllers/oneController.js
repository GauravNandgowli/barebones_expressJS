/**
 * controllers/controller.js file exports several functions that handle HTTP requests:
 */

const fs = require("fs"); //importing node file system module
//reading the data from the file
//__dirname is a global object that contains the directory name of the current module
//fs.readFileSync() is a synchronous method that reads the entire contents of a file
//JSON.parse() is a method that parses a JSON string and returns a JavaScript object
const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

//checkID is a middleware function that checks if the id is valid
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > users.length) {
    //req.params.id * 1 converts the id to a number
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

//getAllUsers is a middleware function that gets all the users
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};

//getUser is a middleware function that gets a single user
exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

//createUser is a middleware function that creates a new user
//Json.stringify() is a method that converts a JavaScript object or value to a JSON string
//writeFile() is a method that writes data to a file and is not a synchronous method.
exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1; //getting the last id and incrementing it by 1
  const newUser = Object.assign({ id: newId }, req.body); //assigning the new id to the new user , Object.assign() is a method that copies the values of all enumerable own properties from one or more source objects to a target object. The synatx is Object.assign(target, ...sources)
  users.push(newUser);
  fs.writeFile(`${__dirname}data/users.json`, JSON.stringify(users), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  });
};
