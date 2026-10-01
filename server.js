require("dotenv").config()
const app=require("./app")

const port=process.env.PORT


app.listen(port,()=>{
    console.log(`El servidor esta escuchando en el puerto ${port} `)
})