const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Room = db.room;

exports.getAllRoom = (req, res) => {
  Room.findAll({})
    .then((room) => {
      res.status(200).send(room);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.getRoom = (req, res) => {
  Room.findByPk(req.body.id)
    .then((room) => {
      res.status(200).send(room);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.createRoom = (req, res) => {
  Room.create({
    number: req.body.room.number,
    area: req.body.room.area,
    price: req.body.room.price,
    link: req.body.room.link,
  })
    .then((room) => {
      res.status(201).send(room);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.deleteRoom = (req, res) => {
  Room.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((room) => {
      if (room == 1) res.status(200).send("Delete Room");
      else res.status(200).send("Room Not Delete, don't find Room ");    })
    .catch((err) => {
      res.send(err.message);
    });
};

exports.updateRoom = (req, res) => {
  Room.update(
    {
      number: req.body.room.number,
      area: req.body.room.area,
      price: req.body.room.price,
    },
    {
      where: {
        id: req.body.room.id,
      },
    }
  )
    .then((room) => {
      if (room == 1) res.status(200).send("Update Room");
      else res.status(200).send("Room Not Update, don't find Room ");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.reservationRoom = (req, res) => {
  Room.findByPk(req.body.room.id)
    .then((room) => {
      Room.update(
        {
          roomId: req.body.room.roomId,
          start: req.body.room.start,
          end: req.body.room.end,
        },
        {
          where: {
            id: req.body.room.id,
            end: {
              [Op.or]: {
                [Op.lt]: req.body.room.start,
                [Op.eq]: null,
              },
            },
          },
        }
      )
        .then((room) => {
          if (room == 1) res.send("Reserved");
          else res.send("Not Reserved");
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
