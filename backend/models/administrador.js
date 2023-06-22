<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    contrasena: {
        type: String,
        required: true,
    }
})

admin = mongoose.model("admin", adminSchema)
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    contrasena: {
        type: String,
        required: true,
    }
})

admin = mongoose.model("admin", adminSchema)
>>>>>>> 2d0301e71493fdda225a2c12ae651d8033dce78b
module.exports = {admin, adminSchema}