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
import Paginacao from "../components/Paginacao/Paginacao";
import { useSearchParams } from "react-router-dom";

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
  const [params, setParams] = useSearchParams();

  useEffect( () => {
    if(params.has('tool') || params.has('courses') || params.has('semester') || params.has('campus') || params.has('nome')){
      setDadosPt(brutosPt.filter(
        (pro) => pro.ferramentas.toString().includes(params.get('tool')) || pro.curso == params.get('courses') || pro.periodo == params.get('semester') || pro.unidade == params.get('campus') || pro.colaboradores.toString().includes(params.get('nome'))
      ));
      setDadosEn(brutosEn.filter(
        (pro) => pro.ferramentas.toString().includes(params.get('tool')) || pro.curso == params.get('courses') || pro.periodo == params.get('semester') || pro.unidade == params.get('campus') || pro.colaboradores.toString().includes(params.get('nome'))
      ));
    }
    else{
      setDadosPt(brutosPt);
      setDadosEn(brutosEn);
    }
  }, [params])



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
          <label>{t("tool")} </label>
              <select className="filtro-container" onChange={ (e) => {if(params.get('tool') === null){params.append('tool', e.target.value);}else{params.set('tool', e.target.value);} setParams(params)}}>
                  <option value="Python" >Python</option>
                  <option value="Html" >Html</option>
                  <option value="CSS" >CSS</option>
                  <option value="JavaScript" >JavaScript</option>
                  <option value="Arduino" >Arduino</option>
              </select>
        </div>

        <div className="container_filtro">
          <label> {t("courses")} </label>
          <select className="filtro-container" onChange={ (e) => {if(params.get('courses') === null){params.append('courses', e.target.value);}else{params.set('courses', e.target.value);} setParams(params)}}>
              <option value="Direito" >Direito</option>
              <option value="Tech" >Tech</option>
              <option value="ADM" >ADM</option>
              <option value="Arquitetura" >Arquitetura</option>
              <option value="Engenharia" >Engenharia</option>
          </select>
        </div>

          <div className="container_filtro">
            <label>{t("semester")}</label>
            <select className="filtro-container" onChange={ (e) => {if(params.get('semester') === null){params.append('semester', e.target.value);}else{params.set('semester', e.target.value);} setParams(params)}}>
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
            <label> {t("campus")} </label>
            <select className="filtro-container" onChange={ (e) => {if(params.get('campus') === null){params.append('campus', e.target.value);}else{params.set('campus', e.target.value);} setParams(params)}}>
                <option value="RJ-Barra" >RJ-Barra</option>
                <option value="RJ-Centro" >RJ-Centro</option>
                <option value="SP" >São Paulo</option>
                <option value="SP-Faria" >SP-Faria Lima</option>
                <option value="BH" >Belo Horizonte</option>
                <option value="Brasilia" >Brasília</option>
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
      ? <button className="add_projeto">
          <svg className="icon_addProjeto" width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.125 19.375H22.875V23.125H19.125V26.875H15.375V23.125H11.625V19.375H15.375V15.625H19.125V19.375ZM41.625 8.125V11.875V49.375H7.875V41.875H0.375V0.625H34.125V8.125H41.625ZM30.375 38.125V4.375H4.125V38.125H30.375ZM37.875 11.875H34.125V41.875H11.625V45.625H37.875V11.875Z" fill="#111918"/>
          </svg>
          Add novo projeto
        </button>
      : <></>
    }

    <br></br>
    <br></br>

    <Paginacao/>

    <br></br>

    </Base>
    )
}

export default Home;
