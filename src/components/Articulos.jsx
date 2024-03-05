import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Articulos = () => {

  const datoCompartido = useContext(PruebaContext);

  return (
    <div>
    <h1>Artículos</h1>
    <p>Página de Artículos</p>
    <p>Valor Compartido: <strong>{datoCompartido.contenido}</strong></p>
  </div>
  )
}