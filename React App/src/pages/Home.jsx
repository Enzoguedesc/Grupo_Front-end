import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/projetos.json";
import BarraTarefas from "../components/BarraTarefas/BarraTarefas";

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
      <BarraTarefas />
    </Base>
  )
}

export default Home
