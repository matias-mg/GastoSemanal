import React, { Component } from 'react';
import Gasto from './Gasto';

class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                <Gasto />
                {console.log(this.props.gastos)}
            </div>            
        );
    }
}

export default Listado;