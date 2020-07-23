const controller = require("../controllers/client.controller");

module.exports = function (app) {
  app.get("/api/client/all", controller.getAllClient);
  app.get("/api/client/getOne", controller.getclient);
  app.post("/api/client/create", controller.createClient);
  app.put("/api/client/update", controller.updateClient);
  app.delete("/api/client/delete", controller.deleteClient);
};
