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
      primerNombre: this.state.primerNombre,
      segundoNombre: this.state.segundoNombre,
      primerApellido: this.state.primerApellido,
      segundoApellido: this.state.segundoApellido,
    };
    console.log(user);
  };

  validacionForm = () =>{
    let pNombre = document.getElementById("PRIMERNOMBRE"), sNombre = document.getElementById("SEGUNDONOMBRE");
    let pApellido = document.getElementById("PRIMERAPELLIDO"), sApellido = document.getElementById("SEGUNDOAPELLIDO");
    
    if(pNombre.value == "" || sNombre == "" || pApellido == "" || sApellido == ""){
      console.log("El primer nombre esta vacido");
      if(pNombre.value == ""){
        pNombre.style.borderColor = "red";
        pNombre.value = "Parametro obligatorio";
        this.time(pNombre, "text");
      }
        

      if(pApellido.value == ""){
        pApellido.style.borderColor = "red";
        pApellido.value = "Parametro obligatorio";
        this.time(pApellido, "text");
      }
      
    }else{
      if(pNombre.value != "" || sNombre != "" || pApellido != "" || sApellido != ""){
        if(pNombre.value != ""){
          pNombre.style.borberColor= "green";
        }
        if(sNombre.value != ""){
          sNombre.style.borderColor= "green";
        }
        if(pApellido.value != ""){
          pApellido.style.borderColor= "green";
        }
        if(sApellido.value != ""){
          sApellido.style.borderColor= "green";
        }
        this.state.boolean = true;
      console.log(this.state.boolean);
      }
      
    }
  
  }

  time = (input, type) => {
    setTimeout(function () {
      input.type = type;
      input.style.borderColor= "gray";
      input.value= "";
    }, 1500)
  }

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

                <form className="FormMain1C" onSubmit={this.handleSubmit}>
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
                    <div>
                      {this.state.advertencia}
                    </div>
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
                </form>

                {/* REGISTROBARBEROS/REGISTROBARBEROS1 */}
                <h4 className="h1Header1">Correo y Contraseña</h4>
                <form className="col FormMain1C" >
                  <div className="divBoxes">
                    <p className="pCampoText">Correo</p>
                    <input
                      placeholder="Correo"
                      className="form-control borderBox"
                      type="email"
                      id="CORREOTRABAJADOR"
                      name="Correo"
                      autoComplete="off"
                      
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
                      
                    />
                  </div>
                </form>
                {/* REGISTROBARBEROS/REGISTROBARBEROS2 */}
                <h4 className="h1Header1">Adicionales</h4>
                <form className="col FormMain1C">
                  <div className="divBoxes">
                    <p className="pCampoText">Teléfono Celular</p>
                    <input
                      placeholder="Teléfono Celular"
                      className="form-control borderBox"
                      type="number"
                      id="TELEFONOCELULARTRABAJADOR"
                      name="TelefonoCelular"
                      autoComplete="off"
                      
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
                      
                    />
                  </div>
                </form>
                {/* REGISTROBARBEROS/REGISTROBARBEROS3 */}
                <h4 className="h1Header1">Eres...</h4>
                <form className="col FormMain1C" >
                  <div className="divBoxes">
                    <p className="pCampoText">Eres...</p>

                    <select
                      class="form-control borderBox"
                      type="text"
                      id="TIPOTRABAJADOR"
                      name="tipoTrabajador"
                      autoComplete="off"
                      
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
                          <div className="modal-body">
                            En esta parte ira
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
                      name="Precio"
                      autoComplete="off"
                      
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
                      
                    />
                  </div>
                </form>

                <div className="DivButon">
                  {/*<Link to=""></Link>*/}
                  <button type="submit" className="btn Buton" onClick={this.validacionForm} >
                      SIGUIENTE
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean && <Redirect to={{pathname:"/RegistroBarberos/RegistroBarberos1"}}/>}
        {/* , state:{form:this.state.form} */}
      </div>
    );
  }
}

export default withRouter(RegistroBarberos);
