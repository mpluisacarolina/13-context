import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Articulos = () => {

  const {usuario} = useContext(PruebaContext);

  return (
    <div>
    <h1>Artículos</h1>
    <p>Página de Artículos</p>
    {usuario.nombre != null ? (
      <p>Valor Compartido: <strong>{usuario.nombre}</strong></p>
      ):(
        <>
        </>
      )}
    
  </div>
  )
}