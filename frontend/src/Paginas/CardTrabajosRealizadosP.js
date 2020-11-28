import React from "react";
import CardTrabajosRealizados from "../Componentes/InicioTrabajadores/TrabajosRealizados/CardTrabajosRealizados/CardTrabajosRealizados";
import { useParams } from "react-router-dom";

const CardTrabajosRealizadosP = () => {
  const { numero_id_trabajador } = useParams();
  const { codigo_cita } = useParams();
  return (
    <div>
      <CardTrabajosRealizados numero_id_trabajador =  { numero_id_trabajador } codigo_cita = { codigo_cita } />
    </div>
  );
}

export default CardTrabajosRealizadosP;
