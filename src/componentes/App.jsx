import React, { Component } from 'react';
import '../css/App.css';
import {obtenerPresupuesto} from '../helper';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';

class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  //Obtener el resultado ingresado para luego hacerle un setState al presupuesto
  componentDidMount(){    
    const presupuestoGastos = obtenerPresupuesto();

    this.setState({
      presupuesto: presupuestoGastos
    })
  }  

  agregarGasto = gasto => {
    //Tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    
    //Asignarle un array de Gastos con ID tipo Date que almacene el gasto enviado 
    gastos[`gasto${Date.now()}`] = gasto;

    //Ponerlo el gasto en State
    this.setState({
      gastos: gastos
    })
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo="Gasto semanal"
        />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto={this.agregarGasto}
              />
            </div>

            <div className="one-half column">
              <Listado 
                gastos={this.state.gastos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;