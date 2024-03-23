import { Link, Outlet } from 'react-router-dom';
import PatientsList from './Patients';
import Coins  from './Coins';
import styles from './Root.module.css';

function Root() {
    return(
        <>
        <div className={styles.headerRoot}>
        <h1>Phys</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/coins">Coins</Link>
        
        </nav>
        <Outlet />
        </div>
         {/* outlet para renderizar las rutas hijas */}
        </>
    )
}

export default Root;