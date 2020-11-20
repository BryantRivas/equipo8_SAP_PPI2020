import React from "react";
import "./StylesRegistroBarberos2.css";

import { withRouter,Link,Redirect } from "react-router-dom";

import { Component } from "react";

class RegistroBarberos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean2: false,
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

  validacionForm2 = () => {
    let telefonoCelularTrabajador = document.getElementById("TELEFONOCELULARTRABAJADOR");
    let direccionResidencialTrabajador = document.getElementById("DIRECCIONRESIDENCIALTRABAJADOR");
    let documentoTrabajador = document.getElementById("DOCUMENTOTRABAJADOR");
    let paisTrabajador = document.getElementById("PAISTRABAJADOR");
    let ciudadTrabajador = document.getElementById("CIUDADTRABAJADOR");

    if(telefonoCelularTrabajador.value == "" || direccionResidencialTrabajador.value == "" || documentoTrabajador.value == "" || paisTrabajador.value == "" || ciudadTrabajador.value == ""){
      if(telefonoCelularTrabajador.value == ""){
        telefonoCelularTrabajador.style.borderColor = "red";
        telefonoCelularTrabajador.value = "Parametro obligatorio";
        this.time2(telefonoCelularTrabajador, "number");
      }
      if(direccionResidencialTrabajador.value == ""){
        direccionResidencialTrabajador.style.borderColor = "red";
        direccionResidencialTrabajador.value = "Parametro obligatorio";
        this.time2(direccionResidencialTrabajador, "text");
      }
      if(documentoTrabajador.value == ""){
        documentoTrabajador.style.borderColor = "red";
        documentoTrabajador.value = "Parametro obligatorio";
        this.time2(documentoTrabajador, "number");
      }
      if(paisTrabajador.value == ""){
        paisTrabajador.style.borderColor = "red";
        paisTrabajador.value = "Parametro obligatorio";
        this.time2(paisTrabajador, "text");
      }
      if(ciudadTrabajador.value == ""){
        ciudadTrabajador.style.borderColor = "red";
        ciudadTrabajador.value = "Parametro obligatorio";
        this.time2(ciudadTrabajador, "text");
      }
    }else{
      if(telefonoCelularTrabajador.value != "" || direccionResidencialTrabajador.value != "" || documentoTrabajador.value != "" || paisTrabajador.value != "" || ciudadTrabajador.value != ""){
        if(telefonoCelularTrabajador.value != ""){
          telefonoCelularTrabajador.style.borderColor = "green";
        }
        if(direccionResidencialTrabajador.value != ""){
          direccionResidencialTrabajador.style.borderColor = "green";
        }
        if(documentoTrabajador.value != ""){
          documentoTrabajador.style.borderColor = "green";
        }
        if(paisTrabajador.value != ""){
          paisTrabajador.style.borderColor = "green";
        }
        if(ciudadTrabajador.value != ""){
          ciudadTrabajador.style.borderColor = "green";
        }
      }
      this.state.boolean2 = true;
    }
  }

  time2 = (input, type) => {
    setTimeout(function () {
      input.type = type;
      input.style.borderColor = "grey";
      input.value = ""
    }, 1500)
  }

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
                      id="TELEFONOCELULARTRABAJADOR"
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
                      id="DIRECCIONRESIDENCIALTRABAJADOR"
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
                      id="DOCUMENTOTRABAJADOR"
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
                      id="PAISTRABAJADOR"
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
                      id="CIUDADTRABAJADOR"
                      name="Ciudad"
                      autoComplete="off"
                      onChange={this.handleChange}
                      value={datosForm2.Ciudad}
                    />
                  </div>
                </form>
                <div className="DivButon">
                  {/* <Link to="/RegistroBarberos/RegistroBarberos3"></Link> */}
                    <button className="btn Buton" onClick={this.validacionForm2}>SIGUIENTE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean2 && <Redirect to={{pathname:"/RegistroBarberos/RegistroBarberos3", state:{}}}/>}
      </div>
    );
  }
}

export default withRouter(RegistroBarberos2);
