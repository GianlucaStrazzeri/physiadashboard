import React, { useState, useEffect } from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './Patients.module.css';




function PatientsList() {
    
    return(
        <>
        <button>Crear nuevo Paciente</button>
        <h1>Patients</h1>
        <h2>Listado de Pacientes</h2>
        <div className={styles.patientStructure}>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
        <h3>Nombre Paciente</h3>
        </div>
        
        <h2>Estructura futura de la pagina</h2>
    <img src="../Patient table.png" alt="Imagen de perfil"></img>
        </>
    )
}

export default PatientsList;