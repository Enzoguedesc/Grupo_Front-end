import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect, useState } from "react";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/projetos.json";

const Home = () => {

  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[])

  const [dados, setDados] = useState(brutos);

  const filtro = (entrada) => {
    setDados(brutos.filter(
      (ele) => ele.titulo.toLowerCase().includes(entrada.toLowerCase()) || ele.detalhes.toLowerCase().includes(entrada.toLowerCase()) || ele.colaboradores.toString().toLowerCase().includes(entrada.toLowerCase())
    ))
  }

  return (
    <Base>
      <h1 className="NomeProjetos">Projetos</h1>
      <input type="text" placeholder="Pesquisar" onChange={(e) => filtro(e.target.value)} />
      <ListContainer>
        {
          dados.map((pro, index) =>
          <ProjetoCard titulo={pro.titulo} key={index} id={pro.id} detalhes={pro.detalhes} src={pro.url} />)
        }
      </ListContainer>
    </Base>
  )
}

export default Home
