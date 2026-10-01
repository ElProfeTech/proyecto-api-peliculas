const pool=require("../database/bd")


const verGeneros= async(req, res)=>{

const [resultado]= await pool.query(
    "select * from generos"
)

if(resultado==0){
   return res.status(404).json({
        mensaje: "No se encontraron datos"
    })
}

return res.status(200).json({
    mensaje:"Los generos encontrados son: ",
    resultado
})


}

const verGenero=async(req, res)=>{
const idGenero=parseInt(req.params.id)

try {
    const [resultado]= await pool.query(
      "select * from generos where id=?",
      [idGenero]
    )

    if(resultado==0){
     return res.status(404).json({
        mensaje: "No existen generos con ese id"
     })
    }
return res.status(200).json({
    mensaje: "El genero encontrado es: ",
    genero: resultado[0]
})


} catch (error) {
    console.error("Error interno en el servidor ", error)
}

}

const crearGenero=async(req, res)=>{
const {nombre}= req.body

try {
    if(nombre==""){
     return res.status(404).json({
        mensaje: "No puede dejar el nombre vacio"
     })
    }
    const [resultado]= await pool.query(
        "insert into generos (nombre) values (?)",
        [nombre]
    )

    return res.status(200).json({
        mensaje:"Nombre de genero agregado",
        genero: resultado.insertId
    })



} catch (error) {
    console.error("Error interno del servidor: ", error)
}

}

const actualizarGenero=async(req, res)=>{
  const idGenero=parseInt(req.params.id)

  const {nombre}=req.body

  try {
    const [resultado]= await pool.query(
        "update generos set nombre=? where id=?",
        [nombre, idGenero]
    )
if(resultado.affectedRows==0){
return res.status(404).json({
    mensaje: "No se actualizaron los datos"
})
}

    return res.status(200).json({
        mensaje: "Genero actualizado",
        genero: resultado.affectedRows
    })

  } catch (error) {
    console.error("Error interno del servidor ", error)
  }

}

const eliminarGenero=async(req, res)=>{
 const idGenero=parseInt(req.params.id)

 try {
    const [resultado]= await pool.query(
        "delete from generos where id=?",
        [idGenero]
    )

    if(resultado.affectedRows==0){
    return res.status(404).json({
    mensaje: "No existe un genero con ese id"
})
    }

    return res.status(200).json({
        mensaje: "Genero eliminado",
        genero: resultado.affectedRows
    })

 } catch (error) {
    console.error("Error interno en el servidor ", error)
 }

}







module.exports={

    verGeneros,
    verGenero,
    crearGenero,
    actualizarGenero,
    eliminarGenero
}