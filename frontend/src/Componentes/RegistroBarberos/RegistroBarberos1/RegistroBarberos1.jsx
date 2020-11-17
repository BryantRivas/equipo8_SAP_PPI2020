import React from "react";
import "./StylesRegistroBarberos.css";

import { Link } from "react-router-dom";

import { Component } from "react";

class RegistroBarberos1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: {
        Correo: '',
        ConfirmarCorreo: '',
        Contrasena: '',
        ConfirmarContrasena: ''
      },
    };
  }


  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form1: {
        ...this.state.form1,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user1 = {
      Correo: this.state.Correo,
      ConfirmarCorreo: this.state.ConfirmarCorreo,
      Contrasena: this.state.Contrasena,
      ConfirmarContrasena: this.state.ConfirmarContrasena,
    };
    console.log(user1);
  };




  render() {
    const datosForm1 = this.state.form1;
    return (
      <div>
        <header>
          <nav className="menu-fixed-registroBarberos-1">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/RegistroBarberos">
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


        <div className="campos-fixed-registroBarberos-1">
          <div className="DivFatherFather">
            <h1 className="h4Header">Registrarse</h1>
            <div className="divFather">
              <div className="divBox">
                <h4 className="1Header">Correo y Contraseña</h4>
                <form className="col FormMain1C" onSubmit={this.handleSubmit}>
                  <div className="divBoxes">
                    <p className="pCampoText">Correo</p>
                    <input
                      placeholder="Correo"
                      className="form-control borderBox"
                      type="email"
                      name="Correo"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm1.Correo}
                    />
                  </div>
                  <div className="divBoxes">
                    <p className="pCampoText">Confirmar Correo</p>
                    <input
                      placeholder="Confirmar Correo"
                      className="form-control borderBox"
                      type="email"
                      name="ConfirmarCorreo"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm1.ConfirmarCorreo}
                    />
                  </div>
                  <div className="divBoxes">
                    <p className="pCampoText">Contraseña</p>
                    <input
                      placeholder="Contraseña"
                      className="form-control borderBox"
                      type="password"
                      name="Contrasena"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm1.Contrasena}
                    />
                  </div>

                  <div className="divBoxes">
                    <p className="pCampoText">Confirmar Contraseña</p>
                    <input
                      placeholder="Confirmar Contraseña"
                      className="form-control borderBox"
                      type="password"
                      name="ConfirmarContrasena"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm1.ConfirmarContrasena}
                    />
                  </div>
                </form>
                <div className="DivButon">
                  <Link to="/RegistroBarberos/RegistroBarberos2">
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

export default RegistroBarberos1;
