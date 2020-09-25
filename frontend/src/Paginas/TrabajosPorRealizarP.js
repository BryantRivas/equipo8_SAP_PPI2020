import React from "react";
import TrabajosPorRealizar from "../Componentes/InicioTrabajadores/TrabajosPorRealizar/TrabajaosPorRealizar";

import { data1 } from "../Utils/Mocks/data1";

function TrabajosPorRealizarP() {
  return (
    <div>
      <TrabajosPorRealizar data1={data1} />
    </div>
  );
}

export default TrabajosPorRealizarP;
