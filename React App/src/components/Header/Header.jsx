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

  <div className="languageselectorcontainer">

    <select className="languageselector" >
      <option value="pt" className="languageoption ptflag"><b>PT</b><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg" alt="Brasil" /></option>
      <option value="en" className="languageoption enflag"><b>ENG</b> <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg" alt="EUA" /></option>
    </select>

  </div>

  
  </Top>
  
)




export default Header;
