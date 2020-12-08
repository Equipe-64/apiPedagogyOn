module.exports = function (app) {

    const contrato = require('../controllers/contratosController')

    app.route('/contratoRoute')
        .get(contrato.listAll)
        .post(contrato.createOne)

        app.route('/contratoRoute/:id')
	    .get(contrato.listOne)
	    .put(contrato.updateOne)
        .delete(contrato.deleteOne)
}