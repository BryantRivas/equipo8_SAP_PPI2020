import React from "react";
import BusquedaTrabajosRealizados from "../Componentes/InicioTrabajadores/TrabajosRealizados/busquedaTrabajosRealizados/BusquedaTrabajosRealizados";
import { useParams } from "react-router-dom";

function busquedaTrabajosRealizadosP() {
  const { numero_id_trabajador } = this.props.match.params.id;
  console.log(numero_id_trabajador)
  return (
    <div>
      <BusquedaTrabajosRealizados numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default busquedaTrabajosRealizadosP;
