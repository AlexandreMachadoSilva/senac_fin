Connection = require('../database')

exports.list = (request, response) => {

    response.json([
        {
            "autor": "Andre",
            "post": "postar",
            "data": "01/05/2021"
        },
        {
            "autor": "Ricardo",
            "post": "teste",
            "data": "05/05/2021"
        }
    ])
}
