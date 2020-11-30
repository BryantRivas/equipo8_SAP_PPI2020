import React from "react";
import InfoTrabajadorUsuario from "../Componentes/InfoTrabajadorUsuarioC/InfoTrabajadorUsuarioC";
import { useParams } from "react-router-dom";

const InfoTrabajadorUsuarioP = () => {
  const { numero_id_trabajador } = useParams();
  console.log(numero_id_trabajador)
  return (
    <div>
      <InfoTrabajadorUsuario numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default InfoTrabajadorUsuarioP;