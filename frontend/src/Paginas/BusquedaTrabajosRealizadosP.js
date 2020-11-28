import React from "react";
import BusquedaTrabajosRealizados from "../Componentes/InicioTrabajadores/TrabajosRealizados/busquedaTrabajosRealizados/BusquedaTrabajosRealizados";
import { useParams } from "react-router-dom";

const BusquedaTrabajosRealizadosP = () => {
  const { numero_id_trabajador } = useParams();
  return (
    <div>
      <BusquedaTrabajosRealizados numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default BusquedaTrabajosRealizadosP;
