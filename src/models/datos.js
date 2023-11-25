const mongoose = require("mongoose");

const datosSchema = mongoose.Schema({
    temperatura:{
        type: Number,
        required: true
    },
    humedad:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Datos', datosSchema);
