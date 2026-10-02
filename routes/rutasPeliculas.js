const express=require("express")
const { verPeliculas, verPelicula, crearPelicula } = require("../controllers/controllerPeliculas")

const routerP=express.Router()

routerP.get("/peliculas",verPeliculas)

routerP.get("/peliculas/:id",verPelicula)

routerP.post("/peliculas", crearPelicula)










module.exports=routerP