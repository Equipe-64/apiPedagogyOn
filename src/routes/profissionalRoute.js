module.exports = function (app) {

    const profissional = require('../controllers/profissionaisController')

    app.route('/profissionalRoute')
        .get(profissional.listAll)
        .post(profissional.createOne)

    app.route('/profissionalRoute/:id')
	    .get(profissional.listOne)
	    .put(profissional.updateOne)
        .delete(profissional.deleteOne)
}