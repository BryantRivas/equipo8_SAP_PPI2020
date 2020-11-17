import React from "react";
import "./StylesRegistroBarberos3.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

import { Component } from "react";

class RegistroBarberos3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
                      type="radio"
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
                  </div>
                  <div className="divBoxes">
                    <p className="pCampoText">Precio</p>
                    <input
                      placeholder="Precio"
                      className="form-control borderBox"
                      type="number"
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
                      name="Descripcion"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm3.Descripcion}
                    />
                  </div>
                </form>
                <div className="DivButon">
                  <Link to="/IngresarTrabajador">
                    <button className="btn Buton">SIGUIENTE</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistroBarberos3;
