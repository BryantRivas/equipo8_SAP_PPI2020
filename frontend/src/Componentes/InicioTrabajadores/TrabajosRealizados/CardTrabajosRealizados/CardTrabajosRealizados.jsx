import React, { Component } from "react";
import "./StylesCardTrabajosRealizados.css";

import { Link } from "react-router-dom";

class CardTrabajosPorRealizar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data1 } = this.props;
    return (
      <div>
        <div className="btnFlechaInicioUsuarios">
          <div className="btnInicioUsuarios">
            <Link to="/TrabajadoresInicio/TrabajosRealizados">
              <button className="btn">
                <img
                  className="InicioUsuariosFlecha"
                  src="https://1.bp.blogspot.com/-Kx3H603WVwI/X07UEW5JQAI/AAAAAAAAHO8/dYMvzLNDFbk9N6QCHaanQQUFckaTGkW1gCLcBGAsYHQ/s1280/Retroseder.png"
                  alt="Retroceder"
                />
              </button>
            </Link>
          </div>
          <div className="divimgInicioUsuarios">
            <div className="imgInicioUsuariosLogo">
              <img
                className="imgInicioUsuariosBarppi"
                src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
                alt="LogoBarppi"
              />
            </div>
          </div>
          <div className="divBuscarInicioUsuarios">
            <button className="btn imgBuscarInicioUsuariosLogo">
              <img
                className="imgBuscarInicioUsuariosBarppi"
                src="https://1.bp.blogspot.com/--XV_byQLSAY/X1QgjWxRh3I/AAAAAAAAHP0/rGuxK8rYUWgFy0sQfftCmqohdBXqD1ugwCLcBGAsYHQ/s1280/BotonBuscarSinfondo.jpg"
                alt="LogoBarppi"
              />
            </button>
          </div>
        </div>




        <div className="div-top-CardTrabajosRealizados">
          <div className="div-img-perfil_trabajador-CardTrabajosRealizados">
            <div className="div-div-img-perfil_trabajador-CardTrabajosRealizados">
              <img
                className="img-perfil_trabajador-CardTrabajosRealizados"
                src="https://us.123rf.com/450wm/naropano/naropano1606/naropano160600550/58727711-fondo-gris-oscuro-el-dise%C3%B1o-de-textura-fondo-del-grunge-.jpg?ver=6"
                alt=""
              />
            </div>
          </div>
          <div className="div-nombreTrabajador-CardTrabajosRealizados">
            <div className="div-nombreCompletoDelTrabajador-CardTrabajosRealizados">
              Jane Smith
            </div>
          </div>
          <div className="div-nombreCiudadTrabajador-CardTrabajosRealizados">
            <div className="div-div-nombreCiudadTrabajador-CardTrabajosRealizados">
              Ciudad
            </div>
          </div>
          <div className="div-tipoTrabajador-CardTrabajosRealizados">
            <div className="div-div-tipoTrabajador-CardTrabajosRealizados">
              BARBERO
            </div>
          </div>
          <div className="div-contoTrabajoTrabajador-CardTrabajosRealizados">
            <div className="div-div-contoTrabajoTrabajador-CardTrabajosRealizados">
              $12.0000
            </div>
          </div>
        </div>

        <div className="div-bot-CardTrabajosRealizados">
          <div className="div-DescripciondelTrabajador-CardTrabajosRealizados">
            <div className="div-div-TituloDescripcion-CardTrabajosRealizados">
              DESCRIPCION
            </div>
            <div className="div-div-TextoDescripcion-CardTrabajosRealizados">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              optio omnis voluptate aliquam voluptatibus adipisci incidunt sit
              accusamus, veritatis possimus harum quam recusandae, pariatur
              atque unde voluptatum magni labore sint. Deserunt possimus
              exercitationem porro, temporibus laborum quasi iusto aliquam
              libero cupiditate.
            </div>
          </div>
          <div className="div-direccionTrabajador-CardTrabajosRealizados">
            <div className="div-div-TitulodireccionTrabajador-CardTrabajosRealizados">
              Dirección
            </div>
            <div className="div-div-TextodireccionTrabajador-CardTrabajosRealizados">
              Carrera lorem
            </div>
          </div>
          <div className="div-CorreoElectronicoTrabajador-CardTrabajosRealizados">
            <div className="div-div-TituloCorreoElectronicoTrabajador-CardTrabajosRealizados">
              Correo Electronico
            </div>
            <div className="div-div-TextoCorreoElectronicoTrabajador-CardTrabajosRealizados">
              Example@gmail.com
            </div>
          </div>
          <div className="div-numeroTelefonicoTrabajador-CardTrabajosRealizados">
            <div className="div-div-TitulonumeroTelefonicoTrabajador-CardTrabajosRealizados">
              Número Télefonico
            </div>
            <div className="div-div-TextonumeroTelefonicoTrabajador-CardTrabajosRealizados">
              4187277
            </div>
          </div>
        </div>
            
            
         
        
      </div>
    );
  }
}

export default CardTrabajosPorRealizar;
