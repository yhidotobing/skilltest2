const jwt = require("jsonwebtoken");

const createJWT = (user) => {
  const token = jwt.sign(
    {
      user: user.dataValues,
    },
    process.env.PRIVATE_KEY,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

const checkToken = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    return res.status(401).json({
      msg: "Unauthorized",
    });
  }
  jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        msg: "Unauthorized",
      });
    }
    req.auth = decoded;
    next();
  });
};

module.exports = { createJWT, checkToken };
