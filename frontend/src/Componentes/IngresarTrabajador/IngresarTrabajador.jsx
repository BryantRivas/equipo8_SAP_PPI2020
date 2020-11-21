import React, { Component } from "react";
import "./StylesIngresarTrabajador.css";
import axios from "axios";

import { Link } from "react-router-dom";

class IngresarTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:{
        correo: '',
        contraseña: ''
      }
    };
  }

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.login);
  };

  iniciarSesion = async () =>{
    await axios.get('https://barppi.herokuapp.com/api/trabajador', {params: {correo_electronico_trabajador: this.state.login.correo, contrasena_trabajador: this.state.login.contraseña}})
    .then(response => {
      console.log(response.data);
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
                  name="contraseña"
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
            {/* 
          <div>
            <img
              className="img-1-IngresarTrabajador my-custom-shake shake-constant "
              src="https://1.bp.blogspot.com/-zzLuzcxIFJs/X161jaOCfSI/AAAAAAAAHTI/qhevsGCXwP88ffCTX1RrweVY94SuUxWNwCLcBGAsYHQ/s300/1.png"
              alt=""
            />
            <img
              className="img-2-IngresarTrabajador my-custom-shake shake-constant"
              src="https://1.bp.blogspot.com/-qsFXHCGj5gU/X161jYE4TrI/AAAAAAAAHTQ/eXw9I3MLf1YPto10pw81PwIdscb8qpj1ACLcBGAsYHQ/s300/2.png"
              alt=""
            />
            <img
              className="img-3-IngresarTrabajador my-custom-shake shake-constant "
              src="https://1.bp.blogspot.com/-FUOwwCGVj7w/X161jTjNMtI/AAAAAAAAHTM/UgZ0PrUb2zI7YWmf4yAkp6X04yBFsYffgCLcBGAsYHQ/s300/3.png"
              alt=""
            />
            <img
              className="img-4-IngresarTrabajador my-custom-shake shake-constant"
              src="https://1.bp.blogspot.com/-joJTAWMxHI4/X161jQiVLAI/AAAAAAAAHTU/XS-L8aReeKU5n63H8SGZ0hO0Yy9k2YE0wCLcBGAsYHQ/s300/4.png"
              alt=""
            />
            <img
              className="img-5-IngresarTrabajador my-custom-shake shake-constant"
              src="https://1.bp.blogspot.com/-zY-krwJfp7w/X161jm6hSUI/AAAAAAAAHTY/I2RDbIwlvmcuuQT1AxJMM9vWM9H55zOtQCLcBGAsYHQ/s300/5.png"
              alt=""
            />
            <img
              className="img-6-IngresarTrabajador my-custom-shake shake-constant"
              src="https://1.bp.blogspot.com/-nB-8khtqvAc/X161j-fFd0I/AAAAAAAAHTc/HbcD8NXO0MwEUOQPL9GmwMee8k3De0q3QCLcBGAsYHQ/s300/6.png"
              alt=""
            />
          </div>
          */}
            <div className="divButonIngresarTrabajador">
              <div className="divbutonIngresarTrabajador_Principal">
                {/* onClick={() => this.iniciarSesion()} */}
                <Link className="" exact to="/TrabajadoresInicio">
                  <button className="btn ButonIngresarTrabajador" >Entrar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default IngresarTrabajador;
