const { Users } = require("../../models");
// read data users
const service = async (req, res) => {
  try {
    const users = await Users.findOne({
      attributes: ["name", "gender", "phone"],
    });
    return res.json({
      message: "Users read successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
