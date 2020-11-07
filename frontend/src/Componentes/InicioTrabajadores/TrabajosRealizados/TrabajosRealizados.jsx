import React, { Component } from "react";
import "./StylesTrabajosRealizados.css";

import { Link } from "react-router-dom";

class TrabajosRealizados extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data1 } = this.props;
    return (
      <div>
        <header>
          <nav className="menu-fixed-trabajosRealizados">
            <div className="btnFlecha-TrabajosRealizados">
              <div className="btn_TrabajosRealizados">
                <Link to="/TrabajadoresInicio">
                  <button className="btn">
                    <img
                      className="TrabajosRealizados_Flecha"
                      src="https://1.bp.blogspot.com/-OYlVxSxCItI/X6Ra_EEz0kI/AAAAAAAAIUY/dP6wDIIGGwY5LXcU-M4KM972oLfNJruOwCLcBGAsYHQ/s1054/Flecha.png"
                      alt="Retroceder"
                    />
                  </button>
                </Link>
              </div>
              <div className="divimg_TrabajosRealizados">
                <div>
                  <img
                    className="img_TrabajosRealizados_Barppi"
                    src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
                    alt="LogoBarppi"
                  />
                </div>
              </div>
              <div className="divBuscar_TrabajosRealizados">
                <Link to="/TrabajadoresInicio/TrabajosRealizados/busquedaTrabajosRealizados">
                  <button className="btn imgBuscar_TrabajosRealizados_Logo">
                    <img
                      className="imgBuscar_TrabajosRealizados_Barppi"
                      src="https://1.bp.blogspot.com/-U4pggTu48lw/X6Ra_MTe7yI/AAAAAAAAIUc/6ZJ68yG58xMhVzSh_O3z4dH41Hg69JR7gCLcBGAsYHQ/s1053/Lupa.png"
                      alt="LogoBarppi"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <div className="cards-fixed-trabajosRealizados">
          {data1.map((datosT, index) => {
            return (
              <div className="divCardTrabajosRealizados">
                <Link
                  className="link_TrabajosRealizados"
                  to="/TrabajadoresInicio/TrabajosRealizados/CardTrabajosRealizados"
                >
                  <div className="card-TrabajosRealizados">
                    <div className="CardGrid_TrabajosRealizados">
                      <div className="divimgFotoPerfil_TrabajosRealizados">
                        <div className="imgdivcenterFotoPerfil_TrabajosRealizados">
                          <img
                            className="imgFotoPerfil_TrabajosRealizados"
                            src={datosT.fototrabajador}
                            alt="Foto_Perfil"
                          />
                        </div>
                      </div>
                      <div className="divdatosCuerpo_TrabajosRealizados">
                        <div className="card_body_TrabajosRealizados">
                          <div className="div_TopCard_TrabajosRealizados">
                            <h5 className="Nombre_Trabajador_TrabajosRealizados">
                              {datosT.primernombre} {datosT.segundonombre}{" "}
                              {datosT.primerapellido} {datosT.segundoapellido}
                            </h5>
                          </div>
                          <div className="div-grid-numero-direccion-TrabajosRealizados">
                            <p className="Numero_TrabajosRealizados">
                              Número telefonico: {datosT.telefono}
                            </p>
                            <p className="direccion_TrabajosRealizados">
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
      </div>
    );
  }
}

export default TrabajosRealizados;
