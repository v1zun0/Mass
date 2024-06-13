import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    notelp: {
      type: DataTypes.STRING, // Menggunakan STRING untuk nomor telepon
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
