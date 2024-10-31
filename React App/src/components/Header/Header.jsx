import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
      <img src="https://cdn.portal.estacio.br/Ibmec_logo_branco_97adecdb45.svg" alt='Logomarca-ibmec'/>
      <Link to="/" id="botao-home">Home</Link>
      <Link to="/sobre-nos" id="botao-sobre">Sobre-Nós</Link>
  </Top>
)
export default Header;