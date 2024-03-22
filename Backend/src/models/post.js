
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./../db/db");

const Post = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
  },
  {
     tableName: 'post',
    timestamps: false,
  }
);

module.exports = Post;