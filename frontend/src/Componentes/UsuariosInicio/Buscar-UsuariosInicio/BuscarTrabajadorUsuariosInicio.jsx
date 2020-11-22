import React, { Component } from "react";
import "./StylesBuscarTrabajadorUsuariosInicio.css";
import axios from "axios";

import { Link } from "react-router-dom";

class BuscarTrabajadorUsuariosInicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }
  
  componentDidMount(){
    //https://barppi.herokuapp.com/api/trabajador
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data.results
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  render() {
    console.log(this.state.datos)
    const characters = this.state.datos;
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
                          src={datosT.image}
                          alt="Foto_Perfil"
                        />
                      </div>
                    </div>
                    <div className="divdatosCuerpoUsuariosInicio">
                      <div className="card_body">
                        <div className="div_Grid_TopCard_UsuariosInicio">
                          <div className="div-Nombre_Trabajador_UsuariosInicio">
                            <h3 className="Nombre_Trabajador_UsuariosInicio">
                              {datosT.name}
                              {datosT.nombres_trabajador}{` `}{datosT.apellidos_trabajador}
                            </h3>
                          </div>
                          <div className="divButtonSolicitarUsuariosInicio">
                            <Link
                              className="btn ButonUsuariosInicio"
                              to={`/PerfilTrabajadorUsuario1/${datosT.id}`}
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
                          {datosT.descripcion}
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
