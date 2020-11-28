import React from "react";
import { Component } from "react";
import "./StylesRegistroUsuario.css";
import axios from "axios";

import { Link, Redirect, withRouter } from "react-router-dom";

let aja2 = "";

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
        documento_Cliente: '',
        FotoPerfil: aja2
      },
    };
  }

  handleChangeU = async (e) => {
    e.persist();
    await this.setState({
      formU: {
        ...this.state.formU,
        [e.target.name]: e.target.value,
        FotoPerfil: aja2
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
      documento_Cliente: this.state.formU.documento_Cliente,
      FotoPerfil : aja2
    };
    console.log(userU);
  };

  Subir = () => {
    let inpu = document.getElementById("FOTOPERFIL");
    if (inpu.files && inpu.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e.target.result)
            aja2 = e.target.result;
            document.getElementById("body").innerHTML = "<canvas id='tempCanvas' width='300' height='300' style='display:none'></canvas>";
                    var canvas = document.getElementById("tempCanvas");
                    var ctx = canvas.getContext("2d");
                    var cw = canvas.width;
                    var ch = canvas.height;
                    var maxW = 300;
                    var maxH = 300;
                    var img = new Image;
                    img.src = this.result;
                    img.onload = function () {
                        var iw = img.width;
                        var ih = img.height;
                        if (ih > 300 || iw > 300) {
                        var scale = Math.min((maxW / iw), (maxH / ih));
                        var iwScaled = iw * scale;
                        var ihScaled = ih * scale;
                        canvas.width = iwScaled;
                        canvas.height = ihScaled;
                        ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
                        aja2 = canvas.toDataURL("image/jpeg");
                        console.log(canvas.toDataURL("image/jpeg"));
                        document.getElementById("tempCanvas").remove();
                        }
                      }
                      document.getElementById("fotoPrev").src = aja2;
        }
        reader.readAsDataURL(inpu.files[0]);
    }
}

  Subir2 = () => {
  let inpu = document.getElementById("FOTOPERFIL");
  if (inpu.files && inpu.files[0]) {
    this.state.formU.FotoPerfil = aja2;
  }
}

  validacionForm = () => {
    let pNombre = document.getElementById("PRIMERNOMBREUSUARIO");
    let sNombre = document.getElementById("SEGUNDONOMBREUSUARIO");
    let pApellido = document.getElementById("PRIMERAPELLIDOUSUARIO");
    let sApellido = document.getElementById("SEGUNDOAPELLIDOUSUARIO");
    let correoCliente = document.getElementById("CORREOELECTRONICOUSUARIO");
    let confirmarCorreoCliente = document.getElementById("CONFIRMARCORREOELECTRONICOUSUARIO");
    let contrasenaCliente = document.getElementById("CONTRASENAUSUARIO");
    let confirmarContrasenaCliente = document.getElementById("CONFIRMARCONTRASENAUSUARIO");
    let telefonoCliente = document.getElementById("TELEFONOCELULARUSUARIO");
    let direccionCliente = document.getElementById("DIRECCIONRESIDENCIALUSUARIO");
    let documentoCliente = document.getElementById("DOCUMENTOUSUARIO");

    if(pNombre.value == "" || 
    sNombre.value == "" || 
    pApellido.value == "" || 
    sApellido.value == "" || 
    correoCliente.value == "" ||
    confirmarCorreoCliente.value == "" ||
    contrasenaCliente.value == "" ||
    confirmarContrasenaCliente.value == "" ||
    telefonoCliente.value == "" ||
    direccionCliente.value == "" ||
    documentoCliente.value == "" 
    ){
      if(pNombre.value == ""){
        pNombre.style.borderColor = "red";
        pNombre.value = "Parametro obligatorio";
        this.time(pNombre);
      }
      if(sNombre.value == ""){
        sNombre.style.borderColor = "red";
        sNombre.value = "Parametro obligatorio";
        this.time(sNombre);
      }
      if(pApellido.value == ""){
        pApellido.style.borderColor = "red";
        pApellido.value = "Parametro obligatorio";
        this.time(pApellido);
      }
      if(sApellido.value == ""){
        sApellido.style.borderColor = "red";
        sApellido.value = "Parametro obligatorio";
        this.time(sApellido);
      }
      if(correoCliente.value == ""){
        correoCliente.style.borderColor = "red";
        correoCliente.value = "Parametro obligatorio";
        this.time(correoCliente);
      }
      if(confirmarCorreoCliente.value == ""){
        confirmarCorreoCliente.style.borderColor = "red";
        confirmarCorreoCliente.value = "Parametro obligatorio";
        this.time(confirmarCorreoCliente);
      }
      if(contrasenaCliente.value == ""){
        contrasenaCliente.style.borderColor = "red";
        contrasenaCliente.value = "Parametro obligatorio";
        this.time(contrasenaCliente);
      }
      if(confirmarContrasenaCliente.value == ""){
        confirmarContrasenaCliente.style.borderColor = "red";
        confirmarContrasenaCliente.value = "Parametro obligatorio";
        this.time(confirmarContrasenaCliente);
      }
      if(telefonoCliente.value == ""){
        telefonoCliente.style.borderColor = "red";
        telefonoCliente.value = "Parametro obligatorio";
        this.time(telefonoCliente);
      }
      if(direccionCliente.value == ""){
        direccionCliente.style.borderColor = "red";
        direccionCliente.value = "Parametro obligatorio";
        this.time(direccionCliente);
      }
      if(documentoCliente.value == ""){
        documentoCliente.style.borderColor = "red";
        documentoCliente.value = "Parametro obligatorio";
        this.time(documentoCliente);
      }
    }else{
      if(pNombre.value != ""){
        pNombre.style.borberColor = "green";
      }
      if(sNombre.value != ""){
        sNombre.style.borberColor = "green";
      }
      if(pApellido.value != ""){
        pApellido.style.borberColor = "green";
      }
      if(sApellido.value != ""){
        sApellido.style.borberColor = "green";
      }
      if(correoCliente.value != ""){
        correoCliente.style.borberColor = "green";
      }
      if(confirmarCorreoCliente.value != ""){
        confirmarCorreoCliente.style.borberColor = "green";
      }
      if(contrasenaCliente.value != ""){
        contrasenaCliente.style.borberColor = "green";
      }
      if(confirmarContrasenaCliente.value != ""){
        confirmarContrasenaCliente.style.borberColor = "green";
      }
      if(telefonoCliente.value != ""){
        telefonoCliente.style.borberColor = "green";
      }
      if(direccionCliente.value != ""){
        direccionCliente.style.borberColor = "green";
      }
      if(documentoCliente.value != ""){
        documentoCliente.style.borberColor = "green";
      }
      if(pNombre.value != "" && 
      sNombre.value != "" &&
      pApellido.value != "" && 
      sApellido.value != "" && 
      correoCliente.value != "" &&
      confirmarCorreoCliente.value != "" &&
      contrasenaCliente.value != "" &&
      confirmarContrasenaCliente.value != "" &&
      telefonoCliente.value != "" &&
      direccionCliente.value != "" &&
      documentoCliente.value != "" ){
        this.peticionPost();
      }
      this.state.boolean = true;
    }
  };

  time = (input) => {
    setTimeout(function () {
      input.style.borderColor = "gray";
      input.value = "";
    }, 1500);
  };


