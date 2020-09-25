import React from "react";
import "./StylesRegistroBarberos3.css";
import FileUpload from "../../FileUpload";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RegistroBarberos3() {
  const { register, handleSubmit, errors } = useForm();

  const [datos, setdatos] = useState({
    PrimerNombre: "",
    SegundoNombre: "",
    PrimerApellido: "",
    SegundoApellido: "",
    Correo: "",
    ConfirmarCorreo: "",
    Contrasena: "",
    ConfirmarContrasena: "",
    TelefonoCelular: "",
    DireccionResidencial: "",
    Documento: "",
    Pais: "",
    Ciudad: "",
    Foto: "",
  });

  const handleInputChange = (event) => {
    console.log(datos);
    setdatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (data, clean) => {
    clean.target.reset();
  };

  return (
    <div>
      <div className="btnFlechaRegistroBarberos">
        <div className="btnRegistroBarberos">
          <Link to="/RegistroBarberos/RegistroBarberos2">
            <button className="btn">
              <img
                className="RegistroBarberosFlecha"
                src="https://1.bp.blogspot.com/-Kx3H603WVwI/X07UEW5JQAI/AAAAAAAAHO8/dYMvzLNDFbk9N6QCHaanQQUFckaTGkW1gCLcBGAsYHQ/s1280/Retroseder.png"
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

      <div className="DivFatherFather">
        <h1 className="h4Header">Registrarse</h1>
        <div className="divFather">
          <div className="divBox">
            <h4 className="h1Header">Eres...</h4>
            <form className="col FormMain1C" onSubmit={handleSubmit(onSubmit)}>
              <div className="divBoxes">
                <p className="pCampoText">Eres...</p>

                <select
                  class="form-control borderBox"
                  type="radio"
                  name="PrimerNombre"
                  onChange={handleInputChange}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                >
                  <option selected>Eres...</option>
                  <option>Barbero</option>
                  <option>Peluquero</option>
                </select>
                <span className="text-danger text-small d-block mb-2">
                  {errors?.PrimerNombre?.message}
                </span>
              </div>
              <div className="divBoxes">
                <p className="pCampoText">Foto</p>
                <button
                  type="button"
                  class="btn btnimgUploader"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  Subir Fotografia
                </button>

                <div
                  class="modal fade"
                  id="staticBackdrop"
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
                        <FileUpload />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btnimgUploader"
                          data-dismiss="modal"
                        >
                          Oky
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divBoxes">
                <p className="pCampoText">Precio</p>
                <input
                  placeholder="Precio"
                  className="form-control borderBox"
                  type="number"
                  name="Precio"
                  onChange={handleInputChange}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
                <span className="text-danger text-small d-block mb-2">
                  {errors?.Precio?.message}
                </span>
              </div>

              <div className="divBoxes">
                <p className="pCampoText">Descripción</p>
                <textarea
                  placeholder="Escribe tu descripción como trabajador"
                  className="form-control borderBox"
                  type="text"
                  name="SegundoApellido"
                  onChange={handleInputChange}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
                <span className="text-danger text-small d-block mb-2">
                  {errors?.SegundoApellido?.message}
                </span>
              </div>
            </form>
            <div className="DivButon">
              <Link to="/IngresarTrabajador">
                <button className="btn Buton">SIGUIENTE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroBarberos3;
