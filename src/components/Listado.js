import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return ( 

        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto=>(
                
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                    />
                
            ))}
        </div>
     );
}

//documentando los componentes: lo ue se define entre llaves es el propmt!
Listado.propTypes={
    gastos: PropTypes.array.isRequired
}

export default Listado;