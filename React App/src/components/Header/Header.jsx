import { Link } from "react-router-dom";
import { Top } from "./Style";
import React from 'react';
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";


<div className="login">
{window.sessionStorage.getItem("accessToken") ? (
  <Link to="/logout">Logout</Link>
) : (
  <Link to="/login">Login</Link>
)}
</div>

const Header = () => {
  const { t } = useTranslation();

  return(
    <Top>
        <a href="https://www.ibmec.br/" className="link-icon-ibmec"><img src="https://cdn.portal.estacio.br/Ibmec_logo_branco_97adecdb45.svg" alt='Logomarca-ibmec'/></a>
        <Link to="/" id="botao-home">Home</Link>
        <Link to="/sobre-nos" id="botao-sobre">{t("aboutButton")}</Link>
        {window.sessionStorage.getItem('accessToken')
          ? <Link to="/logout" id="botao-logout">Logout</Link>
          : <></>
        }

        <div className="languageselectorcontainer">
          <select className="languageselector" value={i18next.language} onChange={(e) => {changeLanguage(e.target.value, (err, t) => { if (err) return console.log('something went wrong loading', err); t('key'); })}}>
            <option value="pt" className="languageoption ptflag">PT-BR</option>
            <option value="en" className="languageoption enflag">ENG</option>
          </select>
        </div>
    </Top>
  );
}




export default Header;
