import React, { Component } from "react";
import "./StylesTrabajosPorRealizar.css";
import axios from "axios";

import { Link } from "react-router-dom";

class TrabajosPorRealizar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      datos: []
    };
  }

  componentDidMount(){
    // https://barppi.herokuapp.com/api/cita/cita/cards/trabajosPorRealizar/${this.state.numero_id_trabajador}
    // http://localhost:4020/api/cita/cita/cards/trabajosPorRealizar/${this.state.numero_id_trabajador}
    axios.get(`https://barppi.herokuapp.com/api/cita/cita/cards/trabajosPorRealizar/${this.state.numero_id_trabajador}`)
      .then(res =>{
        console.log(res.data)
        this.setState({
          datos: res.data
        })
    }).catch(err=>{
      console.log(err.massage)
    })
  }

  render() {
    const characters = this.state.datos;
    return (
      <div>
        <header>
          <nav className="menu-fixed-trabajos-por-realizar">
            <div className="btnFlecha-TrabajosPorRealizar">
              <div className="btn_TrabajosPorRealizar">
                <Link to={`/TrabajadoresInicio/${this.state.numero_id_trabajador}`}>
                  <button className="btn">
                    <img
                      className="TrabajosPorRealizar_Flecha"
                      src="https://1.bp.blogspot.com/-OYlVxSxCItI/X6Ra_EEz0kI/AAAAAAAAIUY/dP6wDIIGGwY5LXcU-M4KM972oLfNJruOwCLcBGAsYHQ/s1054/Flecha.png"
                      alt="Retroceder"
                    />
                  </button>
                </Link>
              </div>
              <div className="divimg_TrabajosPorRealizar">
                <div>
                  <img
                    className="img_TrabajosPorRealizar_Barppi"
                    src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
                    alt="LogoBarppi"
                  />
                </div>
              </div>
              <div className="divBuscar_TrabajosPorRealizar">
                <Link to={`/TrabajadoresInicio/TrabajosPorRealizar/busquedaTrabajosPorRealizar/${this.state.numero_id_trabajador}`}>
                  <button className="btn imgBuscar_TrabajosPorRealizar_Logo">
                    <img
                      className="imgBuscar_TrabajosPorRealizar_Barppi"
                      src="https://1.bp.blogspot.com/-U4pggTu48lw/X6Ra_MTe7yI/AAAAAAAAIUc/6ZJ68yG58xMhVzSh_O3z4dH41Hg69JR7gCLcBGAsYHQ/s1053/Lupa.png"
                      alt="LogoBarppi"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </header>


        <div className="cards-fixed-trabajos-por-realizar">
          {characters.map((datosT) => {
            return (
              <div className="divCardTrabajosPorRealizar">
                <Link
                  className="link_TrabajosPorRealizar"
                  to={`/TrabajadoresInicio/TrabajosPorRealizar/CardTrabajosPorRealizar/${this.state.numero_id_trabajador}/${datosT.codigo_cliente}/${datosT.codigo_cita}`}
                >
                  <div className="card-TrabajosPorRealizar">
                    <div className="CardGrid_TrabajosPorRealizar">
                      <div className="divimgFotoPerfil_TrabajosPorRealizar">
                        <div className="imgdivcenterFotoPerfil_TrabajosPorRealizar">
                          <img
                            className="imgFotoPerfil_TrabajosPorRealizar"
                            src={datosT.FotoPerfil}
                            alt="Foto_Perfil"
                          />
                        </div>
                      </div>
                      <div className="divdatosCuerpo_TrabajosPorRealizar">
                        <div className="card_body_TrabajosPorRealizar">
                          <div className="div_TopCard_TrabajosPorRealizar">
                            <h5 className="Nombre_Trabajador_TrabajosPorRealizar">
                              {datosT.nombre1_Cliente}{` `}{datosT.nombre2_Cliente}{` `}{datosT.apellido1_Cliente}{` `}{datosT.apellido2_Cliente}
                            </h5>
                          </div>
                          <div className="div-grid-numero-direccion-TrabajosPorRealizar">
                            <p className="Numero_TrabajosPorRealizar">
                              Número telefonico: {datosT.telefono_cliente}
                            </p>
                            <p className="direccion_TrabajosPorRealizar">
                              Dirección:{datosT.direccion_cliente}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}


        </div>
      </div>
    );
  }
}

export default TrabajosPorRealizar;
