const controller = require("../controllers/room.controller");

module.exports = function (app) {
  app.get("/api/room/all", controller.getAllRoom);
  app.get("/api/room/getOne", controller.getRoom);
  app.post("/api/room/create", controller.createRoom);
  app.put("/api/room/update", controller.updateRoom);
  app.delete("/api/room/delete", controller.deleteRoom);
  app.put("/api/room/reservation", controller.reservationRoom);
};
