import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Patients from './pages/Patients';
import Login  from './pages/Login';
import SignUp  from './pages/SignUp';
import CreatePatientForm from "./pages/CreatePatientForm";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/patients', element: <Patients /> },
        { path: '/login', element: <Login /> },
        { path: '/login/signUp', element: <SignUp /> },
        { path: '/createpatients', element: <CreatePatientForm /> },
      ],
    },
  ]);
  
  export default router;