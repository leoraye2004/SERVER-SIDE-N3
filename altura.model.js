module.exports = (sequelize, Sequelize) => {
    const Altura = sequelize.define("altura", {
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Altura;
  };