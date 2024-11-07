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
      <input id="barra-pesquisa" type="text" placeholder="Pesquisar" onChange={(e) => filtro(e.target.value)} />
      <ListContainer>
        {
          dados.map((pro, index) =>
          <ProjetoCard titulo={pro.titulo} key={index} id={pro.id} detalhes={pro.detalhes} src={pro.url} />)
        }
      </ListContainer>

      
    <svg className="icon-addProjeto" width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.125 19.375H22.875V23.125H19.125V26.875H15.375V23.125H11.625V19.375H15.375V15.625H19.125V19.375ZM41.625 8.125V11.875V49.375H7.875V41.875H0.375V0.625H34.125V8.125H41.625ZM30.375 38.125V4.375H4.125V38.125H30.375ZM37.875 11.875H34.125V41.875H11.625V45.625H37.875V11.875Z" fill="#111918"/>
    </svg>
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
