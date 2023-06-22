<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactoSchema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    asunto: {
        type: String,
        required: true,
    },

    cuerpo: {
        type: String,
        required: true,
    },

    estado: {
        type: String,
        required: true,
    }

})

contacto = mongoose.model("contacto", contactoSchema);
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactoSchema = new Schema({

    idUser: {
        type: Object,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    asunto: {
        type: String,
        required: true,
    },

    cuerpo: {
        type: String,
        required: true,
    },

    estado: {
        type: String,
        required: true,
    }

})

contacto = mongoose.model("contacto", contactoSchema);
>>>>>>> 2d0301e71493fdda225a2c12ae651d8033dce78b
module.exports = {contacto, contactoSchema}