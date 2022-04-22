const { Users } = require("../../models");

const service = async (req, res) => {
  try {
    const payload = req.body;
    const user = await Users.create(payload);
    return res.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Email sudah terdaftar",
    });
  }
};

module.exports = { service };
