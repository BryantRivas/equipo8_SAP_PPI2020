import React, { Component } from "react";
import "./StylesinfoTrabajadorUsuario.css";
import axios from "axios";

import { Link } from "react-router-dom";

class InfoTrabajadorUsuarioC extends Component {
  constructor(props) {
    super(props);
    this.state = {
        numero_id_trabajador: this.props.numero_id_trabajador,
        datos: [],
    };
  }

  componentDidMount(){
    // https://barppi.herokuapp.com/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    // http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    axios.get(`https://barppi.herokuapp.com/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data[0]
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  render(){
    console.log(this.state.datos)
    const characters = this.state.datos;
    return (
      <div>
        <header>
          <nav className="menu-fixed-ingresarTrabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/PerfilTrabajadorUsuario2/inicioUsuarios/${this.state.numero_id_trabajador}`}>
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
        <main>
        <div className="informacion-fixed-perfilTrabajador-usuario1">
          <div className="div-top-PerfilTrabajadorUsuario1">
            <div className="div-img-perfil_trabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-img-perfil_trabajador-PerfilTrabajadorUsuario1">
                <img
                  className="img-perfil_trabajador-PerfilTrabajadorUsuario1"
                  src={characters.FotoPerfil}
                  alt="FotoPerfil"
                />
              </div>
            </div>
            <div className="div-nombreTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-nombreCompletoDelTrabajador-PerfilTrabajadorUsuarios1">
                <div className="centrar-nombres-trabajador">
                {characters.nombre1_trabajador}{` `}{characters.nombre2_trabajador}{` `}{characters.apellido1_trabajador}{` `}{characters.apellido2_trabajador}
                </div>
              </div>
            </div>
            <div className="div-nombreCiudadTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-nombreCiudadTrabajador-PerfilTrabajadorUsuario1">
              {characters.ciudad_trabajador}
              </div>
            </div>
            <div className="div-tipoTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-tipoTrabajador-PerfilTrabajadorUsuario1">
                {characters.tipo_trabajador}
              </div>
            </div>
            <div className="div-contoTrabajoTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-contoTrabajoTrabajador-PerfilTrabajadorUsuario1">
              ${characters.precio_trabajador},00
              </div>
            </div>
          </div>

          <div className="div-bot-PerfilTrabajadorUsuario1">
            <div className="div-DescripciondelTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-TituloDescripcion-PerfilTrabajadorUsuario1">
                DESCRIPCION
              </div>
              <div className="div-div-TextoDescripcion-PerfilTrabajadorUsuario1">
                {characters.descripcion_trabajador}
              </div>
            </div>
            <div className="div-direccionTrabajador-PerfilTrabajadorUsuario">
              <div className="div-div-TitulodireccionTrabajador-PerfilTrabajadorUsuario1">
                Dirección
              </div>
              <div className="div-div-TextodireccionTrabajador-PerfilTrabajadorUsuario1">
              {characters.direccion_trabajador}
              </div>
            </div>
            <div className="div-CorreoElectronicoTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-TituloCorreoElectronicoTrabajador-PerfilTrabajadorUsuario1">
                Correo Electronico
              </div>
              <div className="div-div-TextoCorreoElectronicoTrabajador-PerfilTrabajadorUsuario1">
              {characters.correo_electronico_trabajador}
              </div>
            </div>
            <div className="div-numeroTelefonicoTrabajador-PerfilTrabajadorUsuario1">
              <div className="div-div-TitulonumeroTelefonicoTrabajador-PerfilTrabajadorUsuario1">
                Número Télefonico
              </div>
              <div className="div-div-TextonumeroTelefonicoTrabajador-PerfilTrabajadorUsuario1">
                {characters.telefono_trabajador}
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
    );
  }
  
};

export default InfoTrabajadorUsuarioC;
