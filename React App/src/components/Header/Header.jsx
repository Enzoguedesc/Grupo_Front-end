import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div className="Botoes">
      <img src="https://cdn.portal.estacio.br/Ibmec_logo_branco_97adecdb45.svg" alt='Logomarca-ibmec'/>
      <Link to="/">Home</Link>
      <Link to="/sobre-nos">Sobre-Nós</Link>
    </div>
  </Top>
)
export default Header;