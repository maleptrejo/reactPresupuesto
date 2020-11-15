import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //definir state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError]= useState(false);

    //fx que lee presupuesto
    //parseInt me convierte string a number
    //toma como base 10
    const definirPresupuesto=e=>{
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
    const agregarPresupuesto=e=>{
        e.preventDefault();
        //Validar
        if (cantidad <1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //qué hacer si pasa validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error mensaje="El presupuesto es incorrecto"/> :null}
            <form 
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                />
                </form>  
        </Fragment>
     );
}

//documentando los componentes
ControlPresupuesto.propTypes={
    guardarPresupuesto: PropTypes.number.isRequired,
    guardarRestante: PropTypes.number.isRequired,
    actualizarPregunta: PropTypes.number.isRequired,
}
 
export default Pregunta;