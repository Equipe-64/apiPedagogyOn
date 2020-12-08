const Profissional = require('../models').Profissional

exports.listAll = (req,res) => {
  Profissional.findAll().then(profissionais => {res.send(profissionais)})
    .catch(error => {res.send(error)}) 
}

exports.listOne = (req, res) => {
  Profissional.findAll({where: { id:req.params.id}})
    .then(profissional => { res.send(profissional) })
    .catch(error => { res.send(error) }) 
}

exports.createOne = (req, res) => {
  console.log(Profissional)
  const {especializacao, nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha, observacoes} = req.body
  Profissional.create({ especializacao, nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha, observacoes})
    .then(profissional => {res.send(profissional)})
    .catch(error => {res.send(error)})
}

exports.updateOne = (req, res) => {
  const {especializacao, nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha, observacoes} = req.body
  Profissional.update({especializacao, nome, cpf, rg, orgao_exp, data_nasc, sexo, endereco, cep, cidade, estado, telefone, email, senha, observacoes},
    {where: { id:req.params.id}})
    .then(profissional => { res.send(profissional) })
    .catch(error => { res.send(error) })
}

exports.deleteOne = (req, res) => {
  Profissional.destroy( {where: { id:req.params.id}} )
    .then(profissional => { 
       res.json({
       message: "Profissional deletado com sucesso",
       data: profissional
       })
     })
    .catch(error => { res.send(error) })
}