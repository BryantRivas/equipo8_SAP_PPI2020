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
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${this.state.numero_id_trabajador}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data,
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
        {/* 
        <div>
          <img
            className="img-1-TrabajadoresInicio my-custom-shake shake-constant "
            src="https://1.bp.blogspot.com/-zzLuzcxIFJs/X161jaOCfSI/AAAAAAAAHTI/qhevsGCXwP88ffCTX1RrweVY94SuUxWNwCLcBGAsYHQ/s300/1.png"
            alt=""
          />
          <img
            className="img-2-TrabajadoresInicio my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-qsFXHCGj5gU/X161jYE4TrI/AAAAAAAAHTQ/eXw9I3MLf1YPto10pw81PwIdscb8qpj1ACLcBGAsYHQ/s300/2.png"
            alt=""
          />
          <img
            className="img-3-TrabajadoresInicio my-custom-shake shake-constant "
            src="https://1.bp.blogspot.com/-FUOwwCGVj7w/X161jTjNMtI/AAAAAAAAHTM/UgZ0PrUb2zI7YWmf4yAkp6X04yBFsYffgCLcBGAsYHQ/s300/3.png"
            alt=""
          />
          <img
            className="img-4-TrabajadoresInicio my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-joJTAWMxHI4/X161jQiVLAI/AAAAAAAAHTU/XS-L8aReeKU5n63H8SGZ0hO0Yy9k2YE0wCLcBGAsYHQ/s300/4.png"
            alt=""
          />
          <img
            className="img-5-TrabajadoresInicio my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-zY-krwJfp7w/X161jm6hSUI/AAAAAAAAHTY/I2RDbIwlvmcuuQT1AxJMM9vWM9H55zOtQCLcBGAsYHQ/s300/5.png"
            alt=""
          />
          <img
            className="img-6-TrabajadoresInicio my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-nB-8khtqvAc/X161j-fFd0I/AAAAAAAAHTc/HbcD8NXO0MwEUOQPL9GmwMee8k3De0q3QCLcBGAsYHQ/s300/6.png"
            alt=""
          />
        </div>
        */}
        <div className="informacion-fixed-trabajadoresInicio">
          <div className="divGridFOTOTRABAJADORTrabajadoresInicio">
            <div className="divimgFotoPerfilTrabajadoresInicio">
              <Link to={`/TrabajadoresInicio/MiPerfilComoTrabajador/${this.state.numero_id_trabajador}`}>
                <button className="btn BTN300">
                  <img
                    className="imgLogoFotoPerfilTrabajadoresInicio"
                    src={characters.image}
                    alt="Foto-Perfil"
                  />

                  <div className="divMiPerfilTrabajadoresInicio">
                    {characters.name}
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
