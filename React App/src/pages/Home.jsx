import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";

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

const projetos = ["Projeto1", "Projeto2", "Projeto3", "Projeto4", "Projeto5"];

  return (
    <Base>
      <h1>Projetos</h1>
      <ListContainer>
        {
          projetos.map((projeto, index) =>
          <ProjetoCard nome={projeto} key={index}/>)
        }
      </ListContainer>
    </Base>
  )
}

export default Home
