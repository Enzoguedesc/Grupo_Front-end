import { useTranslation } from "react-i18next";
import { DetalheArticle } from "./Style"

const DetalhamentoCard = (props) => {
    const { t } = useTranslation();

    return(
        <DetalheArticle>
            <img src={props.url} alt="imagem"/>
            <div id="container-detal">
                <div>
                <h1>{props.titulo}</h1>
                <p id="detalhes">{props.detalhes}</p>
                <img id="foto2"src={props.foto}></img>
                </div>
                <br></br>
                <h2>{t("contributors")}:</h2>
                <ul>
                    {props.colaboradores.map(
                        (colaborador, index) => <li key={index}>{colaborador}</li> )}
                </ul>
                <h2>{t("tools")}:</h2>
                <ul>
                    {props.ferramentas.map(
                        (ferramenta, index) => <li key={index}>{ferramenta}</li> )}
                </ul>
                <h2>{t("jobs")}:</h2>
                <p>{props.papeis}</p>

            </div>
        </DetalheArticle>
    )
}

export default DetalhamentoCard