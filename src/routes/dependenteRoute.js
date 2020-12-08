module.exports = function (app) {

    const dependente = require('../controllers/dependentesController')

    app.route('/dependenteRoute')
        .get(dependente.listAll)
        .post(dependente.createOne)

    app.route('/dependenteRoute/:id')
	    .get(dependente.listOne)
	    .put(dependente.updateOne)
        .delete(dependente.deleteOne)
}