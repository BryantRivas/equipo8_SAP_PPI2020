import React from "react";
import "./StylesInicioPrincipal.css";

import { Link } from "react-router-dom";

const InicioPrincipal = () => {
  return (
    <div className="InicioPrincipalDivFather">
      <div>
        <div className="InicioPrincipalBOTON">
          <img
            className="InicioPrincipalIMAGEN"
            src="https://1.bp.blogspot.com/-03a8qmALrxM/X03AZ0jV5LI/AAAAAAAAHOc/AVcOiDX1mvEM45J9VASPR9coUqJJRaZ2gCLcBGAsYHQ/s1000/Barppilogo.png"
            alt="BarppiPrincipal"
          />
        </div>
        {/* 
        <div>
        
          <img
            className="img-1 my-custom-shake shake-constant "
            src="https://1.bp.blogspot.com/-zzLuzcxIFJs/X161jaOCfSI/AAAAAAAAHTI/qhevsGCXwP88ffCTX1RrweVY94SuUxWNwCLcBGAsYHQ/s300/1.png"
            alt=""
          />
          <img
            className="img-2 my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-qsFXHCGj5gU/X161jYE4TrI/AAAAAAAAHTQ/eXw9I3MLf1YPto10pw81PwIdscb8qpj1ACLcBGAsYHQ/s300/2.png"
            alt=""
          />
          <img
            className="img-3 my-custom-shake shake-constant "
            src="https://1.bp.blogspot.com/-FUOwwCGVj7w/X161jTjNMtI/AAAAAAAAHTM/UgZ0PrUb2zI7YWmf4yAkp6X04yBFsYffgCLcBGAsYHQ/s300/3.png"
            alt=""
          />
          <img
            className="img-4 my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-joJTAWMxHI4/X161jQiVLAI/AAAAAAAAHTU/XS-L8aReeKU5n63H8SGZ0hO0Yy9k2YE0wCLcBGAsYHQ/s300/4.png"
            alt=""
          />
          <img
            className="img-5 my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-zY-krwJfp7w/X161jm6hSUI/AAAAAAAAHTY/I2RDbIwlvmcuuQT1AxJMM9vWM9H55zOtQCLcBGAsYHQ/s300/5.png"
            alt=""
          />
          <img
            className="img-6 my-custom-shake shake-constant"
            src="https://1.bp.blogspot.com/-nB-8khtqvAc/X161j-fFd0I/AAAAAAAAHTc/HbcD8NXO0MwEUOQPL9GmwMee8k3De0q3QCLcBGAsYHQ/s300/6.png"
            alt=""
          />
        </div>
        */}

        <div className="divInicioPrincipalBot">
          <div className="divInicioPrincipal">
            <Link
              className="btn btnInicioPrincipalU boton2"
              to="/UsuariosInicio"
            >
              USUARIO
            </Link>
            <Link
              to="/IngresarTrabajador"
              className="btn btnInicioPrincipalT boton"
            >
              TRABAJADOR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioPrincipal;
