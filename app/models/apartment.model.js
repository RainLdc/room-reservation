module.exports = (sequelize, Sequelize) => {
  const Apartment = sequelize.define("Apartment", {
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    street: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    zipCode: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    city: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Apartment;
};
