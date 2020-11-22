import React from "react";
import TrabajadoresInicio from "../Componentes/InicioTrabajadores/TrabajadoresInicio";
import { useParams } from "react-router-dom";

const TrabajadoresInicioP = () => {
  const { numero_id_trabajador } = useParams();
  console.log(numero_id_trabajador)
  return (
    <div>
      <TrabajadoresInicio numero_id_trabajador = { numero_id_trabajador } />
    </div>
  );
}

export default TrabajadoresInicioP;
