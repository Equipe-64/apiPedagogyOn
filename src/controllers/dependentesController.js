const Dependente = require('../models').Dependente

exports.listAll = (req, res) => {
  Dependente.findAll().then(dependentes => {res.send(dependentes)})
    .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => {
  Dependente.findAll({where: { id:req.params.id}})
    .then(dependente => { res.send(dependente) })
    .catch(error => { res.send(error) }) 
}

exports.createOne = (req, res) => {
  console.log(Dependente)
  const {nome, cpf, rg, orgao_exp, data_nasc, sexo, observacoes, cod_cliente} = req.body
  Dependente.create({nome, cpf, rg, orgao_exp, data_nasc, sexo, observacoes, cod_cliente})
    .then(dependente => {res.send(dependente)})
    .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
  const {nome, cpf, rg, orgao_exp, data_nasc, sexo, observacoes, cod_cliente} = req.body
  Dependente.update({nome, cpf, rg, orgao_exp, data_nasc, sexo, observacoes, cod_cliente},
    {where: { id:req.params.id}})
    .then(dependente => { res.send(dependente) })
    .catch(error => { res.send(error) })
}

exports.deleteOne = (req, res) => {
  Dependente.destroy( {where: { id:req.params.id}} )
    .then(dependente => { 
       res.json({
       message: "Dependente deletado com sucesso",
       data: dependente
       })
    })
    .catch(error => { res.send(error) })
}