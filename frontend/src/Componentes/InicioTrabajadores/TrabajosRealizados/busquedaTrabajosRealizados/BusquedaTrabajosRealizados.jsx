import React from "react";
import "./StylesbusquedaTrabajosRealizados.css";

import { Link } from "react-router-dom";

const BusquedaTrabajosRealizados = () => {
  return (
    <div>
      <header>
        <nav className="menu-fixed-busqueda-trabajosRealizados">
          <div className="btnFlechaRegistroBarberos">
            <div className="btnRegistroBarberos">
              <Link to="/TrabajadoresInicio/TrabajosRealizados">
                <button className="btn">
                  <img
                    className="RegistroBarberosFlecha"
                    src="https://1.bp.blogspot.com/-OYlVxSxCItI/X6Ra_EEz0kI/AAAAAAAAIUY/dP6wDIIGGwY5LXcU-M4KM972oLfNJruOwCLcBGAsYHQ/s1054/Flecha.png"
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
        </nav>
      </header>

      <div className="busqueda-fixed-trabajosRealizados">
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
