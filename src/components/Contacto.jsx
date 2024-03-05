import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const { usuario } = useContext(PruebaContext);
  return (
    <div>
      <h1>Contacto</h1>
      <p>Página de Contacto</p>
      {usuario.nombre != null ? (
        <p>Valor Compartido: <pre>{JSON.stringify(usuario)}</pre></p>
      ) : (
        <>
        </>
      )}
    </div>
  )
}