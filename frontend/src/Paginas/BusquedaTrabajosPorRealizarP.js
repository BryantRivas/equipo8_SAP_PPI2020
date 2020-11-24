import React from "react";
import BusquedaTrabajosPorRealizarJ from "../Componentes/InicioTrabajadores/TrabajosPorRealizar/busquedaTrabajosPorRealizar/busquedaTrabajosPorRealizarJ";
import { useParams } from "react-router-dom";

const BusquedaTrabajosPorRealizarP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <BusquedaTrabajosPorRealizarJ numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default BusquedaTrabajosPorRealizarP;
