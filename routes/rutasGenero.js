
const express=require("express")

const router=express.Router()

const {verGeneros, verGenero, crearGenero, actualizarGenero, eliminarGenero}=require("../controllers/controllerGenero")


router.get("/generos", verGeneros)

router.get("/generos/:id", verGenero)

router.post("/generos", crearGenero)

router.put("/generos/:id", actualizarGenero)

router.delete("/generos/:id", eliminarGenero)






module.exports=router