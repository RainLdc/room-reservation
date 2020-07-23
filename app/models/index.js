const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.apartment = require("./apartment.model.js")(sequelize, Sequelize);
db.client = require("./client.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);

db.apartment.hasMany(db.room, {
  as: "room",
  foreignKey: "link",
  onDelete: "cascade",
  hooks: true,
});

db.client.hasOne(db.room, { as: "room" });

module.exports = db;
