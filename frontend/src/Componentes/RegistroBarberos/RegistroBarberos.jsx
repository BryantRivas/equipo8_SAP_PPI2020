import React from "react";
import { Component } from "react";
import "./StylesRegistroBarberos.css";
import axios from "axios";

import { Link, Redirect, withRouter } from "react-router-dom";

let aja2 = "";

class RegistroBarberos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
      form: {
        nombre1_trabajador: "",
        nombre2_trabajador: "",
        apellido1_trabajador: "",
        apellido2_trabajador: "",
        correo_electronico_trabajador: "",
        /*1*/ConfirmarCorreo: "",
        contrasena_trabajador: "",
        /*2*/ConfirmarContrasena: "",
        telefono_trabajador: "",
        direccion_trabajador: "",
        documento_Trabajador: "",
        pais_trabajador: "",
        ciudad_trabajador: "",
        tipo_trabajador: "",
        precio_trabajador: "",
        descripcion_trabajador: "",
        FotoPerfil: aja2
      },
    };
  }

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        FotoPerfil: aja2
      },
    });
    console.log(this.state.form);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      nombre1_trabajador: this.state.form.nombre1_trabajador,
      nombre2_trabajador: this.state.form.nombre2_trabajador,
      apellido1_trabajador: this.state.form.apellido1_trabajador,
      apellido2_trabajador: this.state.form.apellido2_trabajador,
      correo_electronico_trabajador: this.state.form.correo_electronico_trabajador,
      ConfirmarCorreo: this.state.form.ConfirmarCorreo,
      contrasena_trabajador: this.state.form.contrasena_trabajador,
      ConfirmarContrasena: this.state.form.ConfirmarContrasena,
      telefono_trabajador: this.state.form.telefono_trabajador,
      direccion_trabajador: this.state.form.direccion_trabajador,
      documento_Trabajador: this.state.form.documento_Trabajador,
      pais_trabajador: this.state.form.pais_trabajador,
      ciudad_trabajador: this.state.form.ciudad_trabajador,
      tipo_trabajador: this.state.form.tipo_trabajador,
      precio_trabajador: this.state.form.precio_trabajador,
      descripcion_trabajador: this.state.form.descripcion_trabajador,
      FotoPerfil: aja2
    };
    this.setState({
      form:user
    })
    console.log(user);
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
        if(pNombre.value != "" &&
        sNombre.value != "" &&
        pApellido.value != "" &&
        sApellido.value != "" &&
        correoTrabajador.value != "" &&
        confirmarCorreoTrabajador.value != "" &&
        contrasenaTrabajador.value != "" &&
        confirmarContrasenaTrabajador.value != "" &&
        telefonoCelularTrabajador.value != "" &&
        direccionResidencialTrabajador.value != "" &&
        documentoTrabajador.value != "" &&
        paisTrabajador.value != "" &&
        ciudadTrabajador.value != "" &&
        tipoTrabajador.value != "" &&
        precioTrabajo.value != "" &&
        descripcionTrabajador.value != ""){
          this.state.boolean = true;
          this.peticionPost();
        }

        //this.state.boolean = true;
        //console.log(this.state.boolean);
      
    }
  };

  time = (input) => {
    setTimeout(function () {
      input.style.borderColor = "gray";
      input.value = "";
    }, 2500);
  };

  Subir = () => {
    let inpu = document.getElementById("FOTOPERFIL");
    if (inpu.files && inpu.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("fotoPrev").src = e.target.result;
            aja2 = e.target.result;
        }
        reader.readAsDataURL(inpu.files[0]);
    }
}

  Subir2 = () => {
  let inpu = document.getElementById("FOTOPERFIL");
  if (inpu.files && inpu.files[0]) {
    this.state.form.FotoPerfil = aja2;
    // this.setState({form:{
      // FotoPerfil: aja2,
    // }})
      // await this.putAvatar();
      // UsuarioI[0].avatar = aja2;
      // document.getElementById("FotoPerfíl").style.backgroundImage = "url(" + UsuarioI[0].avatar + ")";
  }
}
// https://barppi.herokuapp.com/api/nuevo-trabajador/registro
// http://localhost:4020/api/nuevo-trabajador/registro
peticionPost=async () =>{
  delete this.state.form.ConfirmarContrasena
  delete this.state.form.ConfirmarCorreo
   await axios.post('http://localhost:4020/api/nuevo-trabajador/registro', this.state.form)
   .then(response =>{
     console.log("Se ha creado un nuevo trabajador");
   }).catch(error=>{
    console.log(error.message);
  })
   
 }

  render() {
    const datosForm = this.state.form;
    console.log(this.state.form.FotoPerfil);
    return (
      <div>
        <header>
          <nav className="menu-fixed-registroBarberos">
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
                        id="PRIMERNOMBRE"
                        name="nombre1_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.nombre1_trabajador}
                      />
                      <div>{this.state.advertencia}</div>
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Segundo Nombre</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Segundo Nombre"
                        type="text"
                        id="SEGUNDONOMBRE"
                        name="nombre2_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.nombre2_trabajador}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Primer Apellido</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Primer Apellido"
                        type="text"
                        id="PRIMERAPELLIDO"
                        autoComplete="off"
                        name="apellido1_trabajador"
                        onChange={this.handleChange}
                        value={datosForm.apellido1_trabajador}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Segundo Apellido</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Segundo Apellido"
                        type="text"
                        name="apellido2_trabajador"
                        id="SEGUNDOAPELLIDO"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.apellido2_trabajador}
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
                        id="CORREOTRABAJADOR"
                        name="correo_electronico_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.correo_electronico_trabajador}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Confirmar Correo</p>
                      <input
                        placeholder="Confirmar Correo"
                        className="form-control borderBox"
                        type="email"
                        id="CONFIRMARCORREOTRABAJADOR"
                        name="ConfirmarCorreo"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.ConfirmarCorreo}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Contraseña</p>
                      <input
                        placeholder="Contraseña"
                        className="form-control borderBox"
                        type="password"
                        id="CONTRASENATRABAJADOR"
                        name="contrasena_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.contrasena_trabajador}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Confirmar Contraseña</p>
                      <input
                        placeholder="Confirmar Contraseña"
                        className="form-control borderBox"
                        type="password"
                        id="CONFIRMARCONTRASENATRABAJADOR"
                        name="ConfirmarContrasena"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.ConfirmarContrasena}
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
                        id="TELEFONOCELULARTRABAJADOR"
                        name="telefono_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.telefono_trabajador}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Dirección Residencial</p>
                      <input
                        placeholder="Dirección Residencial"
                        className="form-control borderBox"
                        type="text"
                        id="DIRECCIONRESIDENCIALTRABAJADOR"
                        name="direccion_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.direccion_trabajador}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Documento de I.D.</p>
                      <input
                        placeholder="Identificación"
                        className="form-control borderBox"
                        type="number"
                        id="DOCUMENTOTRABAJADOR"
                        name="documento_Trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.documento_Trabajador}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">País</p>
                      <input
                        placeholder="País"
                        className="form-control borderBox"
                        type="text"
                        name="pais_trabajador"
                        id="PAISTRABAJADOR"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.pais_trabajador}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Nombre Ciudad</p>
                      <input
                        placeholder="Nombre Ciudad"
                        className="form-control borderBox"
                        type="text"
                        id="CIUDADTRABAJADOR"
                        name="ciudad_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.ciudad_trabajador}
                      />
                    </div>
                  </div>
                  {/* REGISTROBARBEROS/REGISTROBARBEROS3 */}
                  <h4 className="h1Header1">Eres...</h4>
                  <div className="col FormMain1C">
                    <div className="divBoxes">
                      <p className="pCampoText">Eres...</p>

                      <select
                        class="form-control borderBox"
                        type="text"
                        id="TIPOTRABAJADOR"
                        name="tipo_trabajador"
                        onChange={this.handleChange}
                        value={datosForm.tipo_trabajador}
                      >
                        <option selected>Eres...</option>
                        <option>Barbero</option>
                        <option>Peluquero</option>
                      </select>
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Foto</p>
                      <button
                        type="button"
                        className="btn btnimgUploader"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                      >
                        Subir Fotografia
                      </button>
                      {/* MODAL SUBIR FOTO*/}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-backdrop="static"
                        data-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">
                                Elige tu foto de perfil
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                            <form id="formProta" encType="multipart/form-data">
                                <input className="input-subir-img" id="FOTOPERFIL" accept="image/*" onChange={this.Subir} type="file" />
                            </form>
                            <div className="foto-perfil-subida-img-trabajador">
                            <img className="foto-perfil-img-trabajador" id="fotoPrev" src="https://us.123rf.com/450wm/naropano/naropano1606/naropano160600550/58727711-fondo-gris-oscuro-el-dise%C3%B1o-de-textura-fondo-del-grunge-.jpg?ver=6" alt="FOTOPERFIL"/>
                            </div>
                            <div className="div-subir-img-foto-perfil-trabajador">
                            <button className="Buton" onClick={this.Subir2}>
                              SUBIR
                            </button>
                            </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btnimgUploader"
                                data-dismiss="modal"
                              >
                                Oky
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* FIN MODAL */}
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Precio</p>
                      <input
                        placeholder="Precio"
                        className="form-control borderBox"
                        type="number"
                        id="PRECIOTRABAJO"
                        name="precio_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.precio_trabajador}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Descripción</p>
                      <textarea
                        placeholder="Escribe tu descripción como trabajador"
                        className="form-control borderBox"
                        type="text"
                        id="DESCRIPCIONTRABAJADOR"
                        name="descripcion_trabajador"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.descripcion_trabajador}
                      />
                    </div>
                  </div>
                </form>
                <div className="DivButon">
                  <button
                    type="submit"
                    className="btn Buton"
                    onClick={this.validacionForm}
                  >
                    FINALIZAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean && (
          <Redirect to={{ pathname: "/IngresarTrabajador" }} />
        )}
      </div>
    );
  }
}

export default withRouter(RegistroBarberos);
