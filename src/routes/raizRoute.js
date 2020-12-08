module.exports = function (app) {

    app.route('/')
        .get((req, res) => {
            res.send('API PedagogyON funcionando')
        })
}