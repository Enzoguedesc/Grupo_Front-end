import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/projetos.json";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */

  return (
    <Base>
      <h1 className="NomeProjetos">Projetos</h1>
      <ListContainer>
        {
          dados.map((pro, index) =>
          <ProjetoCard titulo={pro.titulo} key={index} id={pro.id} detalhes={pro.detalhes} src={pro.url} />)
        }
      </ListContainer>
    <div className="area-add-projetos">
      <div className="add-projeto"></div>
      <div className="escrita-add-projeto">Add novo projeto</div>
    </div>

<br></br>
<br></br>

      <div className="area-paginacao">
        <div className="botao-paginacao">
          <div className="pagina-1">Página 1</div>
          </div>
      </div>
    

<br></br>

    </Base>
  )
}

export default Home
