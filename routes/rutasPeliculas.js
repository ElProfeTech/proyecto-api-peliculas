const express=require("express")
const { verPeliculas, verPelicula, crearPelicula, actualizarPelicula, eliminarPelicula, buscarPorTitulo } = require("../controllers/controllerPeliculas")


const routerP=express.Router()

routerP.get("/peliculas",verPeliculas)

routerP.get("/peliculas/buscar/:titulo", buscarPorTitulo)

routerP.get("/peliculas/:id",verPelicula)

routerP.post("/peliculas", crearPelicula)

routerP.put("/peliculas/:id", actualizarPelicula)

routerP.delete("/peliculas/:id", eliminarPelicula)










module.exports=routerP