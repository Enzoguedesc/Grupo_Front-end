import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";

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
      {
       projetos.map((projeto, index) =>
        <ProjetoCard nome={projeto} key={index}/>

      )
      }
    </Base>
  )
}

export default Home