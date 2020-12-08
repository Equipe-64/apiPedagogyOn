'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profissional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profissional.hasMany(models.Contrato, {
        foreignKey:"cod_profissional",
        sourceKey:"id"  
      })
    }
  };
  Profissional.init({
    especializacao: DataTypes.STRING,
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    rg: DataTypes.INTEGER,
    orgao_exp: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    sexo: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profissional',
  });
  return Profissional;
};