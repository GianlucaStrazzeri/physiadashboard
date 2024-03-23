import { Link, Outlet } from 'react-router-dom';
import PatientsList from './Patients';
import Coins  from './Coins';

function Root() {
    return(
        <>
        <h1>Phys</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/coins">Coins</Link>
        
        </nav>
        <Outlet /> {/* outlet para renderizar las rutas hijas */}
        </>
    )
}

export default Root;