import React from "react";
import "./StylesbusquedaTrabajosRealizados.css";

import { Link } from "react-router-dom";

const BusquedaTrabajosRealizados = () => {
  return (
    <div>
        <div className="btnFlechaRegistroBarberos">
          <div className="btnRegistroBarberos">
            <Link to="/TrabajadoresInicio/TrabajosRealizados">
              <button className="btn">
                <img
                  className="RegistroBarberosFlecha"
                  src="https://1.bp.blogspot.com/-Kx3H603WVwI/X07UEW5JQAI/AAAAAAAAHO8/dYMvzLNDFbk9N6QCHaanQQUFckaTGkW1gCLcBGAsYHQ/s1280/Retroseder.png"
                  alt="Retroceder"
                />
              </button>
            </Link>
          </div>
          <div className="divimgRegistroBarberosBarppi">
            <div className="imgRegistroBarberosLogo">
              <img
                className="imgRegistroBarberosBarppi"
                src="https://1.bp.blogspot.com/-5RT03EhuKo4/X03AaXpDoPI/AAAAAAAAHOo/rQpTJBbrX-8J66PwoQjW_GsjKrrZAAysACLcBGAsYHQ/s1000/Blogo.png"
                alt="LogoBarppi"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="div-texto-buscar-buscarTrabajosPorRealizar">Buscar</div>
          <div className="div-input-buscar-buscarTrabajosPorRealizar">
            <input
              placeholder="Nombre del trabajo realizados"
              className="input-buscar-buscarTabajosPorRealizar"
              type="text"
            />
          </div>
        </div>
    </div>
  );
};

export default BusquedaTrabajosRealizados;
