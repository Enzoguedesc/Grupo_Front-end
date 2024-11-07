import { Link } from "react-router-dom";
import { Top } from "./Style";
import React, { useState } from 'react';
import Login from "../../pages/Login";


<div className="login">
{window.sessionStorage.getItem("accessToken") ? (
  <Link to="/logout">Logout</Link>
) : (
  <Link to="/login">Login</Link>
)}
</div>

const Header = () => (
  <Top>
      <img src="https://cdn.portal.estacio.br/Ibmec_logo_branco_97adecdb45.svg" alt='Logomarca-ibmec'/>
      <Link to="/" id="botao-home">Home</Link>
      <Link to="/sobre-nos" id="botao-sobre">Sobre-Nós</Link>
      {window.sessionStorage.getItem('accessToken')
        ? <Link to="/logout" id="botao-logout">Logout</Link>
        : <></>
      }

      <div className="languageselectorcontainer">
        <select className="languageselector" >
          <option value="pt" className="languageoption ptflag">PT-BR</option>
          <option value="en" className="languageoption enflag">ENG</option>
        </select>
      </div>
  </Top>

)




export default Header;
