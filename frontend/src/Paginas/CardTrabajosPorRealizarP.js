import React from "react";
import CardTrabajosPorRealizar from "../Componentes/InicioTrabajadores/TrabajosPorRealizar/CardTrabajosPorRealizar/CardTrabajosPorRealizar";
import { useParams } from "react-router-dom";

const CardTrabajosPorRealizarP = () => {
  const { id } = useParams()
  return (
    <div>
      <CardTrabajosPorRealizar numero_id = { id } />
    </div>
  );
}

export default CardTrabajosPorRealizarP;
