import React, { Component } from "react";
import "./StylesBuscarTrabajadorUsuariosInicio.css";
import axios from "axios";

import { Link } from "react-router-dom";

class BuscarTrabajadorUsuariosInicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      datos: [],
      datosB : []
    };
  }
  
  componentDidMount(){
    //https://barppi.herokuapp.com/api/trabajador
    //http://localhost:4020/api/trabajador
    axios.get('http://localhost:4020/api/trabajador')
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data,
          datosB: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  filtrarElementos = () => {
    var search = this.state.datos.filter(item => {
      if(item.nombre1_trabajador.includes(this.state.busqueda) || 
      item.nombre1_trabajador.toLowerCase().includes(this.state.busqueda) ||
      item.nombre1_trabajador.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.nombre1_trabajador.toUpperCase().includes(this.state.busqueda) ||
      item.nombre1_trabajador.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||

      item.nombre2_trabajador.includes(this.state.busqueda) || 
      item.nombre2_trabajador.toLowerCase().includes(this.state.busqueda) ||
      item.nombre2_trabajador.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.nombre2_trabajador.toUpperCase().includes(this.state.busqueda) ||
      item.nombre2_trabajador.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||

      item.apellido1_trabajador.includes(this.state.busqueda) || 
      item.apellido1_trabajador.toLowerCase().includes(this.state.busqueda) ||
      item.apellido1_trabajador.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.apellido1_trabajador.toUpperCase().includes(this.state.busqueda) ||
      item.apellido1_trabajador.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||

      item.apellido2_trabajador.includes(this.state.busqueda) || 
      item.apellido2_trabajador.toLowerCase().includes(this.state.busqueda) ||
      item.apellido2_trabajador.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.apellido2_trabajador.toUpperCase().includes(this.state.busqueda) ||
      item.apellido2_trabajador.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      
      item.ciudad_trabajador.includes(this.state.busqueda) || 
      item.ciudad_trabajador.toLowerCase().includes(this.state.busqueda) ||
      item.ciudad_trabajador.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.ciudad_trabajador.toUpperCase().includes(this.state.busqueda) ||
      item.ciudad_trabajador.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)
      ){
        return item;
      }
    });
    this.setState({datosB: search})
  }

  onChange = async (e) => {
    e.persist();
    await this.setState({busqueda: e.target.value});
    this.filtrarElementos();
    console.log(this.state.busqueda);
  };



  render() {
    console.log(this.state.datos)
    console.log(this.state.datosB)
    const characters = this.state.datosB;
    return (
      <div>
        <header>
          <nav className="menu-fixed-buscarTrabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to="/UsuariosInicio">
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

        <div className="buscar-fixed-buscarTrabajador">
          <div className="div-texto-buscar-buscarTrabajosPorRealizar">
            Buscar
          </div>
          <div className="div-input-buscar-buscarTrabajosPorRealizar">
            <input
              placeholder="Nombre del trabajador"
              className="input-buscar-buscarTabajosPorRealizar"
              type="text"
              id="BUSQUEDA"
              name="busqueda"
              autoComplete="off"
              value={this.state.busqueda}
              onChange={this.onChange}
            />
          </div>
        </div>
        <main>
        <div className="cards-fixed-usuariosInicio">
          {characters.map((datosT) => {
            return (
              <div className="divCardUsuariosInicio">
                <div className="card ">
                  <div className="CardGridUsuariosInicio">
                    <div className="divimgFotoPerfilUsuariosInicio">
                      <div className="imgdivcenterFotoPerfil_UsuariosInicio">
                        <img
                          className="imgFotoPerfilUsuariosInicio"
                          src={datosT.FotoPerfil}
                          alt="Foto_Perfil"
                        />
                      </div>
                    </div>
                    <div className="divdatosCuerpoUsuariosInicio">
                      <div className="card_body">
                        <div className="div_Grid_TopCard_UsuariosInicio">
                          <div className="div-Nombre_Trabajador_UsuariosInicio">
                            <h3 className="Nombre_Trabajador_UsuariosInicio">
                              {datosT.nombre1_trabajador}{` `}{datosT.nombre2_trabajador}
                              {` `}{datosT.apellido1_trabajador}{` `}{datosT.apellido2_trabajador}
                            </h3>
                          </div>
                          <div className="divButtonSolicitarUsuariosInicio">
                            <Link
                              className="btn ButonUsuariosInicio"
                              to={`/PerfilTrabajadorUsuario1/${datosT.numero_id_trabajador}`}
                            >
                              Solicitar
                            </Link>
                          </div>
                        </div>
                        <div className="div_Informarcionadicional_UsuariosInicio">
                          <p className="Numero_UsuarioInicio">
                            Número telefonico: {datosT.telefono_trabajador}
                          </p>
                          <p className="Numero_UsuarioInicio">
                            Dirección: {datosT.direccion_trabajador}
                          </p>
                        </div>
                        <textarea
                          className="textarea_Descripcion_UsuariosInicio"
                          readonly="readonly"
                        >
                          {datosT.descripcion_trabajador}
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </main>
      </div>
    );
  }
}

export default BuscarTrabajadorUsuariosInicio;
