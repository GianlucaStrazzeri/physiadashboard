import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Patients from './pages/Patients';
import Login  from './pages/Login';
import SignUp  from './pages/SignUp';
import CreatePatientForm from "./pages/CreatePatientForm";

//creo una costante router con varias subpaginas "hijas"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,//Defino una pagina de error
      children: [
        { path: '/', element: <Home /> },//Defino una Homepage
        { path: '/patients', element: <Patients /> },//Defino una pagina que tiene que enseñar los pacientes
        { path: '/login', element: <Login /> }, //Defino una pagina con un login
        { path: '/login/signUp', element: <SignUp /> },//Defino una pagina tipo post para crear un usuario
        { path: '/createpatients', element: <CreatePatientForm /> },//Defino una pagina tipo post para crear un paciente
      ],
    },
  ]);
  
  export default router;