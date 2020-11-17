import React, { Component } from "react";
import "./StylesVerificacionPerfilTrabajadorUsuario.css";
import axios from "axios";

import { Link } from "react-router-dom";

class VerificacionPerfilTrabajadorUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }
  
  componentDidMount(){
    axios.get(`https://rickandmortyapi.com/api/character/2`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  render() {
    console.log(this.state.datos)
    const characters = this.state.datos

    return (
      <div>
        <header>
          <div className="menu-fixed-verificacionPerfil-Trabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/PerfilTrabajadorUsuario1">
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
          </div>
        </header>



        <div className="informacion-fixed-verificacionPerfil-Trabajador">
          <div className="div-botones-inicioSesionUsuarios-Padre">
            <div className="div-botones-incioSesionUsuarios">
              <div className="div-div-boton-IniciarConFacebook">
                <button className="btn botonFacebookPerfilTrabajadorUsuario2">
                  <img
                    className="img-boton-iconFacebook-IniciarSesionUsuario"
                    src="https://1.bp.blogspot.com/-LMxlVmBE-Mc/X2E83PdpHcI/AAAAAAAAHsU/KhuhTSrAnvs5KQhFivdsINc8QAC7Hr00gCLcBGAsYHQ/s2048/Facebook.png"
                    alt=""
                  />
                  INICIAR CON FACEBOOK
                </button>
              </div>

              <div className="div-div-boton-IniciarGoogle">
                <button className="btn botonGooglePerfilTrabajadorUsuario2">
                  <img
                    className="img-boton-iconGoogle-IniciarSesionUsuario"
                    src="https://1.bp.blogspot.com/-Icc_DFXm9DQ/X2E83GL1-LI/AAAAAAAAHsQ/T038TKJC5WsKvnjihxUnZIAPtGxSIJ71gCLcBGAsYHQ/s733/Google.png"
                    alt=""
                  />
                  INICIAR CON GOOGLE
                </button>
              </div>
            </div>
          </div>
          <form className="form-datosUsuario-VerificacionTrabajador">
            <div className="div-MiDireccion-Form-VerificacionPerfilTrabajador">
              <div className="div-textoSuperior-VerificacionTrabajador">
                Mi Dirección
              </div>
              <div className="">
                <input
                  className="input-borderbox-PerfilTrabajadorUsuario2"
                  type="text"
                />
              </div>
            </div>
            <div className="div-MiTelefono-Form-VerificacionPerfilTrabajador">
              <div className="div-textoSuperior-VerificacionTrabajador">
                Mi Teléfono
              </div>
              <div className="">
                <input
                  className="input-borderbox-PerfilTrabajadorUsuario2"
                  type="number"
                />
              </div>
            </div>
          </form>

          <div className="div-texto-precioTrabajo">
            <div className="div-div-texto-precioTrabajo">$12.000,00</div>
          </div>

          <div className="div-informacionTrabajador">
            <div className="div-grid-InformacionTrabajador-VerificarInformacion">
              <div className="div-div-grid-fotoDePerfil-VerificacionInformacion">
                <img
                  className="img-fotoperfilTrabajador-VerificacionPerfil"
                  src={characters.image}
                  alt=""
                />
              </div>
              <div className="div-div-grid-NombreTrabajador-VerificacionInformacion">
                Jane Smith
              </div>
              <div className="div-div-grid-numeroTelefonoTrabajador-VerificacionInformacion">
                Número telefonico del trabajador
              </div>
              <div className="div-div-grid-direccionTrabajador-VerificacionInformacion">
                Dirección del Trabajador
              </div>
              <div className="div-div-grid-correoTrabajador-VerificacionInformacion">
                Correo del trabajador
              </div>
            </div>
            <div className="div-descripcionTrabajador-VerificacionInformacion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit qui dolorem sed amet est illum neque corrupti in,
              libero, minus sequi! Tempore dolor dolores omnis vel mollitia qui
              sapiente provident! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Provident, in similique facilis temporibus, non
              voluptate atque error dolorum velit deleniti odio, asperiores
              incidunt? Voluptatum et quo commodi alias aspernatur laudantium?
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default VerificacionPerfilTrabajadorUsuario;
