import React, { Component } from "react";
import "./StylesLoginUsuarios.css";
import axios from "axios";

import { Link, withRouter, Redirect } from "react-router-dom";

class LoginUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
      numero_id_trabajador: this.props.numero_id_trabajador,
      login:{
        correo_electronico_cliente: '',
        contrasena_Cliente: ''
      },
      datos:[],
      cita:{
        codigo_cliente: '',
        numero_id_trabajador: '',
        estado_cita: 'Activa'
      }
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
    // https://barppi.herokuapp.com/api/cliente/solicitud-login/loginCliente/${this.state.login.correo_electronico_cliente}
    // http://localhost:4020/api/cliente/solicitud-login/loginCliente/${this.state.login.correo_electronico_cliente}
    await axios.get(`http://localhost:4020/api/cliente/solicitud-login/loginCliente/${this.state.login.correo_electronico_cliente}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        datos: response.data[0]
      })
      this.setState({
        cita:{
          codigo_cliente: this.state.datos.codigo_cliente,
          numero_id_trabajador: this.state.numero_id_trabajador,
          estado_cita: 'Activa'
        }
      })
    })
    .catch(error => {
      console.log(error);
    })
  }


  peticionPostCita=async () =>{
    // http://localhost:4020/api/cita/nueva-cita/solicitud-cita
     await axios.post('http://localhost:4020/api/cita/nueva-cita/solicitud-cita', this.state.cita)
     .then(response =>{
       console.log("Se ha creado una nueva cita");
     }).catch(error=>{
      console.log(error.message);
    })
     
   }


  validacionLogin = () => {
    let correoUsuario = document.getElementById("CORREOUSUARIO");
    let passwordUsuario = document.getElementById("PASSWORDUSUARIO");

    if(correoUsuario.value == "" || passwordUsuario.value == ""){
      if(correoUsuario.value == ""){
        correoUsuario.style.borderColor = "red";
        correoUsuario.value = "Parametro obligatorio";
        this.timeLogin(correoUsuario, "email");
      }
      if(passwordUsuario.value == ""){
        passwordUsuario.style.borderColor = "red";
        passwordUsuario.value = "Parametro obligatorio";
        this.timeLogin(passwordUsuario, "password");
      }
    }else{
      if(correoUsuario.value != ""){
        this.iniciarSesion();
        correoUsuario.style.borderColor = "green";
        if(passwordUsuario.value != ""){
          passwordUsuario.style.borderColor = "green";
          this.peticionPostCita();
        }
      }
      this.state.boolean = true;
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
    console.log(this.state.cita)
    console.log(this.state.datos[0])
    const loginTrabajador = this.state.datos[0]
    return (
      <div>
        <header>
          <nav className="menu-fixed-ingresarTrabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/PerfilTrabajadorUsuario2/${this.state.numero_id_trabajador}`}>
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
                  id="CORREOUSUARIO"
                  name="correo_electronico_cliente"
                  onChange={this.handleChange}
                />
                <input
                  placeholder="************"
                  className="form-control borderBoxIngresarTrabajador"
                  type="password"
                  id="PASSWORDUSUARIO"
                  name="contrasena_Cliente"
                  onChange={this.handleChange}
                />
                <div>
                  <Link exact to={`/PerfilTrabajadorUsuario2/inicioUsuarios/registroUsuarios/${this.state.numero_id_trabajador}`}>
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
                  <button className="btn ButonIngresarTrabajador" onClick={this.validacionLogin} >
                    Agendar  
                  </button>
                {/*{() => this.iniciarSesion()}*/}
                {/*{this.peticionPostCita}*/}
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boolean && (<Redirect to={{ pathname: `/PerfilTrabajadorUsuario2/inicioUsuarios/infoTrabajador/${this.state.numero_id_trabajador}` }} />)}
      </div>
    );
  }
  
};

export default withRouter(LoginUsuarios);
