const { Users } = require("../../models");
// update data users
const service = async (req, res) => {
  try {
    const payload = req.body;
    const user = await Users.update(payload, {
      where: { id: req.body.id },
    });
    return res.json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
