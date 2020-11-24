import React from "react";
import InformacionPersonalTrabajador from "../Componentes/InicioTrabajadores/MiPerfilComoTrabajador/InformacionPersonalTrabajador/InformacionPersonalTrabajador";
import { useParams } from "react-router-dom";

const InformacionPersonalTrabajadorP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <InformacionPersonalTrabajador numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default InformacionPersonalTrabajadorP;
