import React from "react";
import PerfilTrabajadorUsuario2 from "../Componentes/PerfilTrabajadorUsuario/VerificacionPerfilTrabajadorUsuario/VerificacionPerfilTrabajadorUsuario";
import { useParams } from "react-router-dom";

const VerificacionPerfilTrabajadorUsuario2P = () => {
  const { id } = useParams();
  return (
    <div>
      <PerfilTrabajadorUsuario2 numero_id = { id } />
    </div>
  );
}

export default VerificacionPerfilTrabajadorUsuario2P;
