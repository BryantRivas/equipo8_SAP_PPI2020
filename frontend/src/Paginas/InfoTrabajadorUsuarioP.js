import React from "react";
import infoTrabajadorUsuario from "../Componentes/infoTrabajadorUsuario/infoTrabajadorUsuario";
import { useParams } from "react-router-dom";

const InfoTrabajadorUsuarioP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <infoTrabajadorUsuario />
    </div>
  );
}

export default InfoTrabajadorUsuarioP;