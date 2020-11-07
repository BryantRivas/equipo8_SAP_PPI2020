import React from "react";
import "./StylesRegistroBarberos.css";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

function RegistroBarberos() {
  const { register, handleSubmit, watch, errors } = useForm();

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
    console.log(data);
  };

  return (
    <div>
      <header>
        <nav className="menu-fixed-registroBarberos">
          <div className="btnFlechaRegistroBarberos">
            <div className="btnRegistroBarberos">
              <Link to="/IngresarTrabajador">
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
      <div className="campos-fixed-registroBarberos">
        <div className="DivFatherFather">
          <h1 className="h4Header">Registrarse</h1>
          <div className="divFather">
            <div className="divBox">
              <h4 className="h1Header">Nombres y Apellidos</h4>
              <form className="FormMain1C" onSubmit={handleSubmit(onSubmit)}>
                <div className="divBoxes">
                  <p className="pCampoText">Primer Nombre</p>
                  <input
                    className="form-control borderBox"
                    placeholder="Primer Nombre"
                    type="text"
                    name="PrimerNombre"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.PrimerNombre?.message}
                  </span>
                </div>
                <div className="divBoxes">
                  <p className="pCampoText">Segundo Nombre</p>
                  <input
                    className="form-control borderBox"
                    placeholder="Segundo Nombre"
                    type="text"
                    name="SegundoNombre"
                    onChange={handleInputChange}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.SegundoNombre?.message}
                  </span>
                </div>
                <div className="divBoxes">
                  <p className="pCampoText">Primer Apellido</p>
                  <input
                    className="form-control borderBox"
                    placeholder="Primer Apellido"
                    type="text"
                    name="PrimerApellido"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.PrimerApellido?.message}
                  </span>
                </div>

                <div className="divBoxes">
                  <p className="pCampoText">Segundo Apellido</p>
                  <input
                    className="form-control borderBox"
                    placeholder="Segundo Apellido"
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
                <Link to="/RegistroBarberos/RegistroBarberos1">
                  <button type="submit" className="btn Buton">
                    SIGUIENTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroBarberos;
