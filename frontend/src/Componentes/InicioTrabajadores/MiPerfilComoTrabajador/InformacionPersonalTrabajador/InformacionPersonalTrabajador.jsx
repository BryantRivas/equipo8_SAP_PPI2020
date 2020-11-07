import React, { Component } from "react";
import "./StylesInformacionPersonalTrabajador.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Link } from "react-router-dom";

class InformacionPersonalTrabajador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onChange = (date) => this.setState({ date });

  render() {
    const { date } = this.onChange;
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
                    <div className="form-group">
                      <select
                        className="form-control-InformacionPersonalTrabajador"
                        id="exampleFormControlSelect1"
                      >
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otro...</option>
                      </select>
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
                    <div className="body-div-grid-inputs-direccionTrabajador">
                      <input
                        type=""
                        placeholder="Dirección actual"
                        className="input-direccionTrabajador-InformacionPersonalTrabajador"
                      />
                      <input
                        type=""
                        placeholder="Nueva dirección"
                        className="input-direccionTrabajador-InformacionPersonalTrabajador"
                      />
                      <input
                        type=""
                        placeholder="Confirmar dirección"
                        className="input-direccionTrabajador-InformacionPersonalTrabajador"
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
                    <div className="body-div-grid-inputs-numeroTrabajador">
                      <input
                        placeholder="Número teléfonico actual"
                        className="input-numeroTrabajador-InformacionPersonalTrabajador"
                        type=""
                      />
                      <input
                        placeholder="Nuevo número teléfonico"
                        className="input-numeroTrabajador-InformacionPersonalTrabajador"
                        type=""
                      />
                      <input
                        placeholder="Confirmar número teléfonico"
                        className="input-numeroTrabajador-InformacionPersonalTrabajador"
                        type=""
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
                    <div className="body-div-grid-inputs-CorreoTrabajador">
                      <input
                        type="email"
                        placeholder="Correo electronico actual"
                        className="input-correoActualTrabajador-InformacionPersonalTrabajador"
                      />
                      <input
                        placeholder="Nuevo correo electronico"
                        className="input-correoNuevoTrabajador-InformacionPersonalTrabajador"
                        type="email"
                      />
                      <input
                        placeholder="Confirmar correo electronico"
                        className="input-correoNuevoTrabajador-InformacionPersonalTrabajador"
                        type="email"
                      />
                    </div>
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
                    <div className="body-div-grid-inputs-ContrasenaTrabajador">
                      <input
                        type="current-password"
                        placeholder="Contraseña actual"
                        className="input-contrasenaTrabajador-InformacionPersonalTrabajador"
                      />
                      <input
                        type="new-password"
                        placeholder="Nueva contraseña"
                        className="input-contrasenaTrabajador-InformacionPersonalTrabajador"
                      />
                      <input
                        type="new-password"
                        placeholder="Confirmar nueva contraseña"
                        className="input-contrasenaTrabajador-InformacionPersonalTrabajador"
                      />
                    </div>
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
                        type=""
                      />
                      <input
                        placeholder="Nuevo costo del trabajo"
                        className="input-costoTrabajoTrabajador-InformacionPersonalTrabajador"
                        type=""
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
