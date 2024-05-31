import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";

//Defino el estado de una variable con su valor inicial (null) y el nombre de su valor final utilizando useState
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // Configura un observador en el objeto auth para escuchar cambios en el estado de autenticación.
    const listen = onAuthStateChanged(auth, (user) => {
      // Esta función se ejecuta cada vez que cambia el estado de autenticación del usuario.
      if (user) {
        // Si hay un usuario autenticado, actualiza el estado con la información del usuario.
        setAuthUser(user);
      } else {
        // Si no hay un usuario autenticado, actualiza el estado a null.
        setAuthUser(null);
      }
    });
  
    // La función de limpieza que se ejecuta cuando el componente se desmonta.
    return () => {
      // Llama a listen() para dejar de escuchar cambios en el estado de autenticación.
      listen();
    };
  }, []); // El array de dependencias vacío significa que este efecto solo se ejecutará una vez cuando el componente se monte.
  

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
        
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;