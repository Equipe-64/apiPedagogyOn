'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contrato.belongsTo(models.Cliente,{
        foreignKey:"cod_cliente",
        targetKey: 'id'
      }),
      Contrato.belongsTo(models.Dependente,{
        foreignKey:"cod_dependente",
        targetKey: 'id'
      }),
      Contrato.belongsTo(models.Profissional,{
        foreignKey:"cod_profissional",
        targetKey: 'id'
      })
    }
  };
  Contrato.init({
    data: DataTypes.DATEONLY,
    valor_pago: DataTypes.DECIMAL,
    descricao: DataTypes.STRING,
    avaliacao_servico: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    cod_cliente: DataTypes.INTEGER,
    cod_dependente: DataTypes.INTEGER,
    cod_profissional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contrato',
  });
  return Contrato;
};