import React, { Component } from "react";
import "./StylesbusquedaTrabajosPorRealizar.css";

import { Link } from "react-router-dom";

class busquedaTrabajosPorRealizarJ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data1 } = this.props;
    return (
      <div>
        <div className="btnFlechaRegistroBarberos">
          <div className="btnRegistroBarberos">
            <Link to="/TrabajadoresInicio/TrabajosPorRealizar">
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
              placeholder="Nombre del trabajo por realizar"
              className="input-buscar-buscarTabajosPorRealizar"
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default busquedaTrabajosPorRealizarJ;