peticionPost=async () =>{
  delete this.state.formU.ConfirmarContrasena
  delete this.state.formU.ConfirmarCorreo
  // https://barppi.herokuapp.com/api/cliente/nuevo-cliente/solicitud-registro
  // http://localhost:4020/api/cliente/nuevo-cliente/solicitud-registro
   await axios.post('http://localhost:4020/api/cliente/nuevo-cliente/solicitud-registro', this.state.formU)
   .then(response =>{
     console.log("Se ha creado un nuevo cliente");
     this.state.boolean = true;
   }).catch(error=>{
    console.log(error.message);
  })
   
 }

  render() {
    const datosFormU = this.state.formU;
    console.log(this.state.formU.FotoPerfil)
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
                  </div>
                  
                </form>
                <div className="DivButon">
                  {/*<Link to=""></Link>*/}
                  <button
                    type="submit"
                    className="btn Buton"
                    onClick={this.validacionForm}
                  >
                    REGISTRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean && (
          <Redirect to={{ pathname: `/PerfilTrabajadorUsuario2/inicioUsuarios/${this.state.numero_id_trabajador}` }} />
        )}
        {/* , state:{form:this.state.form} */}
        <div className="none" id="body">

        </div>
      </div>
    );
  }
}

export default withRouter(RegistroUsuario);
