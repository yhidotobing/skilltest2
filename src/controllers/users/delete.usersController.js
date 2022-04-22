const { Users } = require("../../models");
// delete data users
const service = async (req, res) => {
  try {
    const user = await Users.destroy({
      where: { id: req.body.id },
    });
    return res.json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
