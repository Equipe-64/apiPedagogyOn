'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dependente.belongsTo(models.Cliente,{
        foreignKey:"cod_cliente",
        targetKey: 'id' 
      }),
      Dependente.hasMany(models.Contrato, {
        foreignKey:"cod_dependente",
        sourceKey:"id"  
      })
    }
  };
  Dependente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    rg: DataTypes.INTEGER,
    orgao_exp: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    sexo: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    cod_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dependente',
  });
  return Dependente;
};