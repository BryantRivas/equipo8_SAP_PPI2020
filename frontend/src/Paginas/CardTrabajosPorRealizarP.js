import React from "react";
import CardTrabajosPorRealizar from "../Componentes/InicioTrabajadores/TrabajosPorRealizar/CardTrabajosPorRealizar/CardTrabajosPorRealizar";
import { useParams } from "react-router-dom";

const CardTrabajosPorRealizarP = () => {
  const { codigo_cliente } = useParams();
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <CardTrabajosPorRealizar codigo_cliente = { codigo_cliente } numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default CardTrabajosPorRealizarP;
