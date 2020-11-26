import React from "react";
import LoginUsuarios from "../Componentes/PerfilTrabajadorUsuario/LoginUsuarios/LoginUsuarios"
import { useParams } from "react-router-dom";

const LoginUsuariosP = () => {
    const { numero_id_trabajador } = useParams();
  return (
    <div>
      <LoginUsuarios numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default LoginUsuariosP;