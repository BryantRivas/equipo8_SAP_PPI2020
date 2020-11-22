import React from "react";
import CardTrabajosRealizados from "../Componentes/InicioTrabajadores/TrabajosRealizados/CardTrabajosRealizados/CardTrabajosRealizados";
import { useParams } from "react-router-dom";

const CardTrabajosRealizadosP = () => {
  const { id } = useParams()
  return (
    <div>
      <CardTrabajosRealizados numero_id =  { id } />
    </div>
  );
}

export default CardTrabajosRealizadosP;
