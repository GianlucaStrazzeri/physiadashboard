import React, { useState, useEffect } from 'react';//importo React, useState y useEffect
import styles from './CreatePatientForm.module.css'; //importo los estilos del formulario



function CreatePatientForm() {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [historialMedico, setHistorialMedico] = useState('');
    const [res,setRes]=useState("");//Esto servirá para cambiar el estado de la respuesta 
    const payload= {nombre,apellido,edad,genero,direccion,correoElectronico,historialMedico}

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlApiCreate="http://localhost:3000/patient/create"
    // Agregar la lógica para enviar los datos del formulario alservidor para autenticación
    
    try {
        const response= await fetch(urlApiCreate,{
            method:"POST"  ,
             headers:{
                "content-type":"application/json"
        },
        body:JSON.stringify(payload),
    })
if (response.ok){
    const data = await response.json()
    console.log("Success", data)
    setRes("Success",data.name)
    setName("")//De esta forma limpio el imput después de enviarlo
} else {
  throw new Error("Something went wrong")
}    
    } catch (error) {console.error("Error:",error)
        
    }
    console.log('Name:', name,'Surname:', apellido);
  };



    return(
        <>
        <div className={styles.form}>
            <div>
            <h2>Create Patient</h2>
            </div>
        
        
<form onSubmit={handleSubmit}>


<div>
    <div>
    <label htmlFor="name">Nombre</label>
    </div>
          
          <input type="text" id="name" value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            placeholder="Nombre" required
          />
</div>
<div>
    <div>
    <label htmlFor="apellido">Apellido</label>
    </div>
          
          <input type="text" id="apellido" value={apellido}
            onChange={(e)=>setApellido(e.target.value)}
            placeholder="Apellido" required
          />
</div>
<div>
    <div>
    <label htmlFor="CorreoElectronico">Correo</label>
    </div>
          
          <input type="email" id="CorreoElectronico" value={correoElectronico}
            onChange={(e)=>setCorreoElectronico(e.target.value)}
            placeholder="Mail" required
          />
</div>
<div>
    <div>
    <label htmlFor="edad">edad</label>
    </div>
          
          <input type="number" id="edad" value={edad}
            onChange={(e)=>setEdad(e.target.value)}
            placeholder="edad" required
          />
</div>
<div>
    <div>
    <label htmlFor="genero">genero</label>
    </div>
          
          <input type="text" id="genero" value={genero}
            onChange={(e)=>setGenero(e.target.value)}
            placeholder="genero" required
          />
</div>
<div>
    <div>
    <label htmlFor="direccion">direccion</label>
    </div>
          
          <input type="text" id="direccion" value={direccion}
            onChange={(e)=>setDireccion(e.target.value)}
            placeholder="direccion" required
          />
</div>
<div>
    <div>
    <label htmlFor="historialMedico">historial Medico</label>
    </div>
          
          <input type="text" id="historialMedico" value={historialMedico}
            onChange={(e)=>setHistorialMedico(e.target.value)}
            placeholder="historial Medico" required
          />
</div>

        <button type="submit" className={styles.button}>Añadir Paciente</button>
 

</form>
        </div>
        <h2>{res} </h2>
       
        </>
    )}


export default CreatePatientForm;