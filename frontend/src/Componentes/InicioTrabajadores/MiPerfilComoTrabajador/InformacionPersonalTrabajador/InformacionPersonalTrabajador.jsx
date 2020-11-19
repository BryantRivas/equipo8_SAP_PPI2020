import React, { Component } from "react";
import "./StylesInformacionPersonalTrabajador.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

import { Link } from "react-router-dom";

class InformacionPersonalTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      form1T:{
        correoElectronicoActual:'',
        nuevoCorreoElectronico: '',
        confirmarCorreoElectronico: ''
      },
      form2T:{
        contrasenaActual: '',
        nuevaContrasena: '',
        confirmarNuevaContrasena: ''
      },
      form3T:{
        direccionActual: '',
        nuevaDireccion: '',
        confirmarNuevaDireccion: ''
      },
      form4T:{
        numeroTelefonicoActual: '',
        nuevoNumeroTelefonico: '',
        confirmarNuevoNumeroTelefonico: ''
      },
      form5T:{
        tipoSexoTrabajador: ''
      },
      form6T:{

      },
      form7T:{
        costoActualTrabajo: '',
        nuevoCostoTrabajo: ''
      }
    };
  }

  //FORM1T
  handleChange1T = async (e) => {
    e.persist();
    await this.setState({
      form1T: {
        ...this.state.form1T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form1T);
  };

  handleSubmit1T = (e) => {
    e.preventDefault();
    const user1T = {
      nuevoCorreoElectronico: this.state.nuevoCorreoElectronico,
      confirmarCorreoElectronico: this.state.confirmarCorreoElectronico,
    };
    console.log(user1T);
  };
  //FIN
  //FORM2T
  handleChange2T = async (e) => {
    e.persist();
    await this.setState({
      form2T: {
        ...this.state.form2T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form2T);
  };

  handleSubmit2T = (e) => {
    e.preventDefault();
    const user2T = {
      contrasenaActual: this.state.contrasenaActual,
      nuevaContrasena: this.state.nuevaContrasena,
      confirmarNuevaContrasena: this.state.confirmarNuevaContrasena
    };
    console.log(user2T);
  };
  //FIN
  //FORM3T
  handleChange3T = async (e) => {
    e.persist();
    await this.setState({
      form3T: {
        ...this.state.form3T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form3T);
  };

  handleSubmit3T = (e) => {
    e.preventDefault();
    const user3T = {
      nuevaDireccion: this.state.nuevaDireccion,
      confirmarNuevaDireccion: this.state.confirmarNuevaDireccion
    };
    console.log(user3T);
  };
  //FIN
  //FORM4T
  handleChange4T = async (e) => {
    e.persist();
    await this.setState({
      form4T: {
        ...this.state.form4T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form4T);
  };

  handleSubmit4T = (e) => {
    e.preventDefault();
    const user4T = {
      nuevoNumeroTelefonico: this.state.nuevoNumeroTelefonico,
      confirmarNuevoNumeroTelefonico: this.state.confirmarNuevoNumeroTelefonico,
    };
    console.log(user4T);
  };
  //FIN
  //FORM5T
  handleChange5T = async (e) => {
    e.persist();
    await this.setState({
      form5T: {
        ...this.state.form5T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form5T);
  };

  handleSubmit5T = (e) => {
    e.preventDefault();
    const user5T = {
      tipoSexoTrabajador: this.state.tipoSexoTrabajador,
    };
    console.log(user5T);
  };
  //FIN
  //FORM6T FECHA DE NACIMIENTO
  handleChange6T = async (e) => {
    e.persist();
    await this.setState({
      form6T: {
        ...this.state.form6T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form6T);
  };

  handleSubmit6T = (e) => {
    e.preventDefault();
    const user6T = {
      primerNombreT: this.state.primerNombreT,
      segundoNombreT: this.state.segundoNombreT,
    };
    console.log(user6T);
  };
  //FIN
  //FORM7T COSTO DEL TRABAJO
  handleChange7T = async (e) => {
    e.persist();
    await this.setState({
      form7T: {
        ...this.state.form7T,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form7T);
  };

  handleSubmit7T = (e) => {
    e.preventDefault();
    const user7T = {
      nuevoCostoTrabajo: this.state.nuevoCostoTrabajo
    };
    console.log(user7T);
  };
  //FIN

  componentDidMount(){
    axios.get(`https://rickandmortyapi.com/api/character/1`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }


  onChange = (date) => this.setState({ date });

  render() {
    const { date } = this.onChange;

    console.log(this.state.datos)
    const characters = this.state.datos;

    const datosForm1T = this.state.form1T;
    const datosForm2T = this.state.form2T;
    const datosForm3T = this.state.form3T;
    const datosForm4T = this.state.form4T;
    const datosForm5T = this.state.form5T;
    const datosForm6T = this.state.form6T;
    const datosForm7T = this.state.form7T;
    

    return (
      <div>
        <header>
          <nav className="menu-fixed-informacion-personal-trabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/TrabajadoresInicio/MiPerfilComoTrabajador">
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

        <div className="informacion-fixed-informacion-personal-trabajador">
          <div className="div-padre-grid-formulario-InformacionPersonal">
            <div className="div-correoTrabajador-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Dirección de correo electronico
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#correoTrabajadorMODAL"
                  className="btn correoTrabajador"
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  Example@gmail.com
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>

            <div className="div-contraseñaTrabajador-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Contraseña
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#contrasenaTrabajadorMODAL"
                  className="btn "
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  1000306848
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>
            <div className="div-direccionResidencialTrabajador-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Dirección
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#direccionTrabajadorMODAL"
                  className="btn "
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  Plaza lorem 27A
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>
            <div className="div-numeroTelefonicoTrabajador-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Número de teléfono
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#numeroTrabajadorMODAL"
                  className="btn "
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  4187277
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>
            <div className="div-sexoTrabajador-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Sexo
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#sexoTrabajador"
                  className="btn "
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  Mujer
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>
            <div className="div-fechaNacimiento-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Fecha de nacimiento
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#fechanacimiento"
                  className="btn "
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  {date}
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>
            <div className="div-costoTrabajo-InformacionPersonal">
              <div className="texto-descriptivo-superior-InformacionPersonal">
                Costo de trabajo
              </div>
              <div className="texto-informacion-inferior-InformacionPersonal">
                <button
                  data-toggle="modal"
                  data-target="#costoTrabajoTrabajador"
                  className="btn "
                  type="button"
                >
                  <img
                    src="https://1.bp.blogspot.com/-eQaGiv5RUks/X2gBeBKnHfI/AAAAAAAAHwA/MN0bpte2sakz3rbHOkCQv2_bk1wMrgH2gCLcBGAsYHQ/s1535/Recurso%2B1.png"
                    alt=""
                    className="img-botones-lapiz-InformacionPersonalTrabajador my-custom-shake shake-constant"
                  />
                  $12.000,00
                </button>
              </div>
              <hr className="hr-InformacionPersonalTrabajador" />
            </div>
          </div>

          {/* SEXO DEL TRABAJADOR */}
          <div className="div-sexoTabajador-modal">
            <div
              class="modal fade"
              id="sexoTrabajador"
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
                      Tipo de sexo
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleSubmit5T}>
                    <div className="form-group">
                      <select
                        className="form-control-InformacionPersonalTrabajador"
                        id="TIPOSEXOTRABAJADOR"
                        name="tipoSexoTrabajador"
                        autoComplete="off"
                        onChange={this.handleChange5T}
                        value={datosForm5T.tipoSexoTrabajador}
                      >
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otro...</option>
                      </select>
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIRECCIÓN DEL TRABAJADOR */}
          <div className="div-direccionTrabajador-modal">
            <div
              class="modal fade"
              id="direccionTrabajadorMODAL"
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
                      Dirección del trabajador
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleSubmit3T}>
                    <div className="body-div-grid-inputs-direccionTrabajador">
                      <input
                        type="text"
                        placeholder="Dirección actual"
                        className="input-direccionTrabajador-InformacionPersonalTrabajador"
                        id="DIRECCIONACTUAL"
                        name="direccionActual"
                        autoComplete="off"
                        onChange={this.handleChange3T}
                        value={datosForm3T.direccionActual}
                      />
                      <input
                        type="text"
                        placeholder="Nueva dirección"
                        className="input-direccionTrabajador-InformacionPersonalTrabajador"
                        id="NUEVADIRECCION"
                        name="nuevaDireccion"
                        autoComplete="off"
                        onChange={this.handleChange3T}
                        value={datosForm3T.nuevaDireccion}
                      />
                      <input
                        type="text"
                        placeholder="Confirmar dirección"
                        className="input-direccionTrabajador-InformacionPersonalTrabajador"
                        id="CONFIRMARNUEVADIRECCION"
                        name="confirmarNuevaDireccion"
                        autoComplete="off"
                        onChange={this.handleChange3T}
                        value={datosForm3T.confirmarNuevaDireccion}
                      />
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NUMERO DE TELEFONO DEL TRABAJADOR */}
          <div className="div-numeroTelefono-modal">
            <div
              className="modal fade"
              id="numeroTrabajadorMODAL"
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
                      Número trabajador
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleSubmit4T}>
                    <div className="body-div-grid-inputs-numeroTrabajador">
                      <input
                        placeholder="Número teléfonico actual"
                        className="input-numeroTrabajador-InformacionPersonalTrabajador"
                        type="tel"
                        id="NUMEROTELEFONICOACTUAL"
                        name="numeroTelefonicoActual"
                        autoComplete="off"
                        onChange={this.handleChange4T}
                        value={datosForm4T.numeroTelefonicoActual}
                      />
                      <input
                        placeholder="Nuevo número teléfonico"
                        className="input-numeroTrabajador-InformacionPersonalTrabajador"
                        type="tel"
                        id="NUEVONUMEROTELEFONICO"
                        name="nuevoNumeroTelefonico"
                        autoComplete="off"
                        onChange={this.handleChange4T}
                        value={datosForm4T.nuevoNumeroTelefonico}
                      />
                      <input
                        placeholder="Confirmar número teléfonico"
                        className="input-numeroTrabajador-InformacionPersonalTrabajador"
                        type="tel"
                        id="CONFIRMARNUEVONUMEROTELEFONICO"
                        name="confirmarNuevoNumeroTelefonico"
                        autoComplete="off"
                        onChange={this.handleChange4T}
                        value={datosForm4T.confirmarNuevoNumeroTelefonico}
                      />
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CORREO DEL TRABAJADOR */}
          <div className="div-correoTrabajador-modal">
            <div
              className="modal fade"
              id="correoTrabajadorMODAL"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Correo del trabajador
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
                    <form onSubmit={this.handleSubmit1T}>
                    <div className="body-div-grid-inputs-CorreoTrabajador">
                      <input
                        type="email"
                        placeholder="Correo electronico actual"
                        className="input-correoActualTrabajador-InformacionPersonalTrabajador"
                        id="CORREOELECTRONICOACTUAL"
                        name="correoElectronicoActual"
                        autoComplete="off"
                        onChange={this.handleChange1T}
                        value={datosForm1T.correoElectronicoActual}
                      />
                      <input
                        placeholder="Nuevo correo electronico"
                        className="input-correoNuevoTrabajador-InformacionPersonalTrabajador"
                        type="email"
                        id="NUEVOCORREOELECTRONICO"
                        name="nuevoCorreoElectronico"
                        autoComplete="off"
                        onChange={this.handleChange1T}
                        value={datosForm1T.nuevoCorreoElectronico}
                      />
                      <input
                        placeholder="Confirmar correo electronico"
                        className="input-correoNuevoTrabajador-InformacionPersonalTrabajador"
                        type="email"
                        id="CONFIRMARCORREOELECTRONICO"
                        name="confirmarCorreoElectronico"
                        autoComplete="off"
                        onChange={this.handleChange1T}
                        value={datosForm1T.confirmarCorreoElectronico}
                      />
                    </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CONTRASEÑA DEL TRABAJADOR */}
          <div className="div-contrasenaTrabajador-modal">
            <div
              className="modal fade"
              id="contrasenaTrabajadorMODAL"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Contraseña del trabajador
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
                    <form onSubmit={this.handleSubmit2T}>
                    <div className="body-div-grid-inputs-ContrasenaTrabajador">
                      <input
                        type="current-password"
                        placeholder="Contraseña actual"
                        className="input-contrasenaTrabajador-InformacionPersonalTrabajador"
                        id="CONTRASENAACTUAL"
                        name="contrasenaActual"
                        autoComplete="off"
                        onChange={this.handleChange2T}
                        value={datosForm2T.contrasenaActual}
                      />
                      <input
                        type="new-password"
                        placeholder="Nueva contraseña"
                        className="input-contrasenaTrabajador-InformacionPersonalTrabajador"
                        id="NUEVACONTRASENA"
                        name="nuevaContrasena"
                        autoComplete="off"
                        onChange={this.handleChange2T}
                        value={datosForm2T.nuevaContrasena}
                      />
                      <input
                        type="new-password"
                        placeholder="Confirmar nueva contraseña"
                        className="input-contrasenaTrabajador-InformacionPersonalTrabajador"
                        id="CONFIRMARNUEVACONTRASENA"
                        name="confirmarNuevaContrasena"
                        autoComplete="off"
                        onChange={this.handleChange2T}
                        value={datosForm2T.confirmarNuevaContrasena}
                      />
                    </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* COSTO DE TRABAJO */}
          <div className="div-costoTrabajo-modal">
            <div
              class="modal fade"
              id="costoTrabajoTrabajador"
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
                      Costo trabajo
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                      <input
                        placeholder="Costo actual del trabajo"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="number"
                        id="COSTOACTUALTRABAJO"
                        name="costoActualTrabajo"
                        autoComplete="off"
                        onChange={this.handleChange7T}
                        value={datosForm7T.costoActualTrabajo}
                      />
                      <input
                        placeholder="Nuevo costo del trabajo"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type="number"
                        id="NUEVOCOSTOTRABAJO"
                        name="nuevoCostoTrabajo"
                        autoComplete="off"
                        onChange={this.handleChange7T}
                        value={datosForm7T.nuevoCostoTrabajo}
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FECHA DE NACIMIENTO */}
          <div className="div-fechaNacimiento-modal">
            <div
              class="modal fade"
              id="fechanacimiento"
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
                      Fecha nacimiento trabajador
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body-fechaNacimientoTrabajador">
                    <Calendar
                      onChange={this.onChange}
                      value={this.state.data}
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InformacionPersonalTrabajador;
