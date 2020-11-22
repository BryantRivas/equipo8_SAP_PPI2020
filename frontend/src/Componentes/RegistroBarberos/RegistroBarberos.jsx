import React from "react";
import { Component } from "react";
import "./StylesRegistroBarberos.css";

import { Link, Redirect, withRouter } from "react-router-dom";

class RegistroBarberos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
      form: {
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        Correo: "",
        ConfirmarCorreo: "",
        Contrasena: "",
        ConfirmarContrasena: "",
        TelefonoCelular: "",
        DireccionResidencial: "",
        Documento: "",
        Pais: "",
        Ciudad: "",
        tipoTrabajador: "",
        Precio: "",
        Descripcion: ""
      },
    };
  }

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      primerNombre: this.state.form.primerNombre,
      segundoNombre: this.state.form.segundoNombre,
      primerApellido: this.state.form.primerApellido,
      segundoApellido: this.state.form.segundoApellido,
      Correo: this.state.form.Correo,
      ConfirmarCorreo: this.state.form.ConfirmarCorreo,
      Contrasena: this.state.form.Contrasena,
      ConfirmarContrasena: this.state.form.ConfirmarContrasena,
      TelefonoCelular: this.state.form.TelefonoCelular,
      DireccionResidencial: this.state.form.DireccionResidencial,
      Documento: this.state.form.Documento,
      Pais: this.state.form.Pais,
      Ciudad: this.state.form.Ciudad,
      tipoTrabajador: this.state.form.tipoTrabajador,
      Precio: this.state.form.Precio,
      Descripcion: this.state.form.Descripcion
    };
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

  render() {
    const datosForm = this.state.form;
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
                        name="primerNombre"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.primerNombre}
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
                        name="segundoNombre"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.segundoNombre}
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
                        name="primerApellido"
                        onChange={this.handleChange}
                        value={datosForm.primerApellido}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Segundo Apellido</p>
                      <input
                        className="form-control borderBox"
                        placeholder="Segundo Apellido"
                        type="text"
                        name="segundoApellido"
                        id="SEGUNDOAPELLIDO"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.segundoApellido}
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
                        name="Correo"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Correo}
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
                        name="Contrasena"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Contrasena}
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
                        name="TelefonoCelular"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.TelefonoCelular}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Dirección Residencial</p>
                      <input
                        placeholder="Dirección Residencial"
                        className="form-control borderBox"
                        type="text"
                        id="DIRECCIONRESIDENCIALTRABAJADOR"
                        name="DireccionResidencial"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.DireccionResidencial}
                      />
                    </div>
                    <div className="divBoxes">
                      <p className="pCampoText">Documento de I.D.</p>
                      <input
                        placeholder="Identificación"
                        className="form-control borderBox"
                        type="number"
                        id="DOCUMENTOTRABAJADOR"
                        name="Documento"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Documento}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">País</p>
                      <input
                        placeholder="País"
                        className="form-control borderBox"
                        type="text"
                        name="Pais"
                        id="PAISTRABAJADOR"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Pais}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Nombre Ciudad</p>
                      <input
                        placeholder="Nombre Ciudad"
                        className="form-control borderBox"
                        type="text"
                        id="CIUDADTRABAJADOR"
                        name="Ciudad"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Ciudad}
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
                        name="tipoTrabajador"
                        onChange={this.handleChange}
                        value={datosForm.tipoTrabajador}
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
                        class="btn btnimgUploader"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                      >
                        Subir Fotografia
                      </button>
                      {/* MODAL SUBIR FOTO*/}
                      <div
                        class="modal fade"
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
                            <div className="modal-body">En esta parte ira</div>
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
                        name="Precio"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Precio}
                      />
                    </div>

                    <div className="divBoxes">
                      <p className="pCampoText">Descripción</p>
                      <textarea
                        placeholder="Escribe tu descripción como trabajador"
                        className="form-control borderBox"
                        type="text"
                        id="DESCRIPCIONTRABAJADOR"
                        name="Descripcion"
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={datosForm.Descripcion}
                      />
                    </div>
                  </div>
                </form>
                <div className="DivButon">
                  {/*<Link to=""></Link>*/}
                  <button
                    type="submit"
                    className="btn Buton"
                    onClick={this.validacionForm}
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

export default withRouter(RegistroBarberos);
