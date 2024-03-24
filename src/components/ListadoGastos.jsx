import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gasto contenedor'>
        <h2>{gastos.legth ? "Gastos" : "No Hay Gastos Aún"}</h2>

        {gastos.map(gasto =>(
            <Gasto
            key={gasto.id}
            gasto={gasto}
            />
        ))}

    </div>
  )
}

export default ListadoGastos
