const { body } = require("express-validator");
const { Users } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await Users.create(payload);
    return res.json({
      msg: "User berhasil diregister",
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "User gagal diregister",
    });
  }
};
const validation = [
  body("phone")
    .isLength({ min: 10, max: 13 })
    .withMessage("phone harus 10-13 digit"),
  body("email").isEmail().withMessage("email tidak valid"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password minimal 8 karakter"),
];

module.exports = {
  service,
  validation,
};
