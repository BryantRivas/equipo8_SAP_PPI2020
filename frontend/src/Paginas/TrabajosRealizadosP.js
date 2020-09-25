import React from "react";
import TrabajosRealizados from "../Componentes/InicioTrabajadores/TrabajosRealizados/TrabajosRealizados";
import { data1 } from "../Utils/Mocks/data1";

function TrabajosPorRealizarP() {
  return (
    <div>
      <TrabajosRealizados data1={data1} />
    </div>
  );
}

export default TrabajosPorRealizarP;
