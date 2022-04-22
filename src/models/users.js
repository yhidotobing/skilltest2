"use strict";
const { Model } = require("sequelize");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: { type: DataTypes.CHAR(36), primaryKey: true, allowNull: false },
      name: { type: DataTypes.STRING(50), allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING(13), allowNull: false },
      gender: {
        type: DataTypes.ENUM("laki-laki", "perempuan"),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        set(value) {
          const salt = genSaltSync(10);
          this.setDataValue("password", hashSync(value, salt));
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
