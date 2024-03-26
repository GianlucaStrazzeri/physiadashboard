import { Link, Outlet } from 'react-router-dom';
import PatientsList from './Patients';
import Login  from './Login';
import SignUp  from './SignUp';
import styles from './Root.module.css';
import { AiFillHome } from "react-icons/ai";//Icono Home
import { FaUserCircle } from "react-icons/fa";//icono User
import { RiLoginCircleFill } from "react-icons/ri";//Icono Login
import { FaArrowAltCircleUp } from "react-icons/fa";//Icono SignUp

function Root() {
    return(
        <>
        <div className={styles.headerRoot}>
        <h1>Patient Dashboard</h1>
        </div>
            <Link to="/"><AiFillHome />Home</Link>
            <div>
            <Link to="/patients"><FaUserCircle />Patients</Link>
            </div>
            <div>
            <Link to="/createpatients"><FaUserCircle />CreatePatients</Link>
            </div>
            <div>
            <Link to="/login"><RiLoginCircleFill />Login</Link>
            </div>
            <div>
            <Link to="/login/signup"><FaArrowAltCircleUp />SignUp</Link>
            </div>
        
        
        
        
        
        <Outlet />
        
         {/* outlet para renderizar las rutas hijas */}
        </>
    )
}

export default Root;