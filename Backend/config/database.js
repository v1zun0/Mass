import { Sequelize } from "sequelize";

const db = new Sequelize("producify", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
