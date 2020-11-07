import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import InicioAppP from "./Paginas/InicioAppP";
import InicioPrincipalP from "./Paginas/InicioPrincipalP";
import RegistroBarberosP from "./Paginas/RegistroBarberosP";
import IngresarTrabajadorP from "./Paginas/IngresarTrabajadorP";
import UsuariosInicioP from "./Paginas/UsuariosInicioP";
import TrabajadoresInicioP from "./Paginas/TrabajadoresInicioP";
import TrabajosRealizadosP from "./Paginas/TrabajosRealizadosP";
import TrabajosPorRealizarP from "./Paginas/TrabajosPorRealizarP";
import PerfilTrabajadorUsuario1P from "./Paginas/PerfilTrabajadorUsuario1P";
import VerificacionPerfilTrabajadorUsuario2P from "./Paginas/VerificacionPerfilTrabajadorUsuario2P";
import MiPerfilComoTrabajadorP from "./Paginas/MiPerfilComoTrabajadorP";
import InformacionPersonalTrabajadorP from "./Paginas/InformacionPersonalTrabajadorP";
import MiAgendaTrabajadorP from "./Paginas/MiAgendaTrabajadorP";
import CardTrabajosPorRealizarP from "./Paginas/CardTrabajosPorRealizarP";
import CardTrabajosRealizadosP from "./Paginas/CardTrabajosRealizadosP";
import RegistroBarberos1P from "./Paginas/RegistroBarberos1P";
import RegistroBarberos2P from "./Paginas/RegistroBarberos2P";
import RegistroBarberos3P from "./Paginas/RegistroBarberos3P";
import BusquedaTrabajosRealizadosP from "./Paginas/BusquedaTrabajosRealizadosP";
import BusquedaTrabajosPorRealizarP from "./Paginas/BusquedaTrabajosPorRealizarP";
import BuscarTrabajadorUsuariosInicioP from "./Paginas/BuscarTrabajadorUsuariosInicioP";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/TrabajadoresInicio/TrabajosPorRealizar">
          <TrabajosPorRealizarP />
        </Route>

        <Route exact path="/UsuariosInicio/BuscarTrabajador">
          <BuscarTrabajadorUsuariosInicioP />
        </Route>

        <Route
          exact
          path="/TrabajadoresInicio/TrabajosPorRealizar/busquedaTrabajosPorRealizar"
        >
          <BusquedaTrabajosPorRealizarP />
        </Route>

        <Route
          exact
          path="/TrabajadoresInicio/TrabajosRealizados/busquedaTrabajosRealizados"
        >
          <BusquedaTrabajosRealizadosP />
        </Route>

        <Route
          exact
          path="/TrabajadoresInicio/TrabajosRealizados/CardTrabajosRealizados"
        >
          <CardTrabajosRealizadosP />
        </Route>

        <Route
          exact
          path="/TrabajadoresInicio/TrabajosPorRealizar/CardTrabajosPorRealizar"
        >
          <CardTrabajosPorRealizarP />
        </Route>

        <Route exact path="/TrabajadoresInicio/TrabajosRealizados">
          <TrabajosRealizadosP />
        </Route>

        <Route exact path="/UsuariosInicio">
          <UsuariosInicioP />
        </Route>

        <Route exact path="/PerfilTrabajadorUsuario1">
          <PerfilTrabajadorUsuario1P />
        </Route>

        <Route exact path="/PerfilTrabajadorUsuario2">
          <VerificacionPerfilTrabajadorUsuario2P />
        </Route>

        <Route exact path="/RegistroBarberos">
          <RegistroBarberosP />
        </Route>
        <Route exact path="/RegistroBarberos/RegistroBarberos1">
          <RegistroBarberos1P />
        </Route>
        <Route exact path="/RegistroBarberos/RegistroBarberos2">
          <RegistroBarberos2P />
        </Route>
        <Route exact path="/RegistroBarberos/RegistroBarberos3">
          <RegistroBarberos3P />
        </Route>

        <Route exact path="/Inicio">
          <InicioPrincipalP />
        </Route>

        <Route exact path="/IngresarTrabajador">
          <IngresarTrabajadorP />
        </Route>

        <Route exact path="/TrabajadoresInicio">
          <TrabajadoresInicioP />
        </Route>

        <Route exact path="/TrabajadoresInicio/MiPerfilComoTrabajador">
          <MiPerfilComoTrabajadorP />
        </Route>

        <Route
          exact
          path="/TrabajadoresInicio/MiPerfilComoTrabajador/InformacionPersonal"
        >
          <InformacionPersonalTrabajadorP />
        </Route>

        <Route exact path="/TrabajadoresInicio/MiAgendaTrabajador">
          <MiAgendaTrabajadorP />
        </Route>

        <Route exact path="/">
          <InicioAppP />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
