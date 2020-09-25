import React from "react";
import "./StylesMiAgendaTrabajador.css";

import { Link } from "react-router-dom";

const MiAgendaTrabajador = () => {
  return (
    <div>
      <div className="btnFlechaRegistroBarberos">
          <div className="btnRegistroBarberos">
            <Link to="/TrabajadoresInicio">
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
        <div>
          
        </div>
        <div className="div-div-grid-botones-MiAgendaTrabajador">
          <div className="div-botones-centro-MiAgendaTrabajador">
          <button type="button" className="btn boton-MiAgendaTrabajador">
            INGRESAR CON GOOGLE
          </button>
          </div>
          <div className="div-botones-centro-MiAgendaTrabajador">
          <button type="button" className="btn boton-MiAgendaTrabajador">
            IR A GOOGLE CALENDAR
          </button>
          </div>
        </div>
    </div>
  );
};

export default MiAgendaTrabajador;