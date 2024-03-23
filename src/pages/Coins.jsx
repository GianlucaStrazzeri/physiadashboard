//Modulo Creado para intentar hacer la estructura forEach

import React, { useState, useEffect } from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './Patients.module.css';




function Coins() {
    
    return(
        <>
        <button>Crear nuevo Paciente</button>
        <h1>Patients</h1>
        <h2>Listado de Pacientes</h2>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage}></img>
        <h3>Nombre Paciente</h3>
    
        </>
    )
}

export default Coins;
