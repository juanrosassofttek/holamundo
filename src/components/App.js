import React from 'react' 

//Nuestras librerias
import Regards from './regards'

 
//export default class App extends React.Component { //Asi tabien se puede exportar el componente. Opcion 1
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            name: 'Luis', 
            lastName: 'Rosas'
        }
       
        this.ChangeState = this.ChangeState.bind(this)
     }

     ChangeState (objectName) {
         //this.state.name = 'Luis Directo'
         //this.state.lastName = 'Gonzalez'
        this.setState(objectName)
     }

     //render solo puede regresar un solo elemento
    render() {
        return (
            <div>
                <Regards objectName = {this.state}/>
                <button onClick={() => this.ChangeState({name: 'Fernando', lastName: 'Rosas' })}>Cambiar a Fer</button>     
                <button onClick={() => this.ChangeState({name: 'Lorena', lastName: 'Gonzalez' })}>Cambiar a Lore</button> 
                <button onClick={() => this.ChangeState({name: 'Luis', lastName: 'Rosas' })}>Cambiar a yo</button> 
            </div>
            
        )
    }




}

//para exportar el componente tambien se puede hacer asi, opcion 2:
export default App 