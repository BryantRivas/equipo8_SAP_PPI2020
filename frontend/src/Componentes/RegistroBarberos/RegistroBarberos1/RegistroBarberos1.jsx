import React from "react";
import "./StylesRegistroBarberos.css";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { BrowserRouter as Link } from "react-router-dom";

function RegistroBarberos1() {
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
        <nav className="menu-fixed-registroBarberos-1">
          <div className="btnFlechaRegistroBarberos">
            <div className="btnRegistroBarberos">
              <Link to="/RegistroBarberos">
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
      <div className="campos-fixed-registroBarberos-1">
        <div className="DivFatherFather">
          <h1 className="h4Header">Registrarse</h1>
          <div className="divFather">
            <div className="divBox">
              <h4 className="1Header">Correo y Contraseña</h4>
              <form
                className="col FormMain1C"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="divBoxes">
                  <p className="pCampoText">Correo</p>
                  <input
                    placeholder="Correo"
                    className="form-control borderBox"
                    type="email"
                    name="Correo"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.Correo?.message}
                  </span>
                </div>
                <div className="divBoxes">
                  <p className="pCampoText">Confirmar Correo</p>
                  <input
                    placeholder="Confirmar Correo"
                    className="form-control borderBox"
                    type="email"
                    name="ConfirmarCorreo"
                    onChange={handleInputChange}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.ConfirmarCorreo?.message}
                  </span>
                </div>
                <div className="divBoxes">
                  <p className="pCampoText">Contraseña</p>
                  <input
                    placeholder="Contraseña"
                    className="form-control borderBox"
                    type="password"
                    name="Contrasena"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.Contrasena?.message}
                  </span>
                </div>

                <div className="divBoxes">
                  <p className="pCampoText">Confirmar Contraseña</p>
                  <input
                    placeholder="Confirmar Contraseña"
                    className="form-control borderBox"
                    type="password"
                    name="ConfirmarContrasena"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.ConfirmarContrasena?.message}
                  </span>
                </div>
              </form>
              <div className="DivButon">
                <Link to="/RegistroBarberos/RegistroBarberos2">
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

export default RegistroBarberos1;
