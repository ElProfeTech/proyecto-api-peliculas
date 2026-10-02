
const pool=require("../database/bd")

const verPeliculas=async(req, res)=>{

const [resultado]=await pool.query(
"select peliculas.id,peliculas.titulo, peliculas.descripcion, peliculas.anio, peliculas.duracion,  generos.nombre as genero from peliculas inner join generos on peliculas.genero_id=generos.id"
)
if(resultado==0){
return res.status(404).json({
 mensaje: "No existen peliculas"
})
}

return res.status(200).json({
    mensaje: "Listado de peliculas",
    resultado
})


}


const verPelicula=async(req, res)=>{
const idPelicula=parseInt(req.params.id)

try {
    const [resultado]=await pool.query(
"select peliculas.titulo, peliculas.descripcion, peliculas.anio, peliculas.duracion,  generos.nombre as genero from peliculas inner join generos on peliculas.genero_id=generos.id where peliculas.id=?",
[idPelicula]
)


if(resultado==0){
return res.status(404).json({
 mensaje: "No existen peliculas con ese id"
})
}

return res.status(200).json({
    mensaje: "Listado de peliculas",
    resultado: resultado[0]
})


} catch (error) {
    
}


}

const crearPelicula=async(req, res)=>{
const {titulo, descripcion, anio,duracion, genero_id}=req.body

if(!titulo || !descripcion || !anio || !duracion || !genero_id){
return res.status(404).json({
    mensaje: "No puede dejar campos vacio"
})
}
try {
   const [resultadoG]= await pool.query(
    "select id from generos where id=?",
    [genero_id]
    
   )

   if(resultadoG==0){
 return res.status(404).json({
    mensaje: "No existe ese id en ningun genero"
 })
   }

const [resultado]=await pool.query(
    "insert into peliculas (titulo, descripcion, anio, duracion, genero_id) values (?,?,?,?,?)",
    [titulo, descripcion,anio,duracion,genero_id]
)


return res.status(201).json({
    mensaje: "Pelicula creada",
    pelicula: resultado.insertId
})


} catch (error) {
    console.error("Error interno del servidor ", error)
}

}

const actualizarPelicula=async(req, res)=>{
const idPelicula=parseInt(req.params.id)

const {titulo, descripcion,anio, duracion, genero_id}=req.body
try {
   const [resultado]= await pool.query(
    "update peliculas set titulo=?, descripcion=?, anio=?, duracion=?, genero_id=? where id=?",
    [titulo, descripcion, anio, duracion, genero_id]
   ) 





} catch (error) {
    
}

}



module.exports={

    verPeliculas,
    verPelicula,
    crearPelicula
}
