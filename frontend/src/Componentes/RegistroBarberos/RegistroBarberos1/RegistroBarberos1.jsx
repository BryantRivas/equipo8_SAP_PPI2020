import React from "react";
import "./StylesRegistroBarberos.css";

import { withRouter ,Link, Redirect } from "react-router-dom";

import { Component } from "react";

class RegistroBarberos1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean1: false,
      form:this.props.location.state.form,
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

  validacionForm1 = () =>{
    let correo = document.getElementById("CORREOTRABAJADOR")
    let confirmarcorreo = document.getElementById("CONFIRMARCORREOTRABAJADOR")
    let contrasena = document.getElementById("CONTRASENATRABAJADOR")
    let confirmarcontrasena = document.getElementById("CONFIRMARCONTRASENATRABAJADOR")

    if(correo.value == "" || confirmarcorreo == "" || contrasena == "" || confirmarcontrasena== ""){
      if(correo.value == ""){
        correo.style.borderColor = "red";
        correo.value = "Parametro obligatorio";
        this.time(correo, "email");
      }
      if(confirmarcorreo.value == ""){
        confirmarcorreo.style.borderColor = "red";
        confirmarcorreo.value = "Parametro obligatorio";
        this.time(confirmarcorreo, "email");
      }
      if(contrasena.value == ""){
        contrasena.style.borderColor = "red";
        contrasena.value = "Parametro obligatorio";
        this.time(contrasena, "password");
      }
      if(confirmarcontrasena.value == ""){
        confirmarcontrasena.style.borderColor = "red";
        confirmarcontrasena.value = "Parametro obligatorio";
        this.time(confirmarcontrasena, "password");
      }
    }else{
      if(correo.value != "" && confirmarcorreo != "" && contrasena != "" && confirmarcontrasena != ""){
        if(correo.value != ""){
          correo.style.borderColor = "green";
        }
        if(confirmarcorreo.value != ""){
          confirmarcorreo.style.borderColor = "green";
        }
        if(contrasena.value != ""){
          contrasena.style.borderColor = "green";
        }
        if(confirmarcontrasena.value != ""){
          confirmarcontrasena.style.borderColor = "green"
        }
        
      }
      this.state.boolean1 = true;
    }
  }

  time = (input, type) => {
    setTimeout(function () {
      input.type = type;
      input.style.borderColor = "grey";
      input.value = ""
    }, 1500)
  }

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
                      id="CORREOTRABAJADOR"
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
                      id="CONFIRMARCORREOTRABAJADOR"
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
                      id="CONTRASENATRABAJADOR"
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
                      id="CONFIRMARCONTRASENATRABAJADOR"
                      name="ConfirmarContrasena"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm1.ConfirmarContrasena}
                    />
                  </div>
                </form>
                <div className="DivButon">
                  {/*<Link to="/RegistroBarberos/RegistroBarberos2"></Link>*/}
                    <button className="btn Buton" onClick={this.validacionForm1}>SIGUIENTE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean1 && <Redirect to={{pathname:"/RegistroBarberos/RegistroBarberos2", state:{form:this.state.form}}}/>}
      </div>
    );
  }
}

export default withRouter(RegistroBarberos1);
