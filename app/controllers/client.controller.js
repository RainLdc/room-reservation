const db = require("../models");

const Client = db.client;

exports.createClient = (req, res) => {
  Client.create({
    firstName: req.body.client.firstName,
    lastName: req.body.client.lastName,
    email: req.body.client.email,
    phone: req.body.client.phone,
    birthDate: req.body.client.birthDate,
    nationality: req.body.client.nationality,
  })
    .then((client) => {
      res.status(201).send(client);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.getAllClient = (req, res) => {
  Client.findAll({ include: ["room"] })
    .then((client) => {
      res.status(200).send(client);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.getclient = (req, res) => {
  Client.findByPk(req.body.id, { include: ["room"] })
    .then((client) => {
      res.status(200).send(client);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.deleteClient = (req, res) => {
  Client.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((client) => {
      if (client == 1) res.status(200).send("Delete Client");
      else res.status(200).send("Client Not Delete ");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.updateClient = (req, res) => {
    Client.update(
      {
        firstName: req.body.client.firstName,
        lastName: req.body.client.lastName,
        phone: req.body.client.phone,
        email: req.body.client.email,
        birthDate: req.body.client.birthDate,
        nationality: req.body.client.nationality,
      },
      {
        where: {
          id: req.body.client.id,
        },
      }
    )
      .then((client) => {
        if (client == 1) res.status(200).send("Update Cient");
        else res.status(200).send("Cient Not Delete, don't find Cient ");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err.message);
      });
};
