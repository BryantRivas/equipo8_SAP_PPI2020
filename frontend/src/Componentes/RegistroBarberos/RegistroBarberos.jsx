import React from "react";
import { Component } from "react";
import "./StylesRegistroBarberos.css";

import { Link } from "react-router-dom";

class RegistroBarberos extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if(pNombre.value != "" && sNombre != "" && pApellido != "" && sApellido != ""){
      if(this.state.form.primerNombre == ""){
        console.log("El primer nombre esta vacido");
      }
    }
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
                <div className="DivButon">
                  <Link to="/RegistroBarberos/RegistroBarberos1">
                    <button type="submit" className="btn Buton"  >
                      SIGUIENTE
                    </button>
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

export default RegistroBarberos;
