import React, { Component } from "react";
import "./StylesTrabajosPorRealizar.css";

import { Link } from "react-router-dom";

class TrabajosPorRealizar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data1 } = this.props;
    return (
      <div>
        <div className="btnFlecha-TrabajosPorRealizar">
          <div className="btn_TrabajosPorRealizar">
            <Link to="/TrabajadoresInicio">
              <button className="btn">
                <img
                  className="TrabajosPorRealizar_Flecha"
                  src="https://1.bp.blogspot.com/-Kx3H603WVwI/X07UEW5JQAI/AAAAAAAAHO8/dYMvzLNDFbk9N6QCHaanQQUFckaTGkW1gCLcBGAsYHQ/s1280/Retroseder.png"
                  alt="Retroceder"
                />
              </button>
            </Link>
          </div>
          <div className="divimg_TrabajosPorRealizar">
            <div >
              <img
                className="img_TrabajosPorRealizar_Barppi"
                src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
                alt="LogoBarppi"
              />
            </div>
          </div>
          <div className="divBuscar_TrabajosPorRealizar">
            <button className="btn imgBuscar_TrabajosPorRealizar_Logo">
              <img
                className="imgBuscar_TrabajosPorRealizar_Barppi"
                src="https://1.bp.blogspot.com/--XV_byQLSAY/X1QgjWxRh3I/AAAAAAAAHP0/rGuxK8rYUWgFy0sQfftCmqohdBXqD1ugwCLcBGAsYHQ/s1280/BotonBuscarSinfondo.jpg"
                alt="LogoBarppi"
              />
            </button>
          </div>
        </div>
        {data1.map((datosT, index) => {
          return (
            <div className="divCardTrabajosPorRealizar">
              <Link className="link_TrabajosPorRealizar"
              to="/TrabajadoresInicio/TrabajosPorRealizar/CardTrabajosPorRealizar">
              <div className="card-TrabajosPorRealizar">
                <div className="CardGrid_TrabajosPorRealizar">
                  <div className="divimgFotoPerfil_TrabajosPorRealizar">
                    <div className="imgdivcenterFotoPerfil_TrabajosPorRealizar">
                      <img
                        className="imgFotoPerfil_TrabajosPorRealizar"
                        src={datosT.fototrabajador}
                        alt="Foto_Perfil"
                      />
                    </div>
                  </div>
                  <div className="divdatosCuerpo_TrabajosPorRealizar">
                    <div className="card_body_TrabajosPorRealizar">
                      <div className="div_TopCard_TrabajosPorRealizar">
                        <h5 className="Nombre_Trabajador_TrabajosPorRealizar">
                          {datosT.primernombre} {datosT.segundonombre}{" "}
                          {datosT.primerapellido} {datosT.segundoapellido}
                        </h5>
                      </div>
                      <div className="div-grid-numero-direccion-TrabajosPorRealizar">
                      <p className="Numero_TrabajosPorRealizar">
                        Número telefonico: {datosT.telefono}
                      </p>
                      <p className="direccion_TrabajosPorRealizar">
                        Dirección:{datosT.direccion}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TrabajosPorRealizar;
