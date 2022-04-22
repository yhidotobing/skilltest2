const express = require("express");
const router = express.Router();
const createController = require("./create.usersController");
const readController = require("./read.usersController");
const readbyparamsController = require("./readbyparams.usersController");
const updateController = require("./update.usersController");
const deleteController = require("./delete.usersController");
const registerUser = require("./register.usersController");
const loginUser = require("./login.usersController");
const validator = require("../../helpers/validator");
const { checkToken } = require("../../middlewares/jwt");

router.post(
  "/register",
  checkToken,
  registerUser.validation,
  validator,
  registerUser.service
);
router.post(
  "/login",
  loginUser.validationEmailAndPassword,
  validator,
  loginUser.service
);
router.post("/", createController.service);
router.get("/", readController.service);
router.get("/:id", readbyparamsController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
