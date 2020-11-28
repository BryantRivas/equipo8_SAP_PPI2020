import React, { Component } from "react";
import "./StylesinfoTrabajadorUsuario.css";
import axios from "axios";

import { Link, Redirect, withRouter } from "react-router-dom";

class infoTrabajadorUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
        numero_id_trabajador: this.props.numero_id_trabajador
    };
  }


  render(){

    return (
      <div>
        <header>
          <nav className="menu-fixed-ingresarTrabajador">
            <div className="btnFlechaRegistroBarberos">
              <div className="btnRegistroBarberos">
                <Link to={`/PerfilTrabajadorUsuario2/inicioUsuarios/${this.state.numero_id_trabajador}`}>
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

        <div>
         Esta es la parte donde se muestra la informacion del trabajador despues de agendar la cita en la  
        </div>
      </div>
    );
  }
  
};

export default withRouter(infoTrabajadorUsuario);
