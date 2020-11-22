import React, { Component } from "react";
import PerfilTrabajadorUsuario1 from "../Componentes/PerfilTrabajadorUsuario/PerfilTrabajadorUsuario1";
import { useParams } from "react-router-dom";


const PerfilTrabajadorUsuario1P = () => {
    //console.log(useParams());
    const { id } = useParams()
    console.log(id)
    return (
      <div>
        <PerfilTrabajadorUsuario1 numero_id = {id}/>
      </div>
    );
  
}

export default PerfilTrabajadorUsuario1P;
