import React, { Component } from "react";
import "./StylesCardTrabajosPorRealizar.css";
import axios from "axios";

import { Link } from "react-router-dom";

class CardTrabajosPorRealizar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo_cliente: this.props.codigo_cliente,
      numero_id_trabajador: this.props.numero_id_trabajador,
      codigo_cita: this.props.codigo_cita,
      datos: [],
      datosT: []
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
        this.datosTrabajador();
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  datosTrabajador(){
    // https://barppi.herokuapp.com/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    // http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    axios.get(`http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datosT: res.data[0]
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  peticionPutEstadoCita = async () => {
    // https://barppi.herokuapp.com/api/cita/cita/put/estadoCita/${this.state.codigo_cita}
    // http://localhost:4020/api/cita/cita/put/estadoCita/${this.state.codigo_cita}
    await axios.put(`http://localhost:4020/api/cita/cita/put/estadoCita/${this.state.codigo_cita}`, { estado_cita: 'Finalizada'})
    .then(response =>{
      this.componentDidMount();
      console.log('Se actualizo el estado de la cita a Finalizada')
    }).catch(error=>{
     console.log(error.message);
   })
  }

  render() {
    console.log(this.state.datos)
    console.log(this.state.datosT)
    const datosTrabajador = this.state.datosT;
    const characters = this.state.datos;
    return (
      <div>
        <header>
          <nav className="menu-fixed-cards-trabajos-por-realizar">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/TrabajadoresInicio/TrabajosPorRealizar/${this.state.numero_id_trabajador}`}>
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

            <div className="div-contoTrabajoTrabajador-CardTrabajosPorRealizar">
              <div className="div-div-contoTrabajoTrabajador-CardTrabajosPorRealizar">
                ${datosTrabajador.precio_trabajador},00
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
              <button className="btn boton-Solicitar-PerfilTrabajadorUsuario" onClick={this.peticionPutEstadoCita}>
                FINALIZADO
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTrabajosPorRealizar;
