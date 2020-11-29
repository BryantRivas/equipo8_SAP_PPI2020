import React, { Component } from "react";
import "./StylesIngresarTrabajador.css";
import axios from "axios";

import { Link, Redirect, withRouter } from "react-router-dom";

class IngresarTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
      correo_verificacion_trabajador: '',
      login:{
        correo_electronico_trabajador: '',
        contrasena: ''
      },
      datos:[]
    };
  }

  handleChange = async (e) => {
    await this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () =>{
    // https://barppi.herokuapp.com/api/trabajador/login/${this.state.login.correo_electronico_trabajador}
    // http://localhost:4020/api/trabajador/login/${this.state.login.correo_electronico_trabajador}
    await axios.get(`https://barppi.herokuapp.com/api/trabajador/login/${this.state.login.correo_electronico_trabajador}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        datos: response.data[0],
        correo_verificacion_trabajador: response.data[0].correo_electronico_trabajador
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  validacionLogin = () => {
    let correoTrabajador = document.getElementById("CORREOTRABAJADOR");
    let passwordTrabajador = document.getElementById("PASSWORDTRABAJADOR");

    if(correoTrabajador.value == "" || passwordTrabajador.value == "" ){
      if(correoTrabajador.value == ""){
        correoTrabajador.style.borderColor = "red";
        correoTrabajador.value = "Parametro obligatorio";
        this.timeLogin(correoTrabajador, "email");
      }
      if(passwordTrabajador.value == ""){
        passwordTrabajador.style.borderColor = "red";
        passwordTrabajador.value = "Parametro obligatorio";
        this.timeLogin(passwordTrabajador, "password");
      }
    }else{
      if(correoTrabajador.value != ""){
          this.iniciarSesion();
          if(correoTrabajador.value == this.state.correo_verificacion_trabajador){
            correoTrabajador.style.borderColor = "green";
          }else{
            correoTrabajador.style.borderColor = "red";
          }
          if(passwordTrabajador.value != ""){
            passwordTrabajador.style.borderColor = "green";
          }
          this.state.boolean = true;
      }

    }
  }

  timeLogin = (input, type) => {
    setTimeout(function () {
      input.type = type;
      input.style.borderColor = "grey";
      input.value = ""
    }, 1500)
  }

  render(){
    console.log(this.state.datos)
    const loginTrabajador = this.state.datos
    return (
      <div>
        <header>
          <nav className="menu-fixed-ingresarTrabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/Inicio">
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

        <div className="campos-fixed-ingresarTrabajador">
          <div className="divFatherIngresarTrabajador">
            <div className="divFormIngresarTrabajador">
              <h1 className="h1IngresarTrabajador">Iniciar</h1>
              <form className="form-group formGridIngresarTrabajador">
                <input
                  placeholder="example@gmail.com"
                  className="form-control borderBoxIngresarTrabajador"
                  type="email"
                  id="CORREOTRABAJADOR"
                  name="correo_electronico_trabajador"
                  onChange={this.handleChange}
                />
                <input
                  placeholder="************"
                  className="form-control borderBoxIngresarTrabajador"
                  type="password"
                  id="PASSWORDTRABAJADOR"
                  name="contrasena"
                  onChange={this.handleChange}
                />
                <div className="">
                  <Link className="" exact to="/RegistroBarberos">
                    <button className="btn Buton-REGISTRARSE-IngresarTrabajador" >
                      REGISTRARSE
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            
            <div className="divButonIngresarTrabajador">
              <div className="divbutonIngresarTrabajador_Principal">
                {/* onClick={() => this.iniciarSesion()} */}
                {/* <Link exact to={`/TrabajadoresInicio/${this.state.numero_id_trabajador}`}></Link> */}
                {/* <Link exact to={`/TrabajadoresInicio/${this.state.datos.numero_id_trabajador}`}>IR A LA PARTE DEL TRABAJADOR</Link> */}
                  <button className="btn ButonIngresarTrabajador" onClick={() => this.validacionLogin()} >
                    Entrar
                  </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean && (<Redirect to={{ pathname: `/TrabajadoresInicio/${this.state.datos.numero_id_trabajador}` }} />)}
      </div>
    );
  }
  
};

export default withRouter(IngresarTrabajador);
