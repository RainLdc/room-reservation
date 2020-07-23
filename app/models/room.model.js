module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define("Room", {
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
    area: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true,
        isFloat: true,
      },
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
    start: {
      type: Sequelize.DATE,
      validate: {
        notEmpty: true,
      },
    },
    end: {
      type: Sequelize.DATE,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Room;
};
