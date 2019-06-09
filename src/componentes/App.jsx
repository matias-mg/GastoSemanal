import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  state = {
    presupuesto: '',
    restante : '',
    gastos: {}
  }

  agregarGasto = gasto => {
    //Tomar una copia del state actual
    const gastos = {...this.state.gastos};
    console.log("Se agregó gasto " + gasto);
    console.log(gastos);
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
              2
                    </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;