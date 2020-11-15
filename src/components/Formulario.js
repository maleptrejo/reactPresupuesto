import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';



const Formulario = ({guardarGasto, guardarCrearGasto, presupuesto, restante}) => {

    //definir states
    const [nombre, guardarNombre]=useState('');
    const [cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]= useState(false);

//fx que se dispara cuando el usuario agrega un gasto
const agregarGasto =e =>{
    e.preventDefault();

    //validar
    if(cantidad <1 || isNaN(cantidad) || nombre.trim()==='' || cantidad >restante) {
        guardarError(true);
        return;
    } 


    guardarError(false);

    //construir el gasto (nombre, cantidad, se escribe así porqe llave y valor tienen el mismo str)
    const gasto={
        nombre,
        cantidad,
        id: shortid.generate()
    }

    //pasar el gasto al componente ppal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //resetear el form
    guardarNombre('');
    guardarCantidad(0);
}


    return ( 
        

        <form 
        onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {error? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null }

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                type="text" 
                lassName="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={e=> guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                type="number" 
                lassName="u-full-width"
                placeholder="Ej. 300"
                value={cantidad}
                onChange={e=> guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input 
            type="submit"
            className="button-primary u-full-width"
            value="agregar gasto"
            />
        </form>
     );
    
}

//documentando los componentes
Formulario.propTypes={
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;