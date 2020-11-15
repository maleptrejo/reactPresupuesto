import React, {Fragment} from 'react';
//como no es un expòrt default, se importa el helper como extracción
import {revisarPresupuesto} from  '../herlpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>

      );
}

//documentando los componentes
ControlPresupuesto.propTypes={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;