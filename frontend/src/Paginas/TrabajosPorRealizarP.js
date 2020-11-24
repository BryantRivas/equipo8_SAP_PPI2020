import React from "react";
import TrabajosPorRealizar from "../Componentes/InicioTrabajadores/TrabajosPorRealizar/TrabajaosPorRealizar";
import { useParams } from "react-router-dom";

const TrabajosPorRealizarP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <TrabajosPorRealizar numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default TrabajosPorRealizarP;
