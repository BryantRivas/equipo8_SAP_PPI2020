import React from "react";
import TrabajosRealizados from "../Componentes/InicioTrabajadores/TrabajosRealizados/TrabajosRealizados";
import { useParams } from "react-router-dom";

const TrabajosPorRealizarP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <TrabajosRealizados numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default TrabajosPorRealizarP;
