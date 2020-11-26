import React from "react";
import { Component } from "react";
import "./StylesRegistroUsuario.css";
import axios from "axios";

import { Link, Redirect, withRouter } from "react-router-dom";



class RegistroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      boolean: false,
      formU: {
        correo_electronico_cliente: '',
        /*1*/ConfirmarCorreo: '',
        direccion_cliente: '',
        telefono_cliente: '',
        contrasena_Cliente: '',
        /*2*/ConfirmarContrasena: '',
        apellido1_Cliente: '',
        apellido2_Cliente: '',
        nombre2_Cliente: '',
        nombre1_Cliente: '',
        documento_Cliente: ''
      },
    };
  }

  handleChangeU = async (e) => {
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
      correo_electronico_cliente: this.state.formU.correo_electronico_cliente,
      ConfirmarCorreo: this.state.formU.ConfirmarContrasena,
      direccion_cliente: this.state.formU.direccion_cliente,
      telefono_cliente: this.state.formU.telefono_cliente,
      contrasena_Cliente: this.state.formU.contrasena_Cliente,
      ConfirmarContrasena: this.state.formU.ConfirmarContrasena,
      apellido1_Cliente: this.state.formU.apellido1_Cliente,
      apellido2_Cliente: this.state.formU.apellido2_Cliente,
      nombre2_Cliente: this.state.formU.nombre2_Cliente,
      nombre1_Cliente: this.state.formU.nombre1_Cliente,
      documento_Cliente: this.state.formU.documento_Cliente
    };
    console.log(userU);
  };

  validacionForm = () => {
    let pNombre = document.getElementById("PRIMERNOMBRE");
    let sNombre = document.getElementById("SEGUNDONOMBRE");
    let pApellido = document.getElementById("PRIMERAPELLIDO");
    let sApellido = document.getElementById("SEGUNDOAPELLIDO");
    let correoTrabajador = document.getElementById("CORREOTRABAJADOR");
    let confirmarCorreoTrabajador = document.getElementById("CONFIRMARCORREOTRABAJADOR");
    let contrasenaTrabajador = document.getElementById("CONTRASENATRABAJADOR");
    let confirmarContrasenaTrabajador = document.getElementById("CONFIRMARCONTRASENATRABAJADOR");
    let telefonoCelularTrabajador = document.getElementById("TELEFONOCELULARTRABAJADOR");
    let direccionResidencialTrabajador = document.getElementById("DIRECCIONRESIDENCIALTRABAJADOR");
    let documentoTrabajador = document.getElementById("DOCUMENTOTRABAJADOR");
    let paisTrabajador = document.getElementById("PAISTRABAJADOR");
    let ciudadTrabajador = document.getElementById("CIUDADTRABAJADOR");
    let tipoTrabajador = document.getElementById("TIPOTRABAJADOR");
    let precioTrabajo = document.getElementById("PRECIOTRABAJO");
    let descripcionTrabajador = document.getElementById("DESCRIPCIONTRABAJADOR");

    if (
      pNombre.value == "" ||
      sNombre.value == "" ||
      pApellido.value == "" ||
      sApellido.value == "" ||
      correoTrabajador.value == "" ||
      confirmarCorreoTrabajador.value == "" ||
      contrasenaTrabajador.value == "" ||
      confirmarContrasenaTrabajador.value == "" ||
      telefonoCelularTrabajador.value == "" ||
      direccionResidencialTrabajador.value == "" ||
      documentoTrabajador.value == "" ||
      paisTrabajador.value == "" ||
      ciudadTrabajador.value == "" ||
      tipoTrabajador.value == "" ||
      precioTrabajo.value == "" ||
      descripcionTrabajador.value == ""
    ) {
      console.log("El primer nombre esta vacido");
      if (pNombre.value == "") {
        pNombre.style.borderColor = "red";
        pNombre.value = "Parametro obligatorio";
        this.time(pNombre);
      }

      if (pApellido.value == "") {
        pApellido.style.borderColor = "red";
        pApellido.value = "Parametro obligatorio";
        this.time(pApellido);
      }

      if (correoTrabajador.value == "") {
        correoTrabajador.style.borderColor = "red";
        correoTrabajador.value = "Parametro obligatorio";
        this.time(correoTrabajador);
      }

      if (confirmarCorreoTrabajador.value == "") {
        confirmarCorreoTrabajador.style.borderColor = "red";
        confirmarCorreoTrabajador.value = "Parametro obligatorio";
        this.time(confirmarCorreoTrabajador);
      }

      if (contrasenaTrabajador.value == "") {
        contrasenaTrabajador.style.borderColor = "red";
        contrasenaTrabajador.value = "Parametro obligatorio";
        this.time(contrasenaTrabajador);
      }

      if (confirmarContrasenaTrabajador.value == "") {
        confirmarContrasenaTrabajador.style.borderColor = "red";
        confirmarContrasenaTrabajador.value = "Parametro obligatorio";
        this.time(confirmarContrasenaTrabajador);
      }

      if (telefonoCelularTrabajador.value == "") {
        telefonoCelularTrabajador.style.borderColor = "red";
        telefonoCelularTrabajador.value = "Parametro obligatorio";
        this.time(telefonoCelularTrabajador);
      }

      if (direccionResidencialTrabajador.value == "") {
        direccionResidencialTrabajador.style.borderColor = "red";
        direccionResidencialTrabajador.value = "Parametro obligatorio";
        this.time(direccionResidencialTrabajador);
      }

      if (documentoTrabajador.value == "") {
        documentoTrabajador.style.borderColor = "red";
        documentoTrabajador.value = "Parametro obligatorio";
        this.time(documentoTrabajador);
      }

      if (paisTrabajador.value == "") {
        paisTrabajador.style.borderColor = "red";
        paisTrabajador.value = "Parametro obligatorio";
        this.time(paisTrabajador);
      }

      if (ciudadTrabajador.value == "") {
        ciudadTrabajador.style.borderColor = "red";
        ciudadTrabajador.value = "Parametro obligatorio";
        this.time(ciudadTrabajador);
      }

      if (tipoTrabajador.value == "") {
        tipoTrabajador.style.borderColor = "red";
        tipoTrabajador.value = "Parametro obligatorio";
        this.time(tipoTrabajador);
      }

      if (precioTrabajo.value == "") {
        precioTrabajo.style.borderColor = "red";
        precioTrabajo.value = "Parametro obligatorio";
        this.time(precioTrabajo);
      }

      if (descripcionTrabajador.value == "") {
        descripcionTrabajador.style.borderColor = "red";
        descripcionTrabajador.value = "Parametro obligatorio";
        this.time(descripcionTrabajador);
      }


    } else {
      if (
        pNombre.value != "" ||
        sNombre.value != "" ||
        pApellido.value != "" ||
        sApellido.value != "" ||
        correoTrabajador.value != "" ||
        confirmarCorreoTrabajador.value != "" ||
        contrasenaTrabajador.value != "" ||
        confirmarContrasenaTrabajador.value != "" ||
        telefonoCelularTrabajador.value != "" ||
        direccionResidencialTrabajador.value != "" ||
        documentoTrabajador.value != "" ||
        paisTrabajador.value != "" ||
        ciudadTrabajador.value != "" ||
        tipoTrabajador.value != "" ||
        precioTrabajo.value != "" ||
        descripcionTrabajador.value != ""
      ) {
        if (pNombre.value != "") {
          pNombre.style.borberColor = "green";
        }
        if (sNombre.value != "") {
          sNombre.style.borderColor = "green";
        }
        if (pApellido.value != "") {
          pApellido.style.borderColor = "green";
        }
        if (sApellido.value != "") {
          sApellido.style.borderColor = "green";
        }

        if (correoTrabajador.value != "") {
          correoTrabajador.style.borderColor = "green";
        }

        if (confirmarCorreoTrabajador.value != "") {
          confirmarCorreoTrabajador.style.borderColor = "green";
        }

        if (contrasenaTrabajador.value != "") {
          contrasenaTrabajador.style.borderColor = "green";
        }

        if (confirmarContrasenaTrabajador.value != "") {
          confirmarContrasenaTrabajador.style.borderColor = "green";
        }

        if (telefonoCelularTrabajador.value != "") {
          telefonoCelularTrabajador.style.borderColor = "green";
        }

        if (direccionResidencialTrabajador.value != "") {
          direccionResidencialTrabajador.style.borderColor = "green";
        }

        if (documentoTrabajador.value != "") {
          documentoTrabajador.style.borderColor = "green";
        }

        if (paisTrabajador.value != "") {
          paisTrabajador.style.borderColor = "green";
        }

        if (ciudadTrabajador.value != "") {
          ciudadTrabajador.style.borderColor = "green";
        }

        if (tipoTrabajador.value != "") {
          tipoTrabajador.style.borderColor = "green";
        }

        if (precioTrabajo.value != "") {
          precioTrabajo.style.borderColor = "green";
        }

        if (descripcionTrabajador.value != "") {
          descripcionTrabajador.style.borderColor = "green";
        }

        //this.state.boolean = true;
        //console.log(this.state.boolean);
      }
    }
  };

  time = (input) => {
    setTimeout(function () {
      input.style.borderColor = "gray";
      input.value = "";
    }, 1500);
  };

