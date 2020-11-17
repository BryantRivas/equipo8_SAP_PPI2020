import React from "react";
import "./StylesRegistroBarberos2.css";

import { Link } from "react-router-dom";

import { Component } from "react";

class RegistroBarberos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form2: {
        TelefonoCelular: '',
        DireccionResidencial: '',
        Documento: '',
        Pais: '',
        Ciudad: ''
      },
    };
  }


  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form2: {
        ...this.state.form2,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form2);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user2 = {
      TelefonoCelular: this.state.TelefonoCelular,
      DireccionResidencial: this.state.DireccionResidencial,
      Documento: this.state.Documento,
      Pais: this.state.Pais,
      Ciudad: this.state.Ciudad
    };
    console.log(user2);
  };

  render() {
    const datosForm2 = this.state.form2;
    return (
      <div>
        <header>
          <nav className="menu-fixed-registroBarberos-2 ">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/RegistroBarberos/RegistroBarberos1">
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

        <div className="campos-fixed-registroBarberos-2">
          <div className="DivFatherFather">
            <h1 className="h4Header">Registrarse</h1>
            <div className="divFather">
              <div className="divBox">
                <h4 className="1Header">Adicionales</h4>
                <form className="col FormMain1C" onSubmit={this.handleSubmit}>
                  <div className="divBoxes">
                    <p className="pCampoText">Teléfono Celular</p>
                    <input
                      placeholder="Teléfono Celular"
                      className="form-control borderBox"
                      type="number"
                      name="TelefonoCelular"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm2.TelefonoCelular}
                    />
                  </div>
                  <div className="divBoxes">
                    <p className="pCampoText">Dirección Residencial</p>
                    <input
                      placeholder="Dirección Residencial"
                      className="form-control borderBox"
                      type="text"
                      name="DireccionResidencial"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm2.DireccionResidencial}
                    />
                  </div>
                  <div className="divBoxes">
                    <p className="pCampoText">Documento de I.D.</p>
                    <input
                      placeholder="Identificación"
                      className="form-control borderBox"
                      type="number"
                      name="Documento"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm2.Documento}
                    />
                  </div>

                  <div className="divBoxes">
                    <p className="pCampoText">País</p>
                    <input
                      placeholder="País"
                      className="form-control borderBox"
                      type="text"
                      name="Pais"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm2.Pais}
                    />
                  </div>

                  <div className="divBoxes">
                    <p className="pCampoText">Nombre Ciudad</p>
                    <input
                      placeholder="Nombre Ciudad"
                      className="form-control borderBox"
                      type="text"
                      name="Ciudad"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm2.Ciudad}
                    />
                  </div>
                </form>
                <div className="DivButon">
                  <Link to="/RegistroBarberos/RegistroBarberos3">
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

export default RegistroBarberos2;
