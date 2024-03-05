import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  
  const {usuario, setUsuario} = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de Inicio</p>
      {usuario.nombre != null ? (
      <p><strong>Nombre:</strong> {usuario.nombre} {usuario.apellido}</p>
      ):(
        <>
        </>
      )}

    </div>
  )
}