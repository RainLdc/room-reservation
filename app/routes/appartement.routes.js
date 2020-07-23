const controller = require("../controllers/apartment.controller");

module.exports = function (app) {
  app.get("/api/apartment/all", controller.getAllApartment);
  app.get("/api/apartment/getOne", controller.getApartment);
  app.post("/api/apartment/create", controller.createApartment);
  app.put("/api/apartment/update", controller.updateApartment);
  app.delete("/api/apartment/delete", controller.deleteApartment);
};
