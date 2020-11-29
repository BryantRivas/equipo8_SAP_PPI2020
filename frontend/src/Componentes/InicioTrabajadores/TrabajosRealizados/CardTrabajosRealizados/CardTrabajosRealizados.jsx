import React, { Component } from "react";
import "./StylesCardTrabajosRealizados.css";
import axios from "axios";

import { Link } from "react-router-dom";

class CardTrabajosPorRealizar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      codigo_cliente: this.props.codigo_cliente,
      datos: [],
      datosT: []
    };
  }
  
  componentDidMount(){
    // https://barppi.herokuapp.com/api/cliente/cliente/cards/trabajadorRealizados/${this.state.codigo_cliente}
    // http://localhost:4020/api/cliente/cliente/cards/trabajadorRealizados/${this.state.codigo_cliente}
    axios.get(`https://barppi.herokuapp.com/api/cliente/cliente/cards/trabajadorRealizados/${this.state.codigo_cliente}`)
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
    axios.get(`https://barppi.herokuapp.com/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datosT: res.data[0]
        })
    }).catch(err=>{
      console.log(err.massage)
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
          <nav className="menu-fixed-cards-trabajosRealizados">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/TrabajadoresInicio/TrabajosRealizados/${this.state.numero_id_trabajador}`}>
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

        <div className="cards-fixed-trabajosRealizados">
          <div className="div-top-CardTrabajosRealizados">
            <div className="div-img-perfil_trabajador-CardTrabajosRealizados">
              <div className="div-div-img-perfil_trabajador-CardTrabajosRealizados">
                <img
                  className="img-perfil_trabajador-CardTrabajosRealizados"
                  src={characters.FotoPerfil}
                  alt="FotoPerfil"
                />
              </div>
            </div>
            <div className="div-nombreTrabajador-CardTrabajosRealizados">
              <div className="div-nombreCompletoDelTrabajador-CardTrabajosRealizados">
                {characters.nombre1_Cliente}{` `}{characters.nombre2_Cliente}{` `}{characters.apellido1_Cliente}{` `}{characters.apellido2_Cliente}
              </div>
            </div>
            <div className="div-tipoTrabajador-CardTrabajosRealizados">
              <div className="div-div-tipoTrabajador-CardTrabajosRealizados">
                BARBERO
              </div>
            </div>
            <div className="div-contoTrabajoTrabajador-CardTrabajosRealizados">
              <div className="div-div-contoTrabajoTrabajador-CardTrabajosRealizados">
                ${datosTrabajador.precio_trabajador},00
              </div>
            </div>
          </div>

          <div className="div-bot-CardTrabajosRealizados">
            <div className="div-direccionTrabajador-CardTrabajosRealizados">
              <div className="div-div-TitulodireccionTrabajador-CardTrabajosRealizados">
                Dirección
              </div>
              <div className="div-div-TextodireccionTrabajador-CardTrabajosRealizados">
                {characters.direccion_cliente}
              </div>
            </div>
            <div className="div-CorreoElectronicoTrabajador-CardTrabajosRealizados">
              <div className="div-div-TituloCorreoElectronicoTrabajador-CardTrabajosRealizados">
                Correo Electronico
              </div>
              <div className="div-div-TextoCorreoElectronicoTrabajador-CardTrabajosRealizados">
                {characters.correo_electronico_cliente}
              </div>
            </div>
            <div className="div-numeroTelefonicoTrabajador-CardTrabajosRealizados">
              <div className="div-div-TitulonumeroTelefonicoTrabajador-CardTrabajosRealizados">
                Número Télefonico
              </div>
              <div className="div-div-TextonumeroTelefonicoTrabajador-CardTrabajosRealizados">
                {characters.telefono_cliente}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CardTrabajosPorRealizar;
