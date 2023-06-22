<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visualizacionesSchema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },
    
})

visualizaciones = mongoose.model("visualizaciones", visualizacionesSchema);
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let visualizacionesSchema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    idPelicula: {
        type: Object,
        required: true,
    },
    
})

visualizaciones = mongoose.model("visualizaciones", visualizacionesSchema);
>>>>>>> 2d0301e71493fdda225a2c12ae651d8033dce78b
module.exports = {visualizaciones, visualizacionesSchema}