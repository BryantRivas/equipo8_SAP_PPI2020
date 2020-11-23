import React, { Component } from "react";
import "./StylesIngresarTrabajador.css";
import axios from "axios";

import { Link } from "react-router-dom";

class IngresarTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: 8,
      login:{
        correo: '',
        contrasena: ''
      },
      datos:[],
      datosB:[]
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
    // https://barppi.herokuapp.com/api/trabajador
    await axios.get('http://localhost:4020/api/trabajador', {params: {correo_electronico_trabajador: this.state.login.correo, contrasena_trabajador: this.state.login.contrasena}})
    .then(response => {
      console.log(response.data);
      this.setState({
        datos: response.data,
        datosB: response.data
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
      if(correoTrabajador.value != "" || passwordTrabajador.value != ""){
        if(correoTrabajador.value != ""){
          correoTrabajador.style.borderColor = "green";
        }
        if(passwordTrabajador.value != ""){
          passwordTrabajador.style.borderColor = "green";
        }
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
                  name="correo"
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
                {/* <Link className="" exact to={`/TrabajadoresInicio/${this.state.numero_id_trabajador}`}></Link> */}
                  <button className="btn ButonIngresarTrabajador" onClick={() => this.iniciarSesion()} >Entrar</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default IngresarTrabajador;
