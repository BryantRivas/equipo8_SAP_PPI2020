import React, { Component } from "react";
import "./StylesMiPerfilComoTrabajador.css";
import axios from "axios";

import { Link } from "react-router-dom";

let aja2 = "";

class MiPerfilComoTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      datos: [],
      form: {
        FotoPerfil: ''
      },
      form1T: {
        nombre1_trabajador: "",
        nombre2_trabajador: "",
      },
      form2T: {
        apellido1_trabajador: "",
        apellido2_trabajador: "",
      },
      form3T: {
        tipo_trabajador:''
      },
      form4T: {
        descripcion_trabajador: "",
      },
    };
  }

  //Form1T
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
      primerNombreT: this.state.primerNombreT,
      segundoNombreT: this.state.segundoNombreT,
    };
    console.log(user1T);
  };

  //FIN
  //Form2T
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
      primerApellidoT: this.state.primerApellidoT,
      segundoApellidoT: this.state.segundoApellidoT,
    };
    console.log(user2T);
  };
  //Fin
  //Form3T
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
      tipo_trabajador: this.state.tipo_trabajador
    };
    console.log(user3T);
  };
  //Fin
  //Form4T
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
      descripcionTrabajador: this.state.descripcionTrabajador,
    };
    console.log(user4T);
  };
  //Fin

  componentDidMount() {
    // https://barppi.herokuapp.com/api/trabajador/miperfilcomotrabajador/${this.state.numero_id_trabajador}
    // http://localhost:4020/api/trabajador/miperfilcomotrabajador/${this.state.numero_id_trabajador}
    axios
      .get(
        `http://localhost:4020/api/trabajador/miperfilcomotrabajador/${this.state.numero_id_trabajador}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data[0],
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }

  Subir = () => {
    let inpu = document.getElementById("FOTOPERFIL");
    if (inpu.files && inpu.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("fotoPrev").src = e.target.result;
            aja2 = e.target.result;
        }
        reader.readAsDataURL(inpu.files[0]);
    }
}

  Subir2 = () => {
    let inpu = document.getElementById("FOTOPERFIL");
    if (inpu.files && inpu.files[0]) {
      this.setState({form:{
        FotoPerfil: aja2,
       }})
        // await this.putAvatar();
        // UsuarioI[0].avatar = aja2;
        // document.getElementById("FotoPerfíl").style.backgroundImage = "url(" + UsuarioI[0].avatar + ")";
    }
  }

  peticionPut=async () =>{
    //http://localhost:4020/api/trabajador/put/fotoPerfil/${this.state.numero_id_trabajador}
    //https://barppi.herokuapp.com/api/trabajador/put/fotoPerfil/${this.state.numero_id_trabajador}
    await axios.put(`http://localhost:4020/api/trabajador/put/fotoPerfil/${this.state.numero_id_trabajador}`, { FotoPerfil: this.state.form.FotoPerfil})
    .then(response =>{
      this.componentDidMount();
      console.log('Se actualizo la foto de perfil')
    }).catch(error=>{
     console.log(error.message);
   })
    
  }

  peticionPutNombres = async () => {
    await axios.put(`http://localhost:4020/api/trabajador/put/nombresTrabajador/${this.state.numero_id_trabajador}`, { nombre1_trabajador: this.state.form1T.nombre1_trabajador, nombre2_trabajador: this.state.form1T.nombre2_trabajador})
    .then(response =>{
      this.componentDidMount();
      console.log('Se actualizo los nombres del trabajador')
    }).catch(error=>{
     console.log(error.message);
   })
  }

  peticionPutApellidos = async () => {
    await axios.put(`http://localhost:4020/api/trabajador/put/apellidosTrabajador/${this.state.numero_id_trabajador}`, { apellido1_trabajador: this.state.form2T.apellido1_trabajador, apellido2_trabajador: this.state.form2T.apellido2_trabajador})
    .then(response =>{
      this.componentDidMount();
      console.log('Se actualizo los apellidos del trabajador')
    }).catch(error=>{
     console.log(error.message);
   })
  }

  peticionPutDescripcion = async () => {
    await axios.put(`http://localhost:4020/api/trabajador/put/descripcionTrabajador/${this.state.numero_id_trabajador}`, { descripcion_trabajador: this.state.form4T.descripcion_trabajador})
    .then(response =>{
      this.componentDidMount();
      console.log('Se actualizo la descripcion del trabajador')
    }).catch(error=>{
     console.log(error.message);
   })
  }

  peticionPutTipoTrabajador = async () => {
    await axios.put(`http://localhost:4020/api/trabajador/put/tipoTrabajador/${this.state.numero_id_trabajador}`, { tipo_trabajador: this.state.form3T.tipo_trabajador})
    .then(response =>{
      this.componentDidMount();
      console.log('Se actualizo el tipo de trabajador')
    }).catch(error=>{
     console.log(error.message);
   })
  }

  render() {
    console.log(this.state.datos);
    const characters = this.state.datos;

    const datosForm1T = this.state.form1T;
    const datosForm2T = this.state.form2T;
    const datosForm3T = this.state.form3T;
    const datosForm4T = this.state.form4T;

    return (
      <div>
        <header>
          <nav className="menu-fixed-mi-perfil-como-trabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link
                  to={`/TrabajadoresInicio/${this.state.numero_id_trabajador}`}
                >
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

        <div className="informacion-fixed-mi-perfil-como-trabajador">
          <div className="div-img-fotoPerfiltrabajador-InformacionTrabajador">
            <div className="div-img-grid-fotoPerfiltrabajador-InformacionTrabajador">
              <div className="div-div-img-fotoPerfil-Trabajador">
                <img
                  className="img-fotoPerfil-InformacionTrabajador"
                  src={characters.FotoPerfil}
                  alt="FotoPerfil"
                />
              </div>
              <div
                className="div-div-cambiarFotoPerfil-Trabajador"
                type="button"
                data-toggle="modal"
                data-target="#imgUpload"
              >
                Cambiar foto de perfil
              </div>
              {/* MODAL SUBIR FOTO */}
              <div
                className="modal fade"
                id="imgUpload"
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
                        Elige tu foto de perfil
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
                      <form id="formProta" encType="multipart/form-data">
                        <input
                          className="input-subir-img"
                          id="FOTOPERFIL"
                          accept="image/*"
                          onChange={this.Subir}
                          type="file"
                        />
                      </form>
                      <div className="foto-perfil-subida-img-trabajador">
                        <img
                          className="foto-perfil-img-trabajador"
                          id="fotoPrev"
                          src="https://us.123rf.com/450wm/naropano/naropano1606/naropano160600550/58727711-fondo-gris-oscuro-el-dise%C3%B1o-de-textura-fondo-del-grunge-.jpg?ver=6"
                          alt="FOTOPERFIL"
                        />
                      </div>
                      <div className="div-subir-img-foto-perfil-trabajador">
                        <button className="Buton" onClick={this.Subir2}>
                          SUBIR
                        </button>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btnimgUploader"
                        data-dismiss="modal"
                        onClick={this.peticionPut}
                      >
                        Oky
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* FIN MODAL */}
            </div>
          </div>
          <div className="grid-informacion-personalTrabajador">
            <div className="div-nombreTrabajador-Perfil">
              <div className="div-textoSuperior">Nombres</div>
              <button
                data-toggle="modal"
                data-target="#nombresDelTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                <div>
                  {characters.nombre1_trabajador}
                  {` `}
                  {characters.nombre2_trabajador}
                </div>
              </button>
            </div>
            <div className="div-apellidosTrabajador-Perfil">
              <div className="div-textoSuperior">Apellidos</div>
              <button
                data-toggle="modal"
                data-target="#apellidosDelTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                <div>
                  {characters.apellido1_trabajador}
                  {` `}
                  {characters.apellido2_trabajador}
                </div>
              </button>
            </div>
            <div className="div-tipoTrabajador-Perfil">
              <div className="div-textoSuperior">Tipo de trabajador</div>

              <div className="radioBox-tipoTrabajador">
              <button
                data-toggle="modal"
                data-target="#tipoTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                {characters.tipo_trabajador}
              </button>
              </div>
            </div>
            <div className="div-descripcionTrabajador-Perfil">
              <div className="div-textoSuperior">Descripción</div>
              <button
                data-toggle="modal"
                data-target="#descripcionDelTrabajador-MiPerfilComoTrabajador"
                type="button"
                className="btn"
              >
                <div>{characters.descripcion_trabajador}</div>
              </button>
            </div>
          </div>
          <div className="div-buton-configaraciondeinformacionpersonal">
            <Link
              to={`/TrabajadoresInicio/MiPerfilComoTrabajador/InformacionPersonal/${this.state.numero_id_trabajador}`}
              type="button"
              className="btn btn-configaraciondeinformacionpersonal-Trabajador"
            >
              CONFIGURACIÓN DE INFORMACIÓN PERSONAL
            </Link>
          </div>

          {/* NOMBRES DEL TRABAJADOR */}
          <div className="div-nombresDelTrabajador-modal-MiPerfilComoTrabajador">
            <div
              className="modal fade"
              id="nombresDelTrabajador-MiPerfilComoTrabajador"
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
                      Tus Nombres
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
                      <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                        <input
                          placeholder="Primer nombre"
                          className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                          type="text"
                          id="PRIMERNOMBRET"
                          name="nombre1_trabajador"
                          autoComplete="off"
                          onChange={this.handleChange1T}
                          value={datosForm1T.primerNombreT}
                        />
                        <input
                          placeholder="Segundo nombre"
                          className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                          type="text"
                          id="SEGUNDONOMBRET"
                          name="nombre2_trabajador"
                          autoComplete="off"
                          onChange={this.handleChange1T}
                          value={datosForm1T.segundoNombreT}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                      onClick={this.peticionPutNombres}
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* APELLIDOS DEL TRABAJADOR */}
          <div className="div-apellidosDelTrabajador-modal-MiPerfilComoTrabajador">
            <div
              className="modal fade"
              id="apellidosDelTrabajador-MiPerfilComoTrabajador"
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
                      Tus Apellidos
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
                      <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                        <input
                          placeholder="Primer apellido"
                          className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                          type="text"
                          id="PRIMERAPELLIDOT"
                          name="apellido1_trabajador"
                          autoComplete="off"
                          onChange={this.handleChange2T}
                          value={datosForm2T.primerApellidoT}
                        />
                        <input
                          placeholder="Segundo apellido"
                          className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                          type="text"
                          id="SEGUNDOAPELLIDOT"
                          name="apellido2_trabajador"
                          autoComplete="off"
                          onChange={this.handleChange2T}
                          value={datosForm2T.segundoApellidoT}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                      onClick={this.peticionPutApellidos}
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPCION DEL TRABAJADOR */}
          <div className="div-descripcionDelTrabajador-modal-MiPerfilComoTrabajador">
            <div
              className="modal fade"
              id="descripcionDelTrabajador-MiPerfilComoTrabajador"
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
                      Tú descripción
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
                    <form onSubmit={this.handleSubmit4T}>
                      <div className="body-div-grid-inputs-costoTrabajoTrabajador">
                        <input
                          placeholder="Escribe en este apartado tu descripcion como trabajador"
                          className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                          type="text"
                          id="DESCRIPCIONTRABAJADOR"
                          name="descripcion_trabajador"
                          autoComplete="off"
                          onChange={this.handleChange4T}
                          value={datosForm4T.descripcionTrabajador}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                      onClick={this.peticionPutDescripcion}
                    >
                      OKY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TIPO DE TRABAJADOR */}
          <div className="div-tipoTrabajador-modal-MiPerfilComoTrabajador">
            <div
              className="modal fade"
              id="tipoTrabajador-MiPerfilComoTrabajador"
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
                      Tipo trabajador
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
                    <form onSubmit={this.handleSubmit3T}>
                      <div className="body-div-grid-inputs-costoTrabajoTrabajador">

                        <div className="divBoxes">
                      <p className="pCampoText">Eres...</p>

                      <select
                        placeholder="Escribe en este apartado tu descripcion como trabajador"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        id="TIPOTRABAJADOR"
                        name="tipo_trabajador"
                        onChange={this.handleChange3T}
                        value={datosForm3T.tipo_trabajador}
                      >
                        <option selected>Eres...</option>
                        <option>Barbero</option>
                        <option>Peluquero</option>
                      </select>
                    </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-cerrar-InformacionPersonalTrabajador"
                      data-dismiss="modal"
                      onClick={this.peticionPutTipoTrabajador}
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

export default MiPerfilComoTrabajador;
