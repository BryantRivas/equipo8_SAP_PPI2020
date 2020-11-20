import React from "react";
import "./StylesRegistroBarberos3.css";

import { withRouter, Link, Redirect } from "react-router-dom";

import { Component } from "react";

class RegistroBarberos3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean3: false,
      form3: {
        tipoTrabajador: '',
        Precio: '',
        Descripcion: ''
      },
    };
  }


  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form3: {
        ...this.state.form3,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form3);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user3 = {
      tipoTrabajador: this.state.tipoTrabajador,
      Precio: this.state.Precio,
      Documento: this.state.Documento,
      Descripcion: this.state.Descripcion,
    };
    console.log(user3);
  };


  validacionForm3 = () => {
    let tipoTrabajador = document.getElementById("TIPOTRABAJADOR");
    let precioTrabajo = document.getElementById("PRECIOTRABAJO");
    let descripcionTrabajador = document.getElementById("DESCRIPCIONTRABAJADOR");

    if(tipoTrabajador.value == "" || precioTrabajo.value == "" || descripcionTrabajador.value == "" ){
      if(tipoTrabajador.value == ""){
        tipoTrabajador.style.borderColor = "red";
        tipoTrabajador.value = "Parametro obligatorio";
        
      }
      if(precioTrabajo.value == ""){
        precioTrabajo.style.borderColor = "red";
        precioTrabajo.value = "Parametro obligatorio";
        
      }
      if(descripcionTrabajador.value == ""){
        descripcionTrabajador.style.borderColor = "red";
        descripcionTrabajador.value = "Parametro obligatorio";
        
      }
    }else{
      if(tipoTrabajador.value != "" || precioTrabajo.value != "" || descripcionTrabajador.value != ""){
        if(tipoTrabajador.value != ""){
          tipoTrabajador.style.borderColor = "green";
        }
        if(precioTrabajo.value != ""){
          precioTrabajo.style.borderColor = "green";
        }
        if(descripcionTrabajador.value != ""){
          descripcionTrabajador.style.borderColor = "green";
        }
      }
      this.state.boolean3 = true;
    }
  }

  time3 = (input, type) => {
    setTimeout(function () {
      input.type = type;
      input.style.borderColor = "grey";
      input.value = ""
    }, 1500)
  }



  render() {
    const datosForm3 = this.state.form3;
    return (
      <div>
        <header>
          <nav className="menu-fixed-registroBarberos-3">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/RegistroBarberos/RegistroBarberos2">
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

        <div className="campos-fixed-registroBarberos-3">
          <div className="DivFatherFather">
            <h1 className="h4Header">Registrarse</h1>
            <div className="divFather">
              <div className="divBox">
                <h4 className="h1Header">Eres...</h4>
                <form className="col FormMain1C" onSubmit={this.handleSubmit}>
                  <div className="divBoxes">
                    <p className="pCampoText">Eres...</p>

                    <select
                      class="form-control borderBox"
                      type="text"
                      id="TIPOTRABAJADOR"
                      name="tipoTrabajador"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm3.tipoTrabajador}
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
                      onChange={this.handleChange}
                      value={datosForm3.Precio}
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
                      value={datosForm3.Descripcion}
                    />
                  </div>
                </form>
                <div className="DivButon">
                  {/* <Link to="/IngresarTrabajador"></Link> */}
                    <button className="btn Buton" onClick={this.validacionForm3}>SIGUIENTE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean3 && <Redirect to={{pathname:"/RegistroBarberos/RegistroBarberos3", state:{}}} />}
      </div>
    );
  }
}

export default RegistroBarberos3;
