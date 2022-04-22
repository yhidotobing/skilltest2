const { Users } = require("../../models");
const { compareSync } = require("bcrypt");
const { body } = require("express-validator");
const { createJWT } = require("../../middlewares/jwt");
const service = async (req, res) => {
  try {
    // find by email
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      return res.status(401).json({
        message: "email tidak terdaftar",
      });
    }
    // compare password
    const isPasswordValid = compareSync(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "password salah",
      });
    }
    // create token
    const token = createJWT(user);
    // success
    return res.status(200).json({
      message: "login berhasil",
      data: token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

const validationEmailAndPassword = [
  body("email", "password")
    .isEmpty()
    .withMessage("email dan password harus diisi"),
];

module.exports = { service, validationEmailAndPassword };
