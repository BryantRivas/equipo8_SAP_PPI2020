import React from "react";
import UsuariosInicio from "../Componentes/UsuariosInicio/UsuariosInicio";

import { data1 } from "../Utils/Mocks/data1";

function UsuariosInicioP() {
  return (
    <div>
      <UsuariosInicio data1={data1} />
    </div>
  );
}

export default UsuariosInicioP;
