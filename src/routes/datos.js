const express = require("express");
const datosSchema = require('../models/datos')

const routerDatos = express.Router();

//create Datos de temperatura y humedad
routerDatos.post("/CreateDatos", (req,res)=>{
    const datos = datosSchema(req.body); 
    datos
        .save()
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}))
});

//get all Datos
routerDatos.get("/GetAllDatos", (req,res)=>{
    datosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}))
});

//get a Datos
routerDatos.get("/GertAllDatos/:id", (req,res)=>{
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}))
});

module.exports = routerDatos;
