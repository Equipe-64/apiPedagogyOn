module.exports = function (app) {

    const cliente = require('../controllers/clientesController')

    app.route('/clienteRoute')
        .get(cliente.listAll)
        .post(cliente.createOne)

    app.route('/clienteRoute/:id')
	    .get(cliente.listOne)
	    .put(cliente.updateOne)
        .delete(cliente.deleteOne) 
}