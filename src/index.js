//Importacion de modulos y librerias
import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'


//Crear componente
//Componente funcional:
/*const App = () => { 
    return <div>Hola Mundo</div>
}*/


//Renderizado
ReactDom.render(
    <App/>,  //Componente a regresar
    document.querySelector('#root') //en donde se quiere desplegar
)


