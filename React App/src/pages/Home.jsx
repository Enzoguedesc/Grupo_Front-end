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
    <div className="Containerpagina">
     
     <h2 className="titulopagina">Seja bem-vindo ao nosso espaço digital dedicado a explorar os projetos e portfólios dos alunos do IBMEC! </h2>
     <p className="textopagina">
      Aqui, você terá a oportunidade de conhecer o talento, 
      a dedicação e a criatividade de nossos estudantes, que transformam conhecimento em prática com uma visão inovadora e estratégica. 
      Cada projeto reflete não apenas o aprendizado acadêmico, mas também a aplicação de habilidades para resolver problemas do mundo real, alinhados com as exigências do mercado.
      </p>

    </div>
    <div className="filtro">
      
    <input id="barra-pesquisa" type="text" placeholder="Pesquisar" onChange={(e) => filtro(e.target.value)}  /> 
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="lupa" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11.5C7.5 10.0999 7.5 9.3998 7.77247 8.86503C8.01217 8.39463 8.39463 8.01217 8.86503 7.77247C9.3998 7.5 10.0999 7.5 11.5 7.5H48.5C49.9002 7.5 50.6003 7.5 51.135 7.77247C51.6055 8.01217 51.9878 8.39463 52.2275 8.86503C52.5 9.3998 52.5 10.0999 52.5 11.5V15.8431C52.5 16.4546 52.5 16.7604 52.431 17.0481C52.3698 17.3032 52.2688 17.547 52.1315 17.7707C51.977 18.023 51.7608 18.2392 51.3285 18.6716L36.1715 33.8285C35.7393 34.2607 35.523 34.477 35.3685 34.7292C35.2312 34.953 35.1303 35.1968 35.069 35.452C35 35.7398 35 36.0455 35 36.6567V42.5L25 52.5V36.6567C25 36.0455 25 35.7398 24.9309 35.452C24.8697 35.1968 24.7687 34.953 24.6316 34.7292C24.477 34.477 24.2608 34.2607 23.8284 33.8285L8.67158 18.6716C8.2392 18.2392 8.023 18.023 7.8684 17.7707C7.73133 17.547 7.63033 17.3032 7.56908 17.0481C7.5 16.7604 7.5 16.4546 7.5 15.8431V11.5Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    

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
