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


  return (
    <Base>
      <h1>
     Primeira Página Web React
      </h1>
      <ProjetoCard nome="Projeto 1"/>
    </Base>
  )
}

export default Home