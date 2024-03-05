import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  
  const compartida = useContext(PruebaContext);

  console.log(compartida);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de Inicio</p>
      <p>Valor Compartido: <strong>{compartida.titulo}</strong></p>
    </div>
  )
}