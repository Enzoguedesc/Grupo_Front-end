import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect, useState } from "react";
import ProjetoCard from "../components/ProjetoCard/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutosPt from "../data/projetosPt.json";
import brutosEn from "../data/projetosEn.json";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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

  const { t } = useTranslation();
  const [dadosPt, setDadosPt] = useState(brutosPt);
  const [dadosEn, setDadosEn] = useState(brutosEn);



  const filtro = (entrada) => {
      setDadosPt(brutosPt.filter(
        (ele) => ele.titulo.toLowerCase().includes(entrada.toLowerCase()) || ele.detalhes.toLowerCase().includes(entrada.toLowerCase()) || ele.colaboradores.toString().toLowerCase().includes(entrada.toLowerCase())
      ))
      setDadosEn(brutosEn.filter(
        (ele) => ele.titulo.toLowerCase().includes(entrada.toLowerCase()) || ele.detalhes.toLowerCase().includes(entrada.toLowerCase()) || ele.colaboradores.toString().toLowerCase().includes(entrada.toLowerCase())
      ))
  }

  return (
    <Base>
      <div className="Containerpagina">
        <h2 className="titulopagina">
          {t("welcomeTitle")}
        </h2>
        <p className="textopagina">
          {t("welcomeMessage")}
        </p>
      </div>

      <div className="filtro">
        <div className="container_filtro">
          <label> Ferramentas</label>
            <select className="filtro-container">
              <option value="Python" >Python</option>
              <option value="Html" >Html</option>
              <option value="CSS" >CSS</option>
              <option value="JavaScript" >JavaScript</option>
              <option value="Arduino" >Arduino</option>
            </select>
        </div>

        <div className="container_filtro">
          <label> Cursos </label>
            <select className="filtro-container">
              <option value="Direito" >Direito</option>
              <option value="Tech" >Tech</option>
              <option value="ADM" >ADM</option>
              <option value="Arquitetura" >Arquitetura</option>
              <option value="Engenharia" >Engenharia</option>
            </select>
        </div>

        <div className="container_filtro">
          <label> Períodos </label>
            <select className="filtro-container">
              <option value="1º-Período" >1º Período</option>
              <option value="2º-Período" >2º Período</option>
              <option value="3º-Período" >3º Período</option>
              <option value="4º-Período" >4º Período</option>
              <option value="5º-Período" >5º Período</option>
              <option value="6º-Período" >6º Período</option>
              <option value="7º-Período" >7º Período</option>
              <option value="8º-Período" >8º Período</option>
            </select>
        </div>

        <div className="container_filtro">
            <label> Unidades </label>
              <select className="filtro-container">
                <option value="Barra" >Barra da Tijuca</option>
                <option value="Centro" >Centro</option>
              </select>
        </div>
      </div>

      <input id="barra-pesquisa" type="text" placeholder={t("search")} onChange={(e) => filtro(e.target.value)}  />

      <ListContainer>
        {
          i18next.language == 'pt'
          ? dadosPt.map((pro, index) => <ProjetoCard titulo={pro.titulo} key={index} id={pro.id} detalhes={pro.detalhes} src={pro.url} />)
          : dadosEn.map((pro, index) => <ProjetoCard titulo={pro.titulo} key={index} id={pro.id} detalhes={pro.detalhes} src={pro.url} />)
        }
      </ListContainer>


    {window.sessionStorage.getItem('accessToken')
          ?<button className="add_projeto">
          <svg className="icon_addProjeto" width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.125 19.375H22.875V23.125H19.125V26.875H15.375V23.125H11.625V19.375H15.375V15.625H19.125V19.375ZM41.625 8.125V11.875V49.375H7.875V41.875H0.375V0.625H34.125V8.125H41.625ZM30.375 38.125V4.375H4.125V38.125H30.375ZM37.875 11.875H34.125V41.875H11.625V45.625H37.875V11.875Z" fill="#111918"/>
          </svg>
    Add novo projeto</button>
          : <></>
        }

    <br></br>
    <br></br>


      <div className="paginacao">
        <div className="pagination">
          <ul className="pagination">
            <li>
              <a href=""
                ><span aria-hidden="true">&laquo;</span
                ><span className="visuallyhidden">previous set of pages</span></a
              >
            </li>
            <li>
              <a href="" aria-current="page"><span className="visuallyhidden">page </span>1</a>
            </li>
            <li>
              <a href=""
                ><span className="visuallyhidden">page </span>2</a
              >
            </li>
            <li>
              <a href=""><span className="visuallyhidden">page </span>3</a>
            </li>
            <li>
              <a href=""><span className="visuallyhidden">page </span>4</a>
            </li>
            <li>
              <a href=""
                ><span className="visuallyhidden">next set of pages</span
                ><span aria-hidden="true">&raquo;</span></a
              >
            </li>
          </ul>
        </div>
      </div>

      <br></br>

    </Base>
    )
}

export default Home;
