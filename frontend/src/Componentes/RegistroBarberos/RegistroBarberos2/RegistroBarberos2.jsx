import React from "react";
import "./StylesRegistroBarberos2.css";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { BrowserRouter as Link } from "react-router-dom";

function RegistroBarberos2() {
  const { register, handleSubmit, errors } = useForm();

  const [datos, setdatos] = useState({
    PrimerNombre: "",
    SegundoNombre: "",
    PrimerApellido: "",
    SegundoApellido: "",
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
      <header>
        <nav className="menu-fixed-registroBarberos-2 ">
          <div className="btnFlechaRegistroBarberos">
            <div className="btnRegistroBarberos">
              <Link to="/RegistroBarberos/RegistroBarberos1">
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

      <div className="campos-fixed-registroBarberos-2">
        <div className="DivFatherFather">
          <h1 className="h4Header">Registrarse</h1>
          <div className="divFather">
            <div className="divBox">
              <h4 className="1Header">Adicionales</h4>
              <form
                className="col FormMain1C"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="divBoxes">
                  <p className="pCampoText">Teléfono Celular</p>
                  <input
                    placeholder="Teléfono Celular"
                    className="form-control borderBox"
                    type="number"
                    name="TelefonoCelular"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.TelefonoCelular?.message}
                  </span>
                </div>
                <div className="divBoxes">
                  <p className="pCampoText">Dirección Residencial</p>
                  <input
                    placeholder="Dirección Residencial"
                    className="form-control borderBox"
                    type="text"
                    name="DireccionResidencial"
                    onChange={handleInputChange}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.DireccionResidencial?.message}
                  </span>
                </div>
                <div className="divBoxes">
                  <p className="pCampoText">Documento de I.D.</p>
                  <input
                    placeholder="Identificación"
                    className="form-control borderBox"
                    type="number"
                    name="Documento"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.Documento?.message}
                  </span>
                </div>

                <div className="divBoxes">
                  <p className="pCampoText">País</p>
                  <input
                    placeholder="País"
                    className="form-control borderBox"
                    type="text"
                    name="Pais"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.Pais?.message}
                  </span>
                </div>

                <div className="divBoxes">
                  <p className="pCampoText">Nombre Ciudad</p>
                  <input
                    placeholder="Nombre Ciudad"
                    className="form-control borderBox"
                    type="text"
                    name="Ciudad"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Ciudad",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.ConfirmarContrasena?.message}
                  </span>
                </div>
              </form>
              <div className="DivButon">
                <Link to="/RegistroBarberos/RegistroBarberos3">
                  <button className="btn Buton">SIGUIENTE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroBarberos2;
