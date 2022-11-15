const { Schema, model } = require("mongoose");


const UsuarioSchema = Schema({
    name: {
        type: String,
        requires: true
    },
    email: {
        type: String,
        requires: true,
        unique: true
    },
    password: {
        type: String,
        requires: true
    },
});

module.exports = model('Usuario', UsuarioSchema);