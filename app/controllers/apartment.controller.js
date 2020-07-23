const db = require("../models");

const Room = db.room;
const Apartment = db.apartment;

exports.createApartment = (req, res) => {
  if (req.body.room) {
    Apartment.create({
      name: req.body.apartment.name,
      street: req.body.apartment.street,
      zipCode: req.body.apartment.zipCode,
      city: req.body.apartment.city,
    })
      .then((apartment) => {
        Room.create({
          number: req.body.room.number,
          area: req.body.room.area,
          price: req.body.room.price,
          ApartmentId: apartment.id,
        })
          .then((room) => {
            res.status(201).send(room);
          })
          .catch((err) => {
            res.status(500).send(err.message);
          });
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  } else res.status(500).send("Need a room");
};

exports.getAllApartment = (req, res) => {
  Apartment.findAll({ include: ["room"] })
    .then((apartment) => {
      res.status(200).send(apartment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
};

exports.getApartment = (req, res) => {
  Apartment.findByPk(req.body.id, { include: ["room"] })
    .then((apartment) => {
      res.status(200).send(apartment);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.updateApartment = (req, res) => {
  Apartment.update(
    {
      name: req.body.apartment.name,
      street: req.body.apartment.street,
      zipCode: req.body.apartment.zipCode,
      city: req.body.apartment.city,
    },
    {
      where: {
        id: req.body.apartment.id,
      },
    }
  )
    .then((apartment) => {
      if (apartment == 1) res.status(200).send("Update Apartment");
      else res.status(200).send("Apartment Not Update, don't find Apartment ");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.deleteApartment = (req, res) => {
  Apartment.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((apartment) => {
      if (apartment == 1) res.status(200).send("Delete Apartment");
      else res.status(200).send("Apartment Not Delete, don't find Apartment ");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
