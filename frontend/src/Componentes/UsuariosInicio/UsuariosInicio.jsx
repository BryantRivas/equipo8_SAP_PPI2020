import React, { Component } from "react";
import "./StylesInicioUsuarios.css";

import { Link } from "react-router-dom";

class inicioUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data1 } = this.props;

    return (
      <div className="div_Padre_UsuariosInicio">
        <header>
          <nav className="menu-fixed-usuariosInicio">
            <div className="btnFlechaInicioUsuarios">
              <div className="btnInicioUsuarios">
                <Link exact to="/Inicio">
                  <button className="btn">
                    <img
                      className="InicioUsuariosFlecha"
                      src="https://1.bp.blogspot.com/-OYlVxSxCItI/X6Ra_EEz0kI/AAAAAAAAIUY/dP6wDIIGGwY5LXcU-M4KM972oLfNJruOwCLcBGAsYHQ/s1054/Flecha.png"
                      alt="Retroceder"
                    />
                  </button>
                </Link>
              </div>
              <div className="divimgInicioUsuarios">
                <div className="imgInicioUsuariosLogo">
                  <img
                    className="imgInicioUsuariosBarppi"
                    src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
                    alt="LogoBarppi"
                  />
                </div>
              </div>
              <div className="divBuscarInicioUsuarios">
                <Link to="/UsuariosInicio/BuscarTrabajador">
                  <button className="btn imgBuscarInicioUsuariosLogo">
                    <img
                      className="imgBuscarInicioUsuariosBarppi"
                      src="https://1.bp.blogspot.com/-U4pggTu48lw/X6Ra_MTe7yI/AAAAAAAAIUc/6ZJ68yG58xMhVzSh_O3z4dH41Hg69JR7gCLcBGAsYHQ/s1053/Lupa.png"
                      alt="LogoBarppi"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <div className="cards-fixed-usuariosInicio">
          {data1.map((datosT, index) => {
            return (
              <div className="divCardUsuariosInicio">
                <div className="card ">
                  <div className="CardGridUsuariosInicio">
                    <div className="divimgFotoPerfilUsuariosInicio">
                      <div className="imgdivcenterFotoPerfil_UsuariosInicio">
                        <img
                          className="imgFotoPerfilUsuariosInicio"
                          src={datosT.fototrabajador}
                          alt="Foto_Perfil"
                        />
                      </div>
                    </div>
                    <div className="divdatosCuerpoUsuariosInicio">
                      <div className="card_body">
                        <div className="div_Grid_TopCard_UsuariosInicio">
                          <div className="div-Nombre_Trabajador_UsuariosInicio">
                            <h3 className="Nombre_Trabajador_UsuariosInicio">
                              {datosT.primernombre} {datosT.segundonombre}{" "}
                              {datosT.primerapellido} {datosT.segundoapellido}
                            </h3>
                          </div>

                          <div className="divButtonSolicitarUsuariosInicio">
                            <Link
                              className="btn ButonUsuariosInicio"
                              to="/PerfilTrabajadorUsuario1"
                            >
                              Solicitar
                            </Link>
                          </div>
                        </div>
                        <div className="div_Informarcionadicional_UsuariosInicio">
                          <p className="Numero_UsuarioInicio">
                            Número telefonico: {datosT.telefono}
                          </p>
                          <p className="Numero_UsuarioInicio">
                            Dirección: {datosT.direccion}
                          </p>
                        </div>
                        <textarea
                          className="textarea_Descripcion_UsuariosInicio"
                          readonly="readonly"
                        >
                          {datosT.descripcion}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default inicioUsuarios;
