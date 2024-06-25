module.exports = (sequelize, Sequelize) => {
    const Tutor = sequelize.define("tutor", {
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    return Tutor;
  };