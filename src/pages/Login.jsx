import React, { useState, useEffect } from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './Login.module.css';



function Login() {
    
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar la lógica para enviar los datos del formulario alservidor para autenticación
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };



    return(
        <>
        <div className={styles.form}>
            <div>
            <h2>Access Your Account</h2>
            </div>
        
        <button className={styles.sigInButton}><img src="../public/google-removebg-preview.png" width="30px"></img>Sign in with Google</button>
<form onSubmit={handleSubmit}>
<div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
</div>
<div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
</div>
<div>
<p>Remember me</p>
<p>Forgot Passwoord?</p>


</div>

        <button type="submit" className={styles.button}>Iniciar sesión</button>
 <p>Don't have an account? 
 <Link to="/signup"><b>Sign up</b></Link>
  </p>

</form>
        </div>
        
       <h2>Estructura futura de la pagina de Login</h2>
        <img src="../Login Page.png" alt="Login page" ></img>
        </>
    )}


export default Login;