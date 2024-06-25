module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define("pet", {
      codigo_pet: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nome_pet: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero_pet: {
        type: Sequelize.STRING,
        allowNull: false
      },
      altura_pet: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  
    return Pet;
  };