import React from "react";
import MiAgendaTrabajador from "../Componentes/InicioTrabajadores/MiAgendaTrabajador/MiAgendaTrabajador";
import { useParams } from "react-router-dom";

const MiAgendaTrabajadorP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <MiAgendaTrabajador numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default MiAgendaTrabajadorP;
