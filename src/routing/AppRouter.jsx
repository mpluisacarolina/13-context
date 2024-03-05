import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { AcercaDe } from '../components/AcercaDe';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <header className="header">
                {/* MENU DE NAVEGACION */}
                <nav>
                    <div id="logo">
                        <h2>Aprendiendo React Context</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/"> Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articulos"> Artículos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/acercade"> Acerca de..</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto"> Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login"> Identifícate</NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
            <section className="content">
                {/* CONFIGURAR RUTAS */}

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Inicio" element={<Inicio />} />
                    <Route path="Articulos" element={<Articulos />} />
                    <Route path="AcercaDe" element={<AcercaDe />} />
                    <Route path="Contacto" element={<Contacto />} />
                    <Route path="Login" element={<Login />} />

                    <Route path="*" element={(<div>
                        <h1> ESTA PÁGINA NO EXISTE </h1>
                    </div>)} />

                </Routes>

            </section>


        </BrowserRouter>
    )
}
