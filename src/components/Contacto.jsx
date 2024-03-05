import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const datoDesdeElContext = useContext(PruebaContext);
  return (
    <div>
    <h1>Contacto</h1>
    <p>Página de Contacto</p>
      <p>Valor Compartido: <pre>{JSON.stringify(datoDesdeElContext)}</pre></p>
  </div>
  )
}