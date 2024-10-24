import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div className="Botoes">
      <img src="https://cdn.portal.estacio.br/1_Desktop_ibmec_logo_430884bed1.svg" alt='Logomarca-ibmec'/>
      <Link to="/">Home</Link>
      <Link to="/sobre-nos">Sobre-Nós</Link>
    </div>
    <div className="Pesquisar">
      <form>
        <input type="search" id="Pesquisar" name="q" />
        <button>Pesquisar</button>
      </form>
    </div>
  </Top>
)
export default Header;