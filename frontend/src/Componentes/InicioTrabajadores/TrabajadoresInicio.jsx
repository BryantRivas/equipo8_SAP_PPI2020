import React, { Component } from "react";
import "./StylesTrabajadoresInicio.css";
import axios from "axios";

import { Link } from "react-router-dom";

class TrabajadoresInicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      datos: [],
    };
  }

  componentDidMount() {
    // https://barppi.herokuapp.com/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    // http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    axios
      .get(
        `http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data[0]
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }
  render() {
    console.log(this.state.datos);
    const characters = this.state.datos;
    return (
      <div className="divFatherIngresarTrabajador">
        <header>
          <nav className="menu-fixed-trabajadoresInicio">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/IngresarTrabajador">
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
  
        <div className="informacion-fixed-trabajadoresInicio">
          <div className="divGridFOTOTRABAJADORTrabajadoresInicio">
            <div className="divimgFotoPerfilTrabajadoresInicio">
              <Link to={`/TrabajadoresInicio/MiPerfilComoTrabajador/${this.state.numero_id_trabajador}`}>
                <button className="btn BTN300">
                  <img
                    className="imgLogoFotoPerfilTrabajadoresInicio"
                    src={characters.FotoPerfil}
                    alt="Foto-Perfil"
                  />

                  <div className="divMiPerfilTrabajadoresInicio">
                    {characters.nombre1_trabajador}{` `}{characters.nombre2_trabajador}
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="divGridPrincipalTrabajadoresInicio">
              <div className="divimgPrincipalTrabajadoresInicio">
                <img
                  className="imgLogoPrincipalTrabajadoresInicio"
                  src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
                  alt=""
                />
              </div>
            </div>

            <div className="divBotonesTrabajadoresInicio">
              <Link
                className="btn ButonTrabajadoresInicio"
                to="/TrabajadoresInicio/TrabajosPorRealizar"
              >
                TRABAJOS POR REALIZAR
              </Link>
              <Link
                className="btn ButonTrabajadoresInicio"
                to="/TrabajadoresInicio/TrabajosRealizados"
              >
                TRABAJOS REALIZADOS
              </Link>
              <Link
                to="/TrabajadoresInicio/MiAgendaTrabajador"
                className="btn ButonTrabajadoresInicio"
              >
                AGENDA
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrabajadoresInicio;
