import { Link, Outlet } from 'react-router-dom';
import PatientsList from './Patients';
import Login  from './Login';
import SignUp  from './SignUp';
import styles from './Root.module.css';

function Root() {
    return(
        <>
        <div className={styles.headerRoot}>
        <h1>Patient Dashboard</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/login">Login</Link>
        <Link to="/login/signup">SignUp</Link>
        </nav>
        <Outlet />
        </div>
         {/* outlet para renderizar las rutas hijas */}
        </>
    )
}

export default Root;