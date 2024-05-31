import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "./modules/Error"
import Header from"./modules/Header"
import Patients from "./modules/Patients"
import CreatePatientForm from "./modules/CreatePatientForm"
import SignUp from "./modules/SignUp"
import SignIn from "./modules/SignIn"
import NewPass from "./modules/NewPass"

const router= createBrowserRouter(
    [{
path:"/",
element:<Header/> ,
errorElement:<ErrorPage/>,
children:[
    {path:"/patients",  element:<Patients/>},
    {path:"/", element:<SignIn/>},
    {path:"/patient/create/form", element:<CreatePatientForm/>},
    {path:"/signup", element:<SignUp/>},
    {path:"/newpass", element:<NewPass/>},
    {path:"/login", element:<SignIn/>}
]}







])

export default router