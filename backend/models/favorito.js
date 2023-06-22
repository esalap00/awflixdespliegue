<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let favoritosSchema = new Schema({
    
    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },

})

favorito = mongoose.model("favorito", favoritosSchema);
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let favoritosSchema = new Schema({
    
    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },

})

favorito = mongoose.model("favorito", favoritosSchema);
>>>>>>> 2d0301e71493fdda225a2c12ae651d8033dce78b
module.exports = {favorito, favoritosSchema}