// https://barppi.herokuapp.com/api/cliente/nuevo-cliente/solicitud-registro
// http://localhost:4020/api/cliente/nuevo-cliente/solicitud-registro
peticionPost=async () =>{
  delete this.state.formU.ConfirmarContrasena
  delete this.state.formU.ConfirmarCorreo
   await axios.post('http://localhost:4020/api/cliente/nuevo-cliente/solicitud-registro', this.state.formU)
   .then(response =>{
     console.log("Se ha creado un nuevo cliente");
   }).catch(error=>{
    console.log(error.message);
  })
   
 }

  render() {
    const datosFormU = this.state.formU;
    return (
      <div>
        <header>
          <nav className="menu-fixed-registroBarberos">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/PerfilTrabajadorUsuario2/${this.state.numero_id_trabajador}`}>
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

        <div className="campos-fixed-registroBarberos">
          <div className="DivFatherFather">
            <h1 className="h4Header">Registrarse</h1>
            <div className="divFather">
              <div className="divBox">
                <h4 className="h1Header">Nombres y Apellidos</h4>

                <form onSubmit={this.handleSubmit}>
                  <div className="FormMain1C">
                    <div className="divBoxes">
                      <p className="pCampoText">Primer Nombre</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Primer Nombre"
                        type="text"
                        id="PRIMERNOMBREUSUARIO"
                        name="nombre1_Cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.nombre1_Cliente}
                      />
                      <div>{this.state.advertencia}</div>
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Segundo Nombre</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Segundo Nombre"
                        type="text"
                        id="SEGUNDONOMBREUSUARIO"
                        name="nombre2_Cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.nombre2_Cliente}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Primer Apellido</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Primer Apellido"
                        type="text"
                        id="PRIMERAPELLIDOUSUARIO"
                        autoComplete="off"
                        name="apellido1_Cliente"
                        onChange={this.handleChangeU}
                        value={datosFormU.apellido1_Cliente}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Segundo Apellido</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Segundo Apellido"
                        type="text"
                        name="apellido2_Cliente"
                        id="SEGUNDOAPELLIDOUSUARIO"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.apellido2_Cliente}
                      />
                    </div>
                  </div>

                  {/* REGISTROBARBEROS/REGISTROBARBEROS1 */}
                  <h4 className="h1Header1">Correo y Contraseña</h4>
                  <div className="col FormMain1C">
                    <div className="divBoxes">
                      <p className="pCampoText">Correo</p>
                      <input
                        placeholder="Correo"
                        className="form-control borderBox"
                        type="email"
                        id="CORREOELECTRONICOUSUARIO"
                        name="correo_electronico_cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.correo_electronico_cliente}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Confirmar Correo</p>
                      <input
                        placeholder="Confirmar Correo"
                        className="form-control borderBox"
                        type="email"
                        id="CONFIRMARCORREOELECTRONICOUSUARIO"
                        name="ConfirmarCorreo"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.ConfirmarCorreo}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Contraseña</p>
                      <input
                        placeholder="Contraseña"
                        className="form-control borderBox"
                        type="password"
                        id="CONTRASENAUSUARIO"
                        name="contrasena_Cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.contrasena_Cliente}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Confirmar Contraseña</p>
                      <input
                        placeholder="Confirmar Contraseña"
                        className="form-control borderBox"
                        type="password"
                        id="CONFIRMARCONTRASENAUSUARIO"
                        name="ConfirmarContrasena"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.ConfirmarContrasena}
                      />
                    </div>
                  </div>
                  {/* REGISTROBARBEROS/REGISTROBARBEROS2 */}
                  <h4 className="h1Header1">Adicionales</h4>
                  <div className="col FormMain1C">
                    <div className="divBoxes">
                      <p className="pCampoText">Teléfono Celular</p>
                      <input
                        placeholder="Teléfono Celular"
                        className="form-control borderBox"
                        type="number"
                        id="TELEFONOCELULARUSUARIO"
                        name="telefono_cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.telefono_cliente}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Dirección Residencial</p>
                      <input
                        placeholder="Dirección Residencial"
                        className="form-control borderBox"
                        type="text"
                        id="DIRECCIONRESIDENCIALUSUARIO"
                        name="direccion_cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.direccion_cliente}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Documento de I.D.</p>
                      <input
                        placeholder="Identificación"
                        className="form-control borderBox"
                        type="number"
                        id="DOCUMENTOUSUARIO"
                        name="documento_Cliente"
                        autoComplete="off"
                        onChange={this.handleChangeU}
                        value={datosFormU.documento_Cliente}
                      />
                    </div>
                  </div>
                  
                </form>
                <div className="DivButon">
                  {/*<Link to=""></Link>*/}
                  <button
                    type="submit"
                    className="btn Buton"
                    onClick={this.peticionPost}
                  >
                    SIGUIENTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean && (
          <Redirect to={{ pathname: "/RegistroBarberos/RegistroBarberos1" }} />
        )}
        {/* , state:{form:this.state.form} */}
      </div>
    );
  }
}

export default withRouter(RegistroUsuario);
