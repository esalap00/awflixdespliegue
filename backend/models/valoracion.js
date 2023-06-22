<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ValoracionShema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },
    
    //Mirar solo pueda ser hasta 10
    valoracion: {
        type: Number,
        min: 0,
        max: 10,
        required: true,
    }

})

valoracion = mongoose.model("valoraciones", ValoracionShema)
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ValoracionShema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },
    
    //Mirar solo pueda ser hasta 10
    valoracion: {
        type: Number,
        min: 0,
        max: 10,
        required: true,
    }

})

valoracion = mongoose.model("valoraciones", ValoracionShema)
>>>>>>> 2d0301e71493fdda225a2c12ae651d8033dce78b
module.exports = {valoracion, ValoracionShema}