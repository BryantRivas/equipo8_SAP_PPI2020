import React from "react";
import RegistroUsuarios from "../Componentes/PerfilTrabajadorUsuario/RegistroUsuario/RegistroUsuario"
import { useParams } from "react-router-dom";

const RegistroUsuariosP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <RegistroUsuarios numero_id_trabajador ={ numero_id_trabajador } />
    </div>
  );
}

export default RegistroUsuariosP;