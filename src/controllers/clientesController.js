const Cliente = require('../models').Cliente

exports.listAll = (req,res) => {
  Cliente.findAll().then(clientes => {res.send(clientes)})
    .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
  Cliente.findAll({where: { id:req.params.id}})
    .then(cliente => { res.send(cliente) })
    .catch(error => { res.send(error) }) 
}

exports.createOne = (req, res) => {
  console.log(Cliente)
  const {nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha} = req.body
  Cliente.create({nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha})
    .then(cliente => {res.send(cliente)})
    .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
  const {nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha} = req.body
  Cliente.update({nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha},
    {where: { id:req.params.id}})
    .then(cliente => { res.send(cliente) })
    .catch(error => { res.send(error) })
}

exports.deleteOne = (req, res) => {
  Cliente.destroy( {where: { id:req.params.id}} )
    .then(cliente => { 
       res.json({
       message: "Cliente deletado com sucesso",
       data: cliente
       })
     })
    .catch(error => { res.send(error) })
}