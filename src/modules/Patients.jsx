import { useState,useEffect } from 'react' //import useState y useEffecto desde react
import {Link} from "react-router-dom"//importo Link desde el router dom
import './Patients.css' //importo css

//Creo una constante app que es igual a una función callback donde defino el valor inical de data en null 
//utilizando useState, defino una constante que será la url de la qué tendré que coger la información

const Patients=()=> {
  const [data, setData] = useState(null)
const urlApi="http://localhost:3000/patients/"

//Creo una constante "response" = a una función callback aincrona que requiere información a urlApi
//creo otra constante  resData que espera a la respuesta de antes y la convierte en un archivo json

  const fetchData=async ()=>{
    try{
const response=await fetch (urlApi)
const resData= await response.json()
//cambio el valor de data desde null a la información de la urlApi
setData(resData)
//si hay errores los capturo y los envio a la consola
    }catch(error){console.log(error)}
  }

  //utilizo useEffect para definir que la función fetchData se inicialize automaticamente al inicializar el componente
//Si pongo data detro de [] ,la función se repetirá cada vez que el valor de data cambie es decir por ejemplo
//al hacer un post en crud directamente se actualizaría en la pagina sin tener que refrescarla
  useEffect(()=>{
    fetchData()
  },[data])


  //Console.log(data) Imprime correctamente todos los pacientes desde la base de datos en la consola
  //El ternario pone cargando mientras la información no se reciba y después debe de cargar la información
  return (
    <>
      {console.log(data)} 
      
      <div>
        <p>Listado de pacientes</p>

<ul>
  <li><p>Nombre</p> <p>Edad</p> <p>Enlace</p></li>
</ul>

        {data === null ? (
          <div>Cargando ...</div>
        ) : (
          
          <ul>
            {data.map(item=>(
<li key={item._id}>
  <p> {item.nombre} {item.apellido}</p>  
  <p> {item.edad}</p>
<p><Link to={`/patient/${item._id}`}>{item.nombre}</Link></p>

</li>

            )
            )}
          </ul>
        )}
      </div>
    </>
  
    
  )
}

export default Patients
