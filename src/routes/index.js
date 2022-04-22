var express = require("express");
var router = express.Router();
const userRouter = require("../controllers/users/routes");
/* GET home page. */
router.use("/users", userRouter);

module.exports = router;
