const express=require("express")

const app=express()

const router=require("./routes/rutasGenero")
const routerP=require("./routes/rutasPeliculas")


app.use(express.json())
app.use("/api",router)
app.use("/api",routerP)







module.exports=app