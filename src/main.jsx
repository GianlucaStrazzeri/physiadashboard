
import React from 'react';//importando react como dependencia
import ReactDOM from 'react-dom/client';//importo react-dom como dependencia
import { RouterProvider } from 'react-router';//importo el enrutador desde react
import router from './routes';//importo router 

//creo un router en el dom virtual vinculandolo con el div "root" de index.html
//renderizo la versión estricta de React en el routerProvider paso una props -> router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);