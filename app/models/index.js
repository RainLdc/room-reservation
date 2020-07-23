const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

// console.log(config);

// const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
//   host: config.HOST,
//   port: config.PORT,
//   dialect: config.dialect,
//   operatorsAliases: 0,

//   pool: {
//     max: config.pool.max,
//     min: config.pool.min,
//     acquire: config.pool.acquire,
//     idle: config.pool.idle,
//   },
// });

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/db.sqlite",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.apartment = require("./apartment.model.js")(sequelize, Sequelize);
db.client = require("./client.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);

db.apartment.hasMany(
  db.room,
  { as: "room" },
  { onDelete: "cascade", hooks: true }
);

db.client.hasOne(db.room, { as: "room" });

module.exports = db;
