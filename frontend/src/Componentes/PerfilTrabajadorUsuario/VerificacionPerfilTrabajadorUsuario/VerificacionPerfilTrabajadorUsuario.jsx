import React, { Component } from "react";
import "./StylesVerificacionPerfilTrabajadorUsuario.css";
import axios from "axios";

import { Link } from "react-router-dom";



class VerificacionPerfilTrabajadorUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id,
      datos: [],
      formU:{
        usuarioDireccion:'',
        usuarioTelefono: ''
      }
    };
  }
  
  
  handleChange = async (e) => {
    e.persist();
    await this.setState({
      formU: {
        ...this.state.formU,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.formU);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userU = {
      usuarioDireccion: this.state.usuarioDireccion,
      usuarioTelefono: this.state.usuarioTelefono,
    };
    console.log(userU);
  };


  async componentDidMount(){
    // https://barppi.herokuapp.com/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}
    // http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}

    // ESTE LINK DA ERROR
    //http://localhost:4020/api/trabajador/cardperfiltrabajador/verificacionPerfil/
    // ESTE NO DA ERROR
    //http://localhost:4020/api/trabajador/cardperfiltrabajador/
    await axios.get(`http://localhost:4020/api/trabajador/cardperfiltrabajador/${this.state.numero_id_trabajador}`)
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
    console.log(this.state.numero_id_trabajador)
    const characters = this.state.datos
    const datosFormU = this.state.formU;
    return (
      <div>
        <header>
          <div className="menu-fixed-verificacionPerfil-Trabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/PerfilTrabajadorUsuario1/${this.state.numero_id_trabajador}`}>
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
                    alt="Facebook"
                  />
                  INICIAR CON FACEBOOK
                </button>
              </div>

              <div className="div-div-boton-IniciarGoogle">
                <button className="btn botonGooglePerfilTrabajadorUsuario2">
                  <img
                    className="img-boton-iconGoogle-IniciarSesionUsuario"
                    src="https://1.bp.blogspot.com/-Icc_DFXm9DQ/X2E83GL1-LI/AAAAAAAAHsQ/T038TKJC5WsKvnjihxUnZIAPtGxSIJ71gCLcBGAsYHQ/s733/Google.png"
                    alt="Google"
                  />
                  INICIAR CON GOOGLE
                </button>
              </div>
            </div>
          </div>

          <form className="form-datosUsuario-VerificacionTrabajador" onSubmit={this.handleSubmit}>
            <div className="div-MiDireccion-Form-VerificacionPerfilTrabajador">
              <div className="div-textoSuperior-VerificacionTrabajador">
                Mi Dirección
              </div>
              <div>
                <input
                  className="input-borderbox-PerfilTrabajadorUsuario2"
                  type="text"
                  id="DIRECCION"
                  name="usuarioDireccion"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={datosFormU.usuarioDireccion}
                />
              </div>
            </div>
            <div className="div-MiTelefono-Form-VerificacionPerfilTrabajador">
              <div className="div-textoSuperior-VerificacionTrabajador">
                Mi Teléfono
              </div>
              <div>
                <input
                  className="input-borderbox-PerfilTrabajadorUsuario2"
                  type="number"
                  id="TELEFONO"
                  name="usuarioTelefono"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={datosFormU.usuarioTelefono}
                />
              </div>
            </div>
          </form>

          <div className="div-texto-precioTrabajo">
            <div className="div-div-texto-precioTrabajo">
              ${characters.precio_trabajador},00
              </div>
          </div>

          <div className="div-informacionTrabajador">
            <div className="div-grid-InformacionTrabajador-VerificarInformacion">
              <div className="div-div-grid-fotoDePerfil-VerificacionInformacion">
                <img
                  className="img-fotoperfilTrabajador-VerificacionPerfil"
                  src={characters.FotoPerfil}
                  alt="FotoPerfil"
                />
              </div>
              <div className="div-div-grid-NombreTrabajador-VerificacionInformacion">
                {characters.nombre1_trabajador}{` `}{characters.nombre2_trabajador}{` `}{characters.apellido1_trabajador}{` `}{characters.apellido2_trabajador}
              </div>
              <div className="div-div-grid-numeroTelefonoTrabajador-VerificacionInformacion">
                Telefono:{characters.telefono_trabajador}
              </div>
              <div className="div-div-grid-direccionTrabajador-VerificacionInformacion">
                Dirección:{characters.direccion_trabajador}
              </div>
              <div className="div-div-grid-correoTrabajador-VerificacionInformacion">
                Correo:{characters.correo_electronico_trabajador}
              </div>
            </div>
            <div className="div-descripcionTrabajador-VerificacionInformacion">
              {characters.descripcion_trabajador}
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default VerificacionPerfilTrabajadorUsuario;
