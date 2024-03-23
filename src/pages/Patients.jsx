import React, { useState, useEffect } from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './Patients.module.css';




function PatientsList() {
    
    return(
        <>
        <div className={styles.userHeader}>
            
            <h1>Patients: (90 pacientes)</h1>
            <div className={styles.buttonHeader}>
                <button className={styles.buttonColor}>Crear nuevo Paciente</button>
                <button className={styles.buttonColor}>Crear nueva Cita</button>
            </div>
        
        </div>
        
        <div className={styles.patientStructure}>
        <div>
                <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
                <h3>Nombre</h3>
                <p>Numero de movil </p>
                <p>Email</p>
                <p>Patología</p>
            </div>
            <div>
                <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
                <h3>Jesús Garcia</h3>
                <p>Numero de movil </p>
                <p>0123456789</p>
            </div>
            <div>
                <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
                <h3>Jesús Garcia</h3>
                <p>Numero de movil </p>
                <p>0123456789</p>
            </div>
            <div>
                <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
                <h3>Jesús Garcia</h3>
                <p>Numero de movil </p>
                <p>0123456789</p>
            </div>
            <div>
                <img src="../avatar.jfif" alt="Imagen de perfil" className={styles.userimage} ></img>
                <h3>Jesús Garcia</h3>
                <p>Numero de movil </p>
                <p>0123456789</p>
            </div>
        
        </div>
        
        <h2>Estructura futura de la pagina</h2>
    <img src="../Patient table.png" alt="Imagen de perfil"></img>
        </>
    )
}

export default PatientsList;