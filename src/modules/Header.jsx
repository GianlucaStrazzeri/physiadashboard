import { Link, Outlet } from "react-router-dom" //outlet sirve para rendeerizar todos los hijos de las rutas
import styles from './Header.module.css';
//Importantisimo el Outles si no lo pongo no me recargara varios componenetes a la vez, me recargará solo 1


function Header(){
return(
    <>
      <nav>
<p><Link to="/patients">Home</Link></p>
<p><Link to="/login">Login-Logout</Link></p>
<p><Link to="/patient/create/form">Create Patient</Link></p>


    </nav>
    <Outlet/>
    </>
  


)
}

export default Header