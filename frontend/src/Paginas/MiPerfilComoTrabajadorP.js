import React from "react";
import MiPerfilComoTrabajador from "../Componentes/InicioTrabajadores/MiPerfilComoTrabajador/MiPerfilComoTrabajador";
import { useParams } from "react-router-dom";

const MiPerfilComoTrabajadorP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <MiPerfilComoTrabajador numero_id_trabajador = {numero_id_trabajador} />
    </div>
  );
}

export default MiPerfilComoTrabajadorP;
