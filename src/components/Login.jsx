import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const { usuario, setUsuario } = useContext(PruebaContext);

  const guardarDatos = e => {
    e.preventDefault();
    let usuarioLogeado = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value
    }
    setUsuario(usuarioLogeado);
  }

  return (
    <div>
      <h1>Identifícate</h1>
      <p>Página de Login</p>
      <form className="login" onSubmit={guardarDatos}>
        <input type="text" name="nick" placeholder="Nickname " />
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="apellido" placeholder="Apellido" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
