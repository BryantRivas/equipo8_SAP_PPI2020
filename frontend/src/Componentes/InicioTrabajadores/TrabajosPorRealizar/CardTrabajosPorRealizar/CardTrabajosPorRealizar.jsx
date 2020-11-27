import React, { Component } from "react";
import "./StylesCardTrabajosPorRealizar.css";
import axios from "axios";

import { Link } from "react-router-dom";

class CardTrabajosPorRealizar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo_cliente: this.props.numero_id,
      datos: []
    };
  }
  
  componentDidMount(){
    // https://barppi.herokuapp.com/api/cliente/cliente/cards/trabajosPorRealizar/${this.state.codigo_cliente}
    // http://localhost:4020/api/cliente/cliente/cards/trabajosPorRealizar/${this.state.codigo_cliente}
    axios.get(`http://localhost:4020/api/cliente/cliente/cards/trabajosPorRealizar/${this.state.codigo_cliente}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data[0]
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  render() {
    console.log(this.state.datos)
    const characters = this.state.datos;
    return (
      <div>
        <header>
          <nav className="menu-fixed-cards-trabajos-por-realizar">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/TrabajadoresInicio/TrabajosPorRealizar`}>
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

        <div className="cards-fixed-trabajos-por-realizar">
          <div className="div-top-CardTrabajosPorRealizar">
            <div className="div-img-perfil_trabajador-CardTrabajosPorRealizar">
              <div className="div-div-img-perfil_trabajador-CardTrabajosPorRealizar">
                <img
                  className="img-perfil_trabajador-CardTrabajosPorRealizar"
                  src={characters.FotoPerfil}
                  alt="FotoPerfil"
                />
              </div>
            </div>
            <div className="div-nombreTrabajador-CardTrabajosPorRealizar">
              <div className="div-nombreCompletoDelTrabajador-CardTrabajosPorRealizar">
                {characters.nombre1_Cliente}{` `}{characters.nombre2_Cliente}{` `}{characters.apellido1_Cliente}{` `}{characters.apellido2_Cliente}
              </div>
            </div>
            <div className="div-nombreCiudadTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-nombreCiudadTrabajador-CardTrabajosPorRealizar">
                Ciudad
              </div>
            </div>
            <div className="div-tipoTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-tipoTrabajador-CardTrabajosPorRealizar">
                BARBERO
              </div>
            </div>
            <div className="div-contoTrabajoTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-contoTrabajoTrabajador-CardTrabajosPorRealizar">
                $12.0000
              </div>
            </div>
          </div>

          <div className="div-bot-CardTrabajosPorRealizar">
            <div className="div-direccionTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-TitulodireccionTrabajador-CardTrabajosPorRealizar">
                Dirección
              </div>
              <div className="div-div-TextodireccionTrabajador-CardTrabajosPorRealizar">
                {characters.direccion_cliente}
              </div>
            </div>
            <div className="div-CorreoElectronicoTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-TituloCorreoElectronicoTrabajador-CardTrabajosPorRealizar">
                Correo Electronico
              </div>
              <div className="div-div-TextoCorreoElectronicoTrabajador-CardTrabajosPorRealizar">
                {characters.correo_electronico_cliente}
              </div>
            </div>
            <div className="div-numeroTelefonicoTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-TitulonumeroTelefonicoTrabajador-CardTrabajosPorRealizar">
                Número Télefonico
              </div>
              <div className="div-div-TextonumeroTelefonicoTrabajador-CardTrabajosPorRealizar">
                {characters.telefono_cliente}
              </div>
            </div>
          </div>

          <div className="div-boton-bot-SOLICITAR-PerfilTrabajadorUsuario">
            <div className="div-div-boton-bot-SOLICITAR-PerfilTrabajadorUsuario">
              <Link
                className="btn boton-Solicitar-PerfilTrabajadorUsuario"
                to="/TrabajadoresInicio/MiAgendaTrabajador"
              >
                CALENDARIO
              </Link>
            </div>
            <div className="div-div-boton-bot-SOLICITAR-PerfilTrabajadorUsuario">
              <Link
                className="btn boton-Solicitar-PerfilTrabajadorUsuario"
                to=""
              >
                FINALIZADO
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTrabajosPorRealizar;
