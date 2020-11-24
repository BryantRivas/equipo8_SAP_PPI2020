import React, { Component } from "react";
import "./StylesbusquedaTrabajosRealizados.css";
import axios from "axios";

import { Link } from "react-router-dom";

class BusquedaTrabajosRealizados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_id_trabajador: this.props.numero_id_trabajador,
      busqueda: "",
      datos: [],
      datosB: [],
    };
  }

  componentDidMount() {
    //https://barppi.herokuapp.com/api/trabajador
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res.data);
        this.setState({
          datos: res.data.results,
          datosB: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }

  filtrarElementos = () => {
    var search = this.state.datos.filter((item) => {
      if (
        item.name.includes(this.state.busqueda) ||
        item.name.toLowerCase().includes(this.state.busqueda) ||
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda) ||
        item.name.toUpperCase().includes(this.state.busqueda) ||
        item.name
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda)
      ) {
        return item;
      }
    });
    this.setState({ datosB: search });
  };

  onChange = async (e) => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    this.filtrarElementos();
    console.log(this.state.busqueda);
  };

  render() {
    console.log(this.state.datos);
    console.log(this.state.datosB);
    const characters = this.state.datosB;

    return (
      <div>
        <header>
          <nav className="menu-fixed-busqueda-trabajosRealizados">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/TrabajadoresInicio/TrabajosRealizados/${this.state.numero_id_trabajador}`}>
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

        <div className="busqueda-fixed-trabajosRealizados">
          <div className="div-texto-buscar-buscarTrabajosPorRealizar">
            Buscar
          </div>
          <div className="div-input-buscar-buscarTrabajosPorRealizar">
            <input
              placeholder="Nombre del trabajo realizados"
              className="input-buscar-buscarTabajosPorRealizar"
              type="text"
              autoComplete="off"
              id="BUSQUEDA"
              name="busqueda"
              value={this.state.busqueda}
              onChange={this.onChange}
            />
          </div>
        </div>
        <main>
          <div className="cards-fixed-trabajosRealizados">
            {characters.map((datosT) => {
              return (
                <div className="divCardTrabajosRealizados">
                  <Link
                    className="link_TrabajosRealizados"
                    to={`/TrabajadoresInicio/TrabajosRealizados/CardTrabajosRealizados/${datosT.id}`}
                  >
                    <div className="card-TrabajosRealizados">
                      <div className="CardGrid_TrabajosRealizados">
                        <div className="divimgFotoPerfil_TrabajosRealizados">
                          <div className="imgdivcenterFotoPerfil_TrabajosRealizados">
                            <img
                              className="imgFotoPerfil_TrabajosRealizados"
                              src={datosT.image}
                              alt="Foto_Perfil"
                            />
                          </div>
                        </div>
                        <div className="divdatosCuerpo_TrabajosRealizados">
                          <div className="card_body_TrabajosRealizados">
                            <div className="div_TopCard_TrabajosRealizados">
                              <h5 className="Nombre_Trabajador_TrabajosRealizados">
                                {datosT.name}
                              </h5>
                            </div>
                            <div className="div-grid-numero-direccion-TrabajosRealizados">
                              <p className="Numero_TrabajosRealizados">
                                Número telefonico: {datosT.telefono}
                              </p>
                              <p className="direccion_TrabajosRealizados">
                                Dirección:{datosT.direccion}
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
        </main>
      </div>
    );
  }
}

export default BusquedaTrabajosRealizados;
