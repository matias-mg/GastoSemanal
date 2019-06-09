import React, { Component } from 'react';

class Formulario extends Component {
    //Crear refs
    spendNameRef = React.createRef();
    spendAmountRef = React.createRef();
    
    handle = e => {
        e.preventDefault();

        const gasto = {
            nombreGasto : this.spendNameRef.current.value,
            cantidadGasto : this.spendAmountRef.current.value
        };

        //Enviar objeto gasto como prop
        this.props.agregarGasto(gasto);

        //Resetear el formulario
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={this.handle}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.spendNameRef} className="u-full-width" type="text" placeholder="Ej: Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.spendAmountRef} className="u-full-width" type="text" placeholder="Ej: 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

export default Formulario;