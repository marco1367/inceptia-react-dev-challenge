2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por
ejemplo autenticación, solicitud de clientes activos para el usuario y
solicitud de casos por cliente)


Se implementó Redux en la App.

autenticacion:
    mediante formulario (LogIn) se realiza peticion al back guardando la respuesta en localStorage y mediante una accion de Redux tambien se guarda en un
    estado global (se llamó user al estado global en la app).
    
    Para las rutas protegidas se creo un componente RequireAuth.jsx que mediante react-router-dom chequea si el usuario esta logeado y autorizado para acceder, en caso que lo esté se le da permiso para ingresar a la pagina en cuestión (Dashboard.jsx en la app), en caso contrario se redirige a la pagina
    de login.

    refresh de pagina: en caso de que el usuario realice un refresh de la pagina, en el nivel mas alto de la app (Layaut.jsx en la app realizada) se 
    ejecuta primero un useEffect chequeando si ya estaba logeado llamando a los datos guardados previamente en el localStorage. si estaba logueado,
    los datos de guardan en el estado global de redux mencionado anteriormente (user).

    roles de usuario: en el caso de tener diferentes roles de usuarios, en el componente de proteccion de rutas, dependiendo de la pagina a ingresar,
    se le permite o no entrar dependiendo el roll que tiene. En este caso no hay diferentes roles, por lo tanto, unicamente le damos acceso dependiendo
    si está logeado o no.


solicitud de clientes activos:
    cunado realizamos la peticion al back de los clientes con el token, ejecutamos una accion asincronica (se implementa redux-thunk en la app) y la respuesta la guardamos en un estado global de redux (clients en nuastra app) y si quicieramos guardar los unicamente los activos o separarlos del resto, mediante un metodo filter de js los guardamos por separado en el mismo initial state, ej:
    clients:{
        active: {},
        inactive: {},
    }
    otra forma seria guardar todos los clientes en un mismo estado global (como se implemento en la app 'clients') y luego en el caso de ser necesario, se crea una accion que se encargue de filtrar dicho stado global, retornando unicamente los usuarios activos o inactivos.


solicitud de casos por cliente:
    con el id del cliente en aprticular y el token de acceso realizamos la peticion de casos al back, la response a igual que con cleintes activos, mediante una accion asincrona de redux de guardan en un estado global (casesList en la app) y luego se muestran en donde el usuario lo nesecite.

Hooks:
    para el manejo de acciones y estados globales de redux se implementaron los hooks useDispatch y useSelector en los diferentes componentes, disminuyendo asi el numero de lineas de codigo para manejar estas acciones.

LOS ESTADOS GLOBALES DE LA APP SE PUEDEN VER EN EL ARCHIVO rootReducer.js



2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías
el index.js?

Con el fin de crear una app de tipo SPA se implementa react-router y react-router-dom version 6 (ultima version estable), quedando de la siguiente forma el index.js y app.js:
    index.js:
    <Provider store={store} >
        <BrowserRouter>  
            <App />
        </BrowserRouter>
    </Provider>
    el Provider es el componente que encapsula la app para poder implementar Redux y por otro lado, BrowserRouter en el componente padre de reac-router que nos permite renderizar componentes dependiendo de la ruta en la que estemos, es decir, no se refresca la pagina al navegar por la app.

    app.js:
    <Routes>
      <Route path={'/ruta1'} element={} >
        <Route path={'/subruta1-1'} element={} />
        <Route path={'/subruta 2-1'} element={} />
        .
        .
        .
      </Route>
      <Route path={'/ruta2'} element={} >
        <Route path={'/subruta 1-2'} element={} />
        <Route path={'/subruta 2-2'} element={} />
        .
        .
        .
      </Route>
    </Routes>

    de esta forma podemos tener diferentes rutas principales y subrutas, podiendo renderizar diferentes componentes dependiendo del path de la url que estemos navegando. dicha navegacion se realiza mediante los componentes nativos Link y NavLink para poder obtener una SPA.

    EN PROYECTOS MAS GRANDES SE IMPLEMENTAN ARCHIVOS DE EXPORTACION E IMPORTACION DE RUTAS PUBLICAS Y PRIVADAS PARA NO ENTORPECER EL ARCHIVO RAIZ index.js Y app.js, EN ESTE CASO COMO EL PROYECTO ES CHICO, NO SE CREARON DICHOS ARCHIVOS.