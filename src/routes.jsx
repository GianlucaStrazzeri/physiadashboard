import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Patients from './pages/Patients';
import Coins  from './pages/Coins';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/patients', element: <Patients /> },
        { path: '/coins', element: <Coins /> },
      ],
    },
  ]);
  
  export default router;