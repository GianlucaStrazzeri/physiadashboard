# Para empezar a ver los cambios en vite
TERMINAL
npm run dev 


# Estructura de Archivos
.env: Contiene las claves apis de firebase
.eslintrc.cjs:  proyecto de código abierto que lo ayuda a encontrar y solucionar problemas con su código JavaScript.
.gitignore: documento que indica que formatos de documentos no debe subir a git el proyecto muy importante para no subir tus claves .env publicamente o los node_modules
index.html: pagína principal html que se vinculará a través del id root con react dom
package.json: contiene todas las dependencias
vite.config.js: Se encarga de construir el proyecto inicial con su puerto y todo montado (normalmente 5173)
-node_modules:contiene todos los modulos de node

-src: contenedor de otros archivos
--src/main.jsx: ReactDom Enlaza el html que renderiza la versión estricta de React
--src/routes.jsx: Contiente el esquema de enrutamiento de la pagina 

--src/auth: Carpeta de archivos
---src/auth/AuthDetails.jsx: Configura un observador en el objeto auth para escuchar cambios en el estado de autenticación.

--src/config: Carpeta de archivos
---src/config/firebase.js : importa e inicializa firebase

--src/modules
--- src/modules/CreatePatientForm.jsx :Crea la interfaz para crear un paciente con el metodo post (NO FUNCIONA)
--- src/modules/CreatePatientForm.module.css : Modifica la parte visual del componente CreatePatientForm
--- src/modules/Error.jsx
--- src/modules/Header.jsx
--- src/modules/Header.module.css
--- src/modules/Home.jsx
--- src/modules/Newpass.jsx
--- src/modules/NewPass.module.css
--- src/modules/Patients.jsx
--- src/modules/SignIn.jsx
--- src/modules/SignIn.module.css
--- src/modules/SignUp.jsx
--- src/modules/SignUp.module.css

--src/public: Carpeta de archivos




# Dependencias
"firebase": La usamos para el login
"react": Para poder trabajar en modulos con javascript ,
"react-dom": Crea un virtual Dom que carga la app entera, pero deja visualizar solo lo necesario,
"react-router-dom": Dependencia para crear enrutamiento de react


# EndPoints
http://localhost:5173/ ---> si el usuario no está logueado debe de mostrar el formulario de acceso de login sino debe de mostrar el listado de pacientes 
http://localhost:5173/login
http://localhost:5173/patient/create/form ---> Debe de mostrar el formulario para crear el paciente una vez hecho click al botón de enviar debe de reenviar a ("http://localhost:5173/) para mostrar los cambios
http://localhost:5173/patients

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


