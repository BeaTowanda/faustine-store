const { urlencoded } = require("express");
const controller = {
    detail: (req, res) => {
        res.render("detallProdNuevo")
    },
    login: (req,res) =>{
        res.render("login")
    },
    register: (req,res) =>{
        res.render("formularioRegistro")
    },
    carrito: (req,res) => {
        res.render("carritoDeCompras")
    },
    altaProducto: (req,res) => {
        res.render("altaProducto")
    },
    ofertas: (req,res) => {
        res.render("ofertas")
    },
    
};

module.exports = controller;