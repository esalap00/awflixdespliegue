<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let pendientesSchema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },

})

pendientes = mongoose.model("pendientes", pendientesSchema);
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let pendientesSchema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },

})

pendientes = mongoose.model("pendientes", pendientesSchema);
>>>>>>> 2d0301e71493fdda225a2c12ae651d8033dce78b
module.exports = {pendientes, pendientesSchema}