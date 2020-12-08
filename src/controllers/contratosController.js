const Contrato = require('../models').Contrato
const Cliente = require('../models').Cliente
const Dependente = require('../models').Dependente
const Profissional = require('../models').Profissional

exports.listAll = (req,res) => {
  Contrato.findAll().then(contratos => {res.send(contratos)})
    .catch(error => {res.send(error)}) 
}

exports.listOne = (req, res) => {
     Contrato.findAll({
       where: { id:req.params.id },
         include:[
             { model: Cliente },
             { model: Dependente },
             { model: Profissional }
          ]
     })
     .then(contrato => { res.send(contrato) })
     .catch(error => { res.send(error) })
}

exports.createOne = (req, res) => {
  console.log(Contrato)
  const {data, valor_pago, descricao, avaliacao_servico, comentario, cod_cliente, cod_dependente, cod_profissional} = req.body
  Contrato.create({data, valor_pago, descricao, avaliacao_servico, comentario, cod_cliente, cod_dependente, cod_profissional})
    .then(contrato => {res.send(contrato)})
    .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
  const {data, valor_pago, descricao, avaliacao_servico, comentario, cod_cliente, cod_dependente, cod_profissional} = req.body
  Contrato.update({data, valor_pago, descricao, avaliacao_servico, comentario, cod_cliente, cod_dependente, cod_profissional}, 
    {where: { id:req.params.id}})
    .then(contrato => { res.send(contrato) })
    .catch(error => { res.send(error) })
}

exports.deleteOne = (req, res) => {
  Contrato.destroy( {where: { id:req.params.id}} )
    .then(contrato => { 
       res.json({
       message: "Contrato deletado com sucesso",
       data: contrato
         })
     })
    .catch(error => { res.send(error) })
}