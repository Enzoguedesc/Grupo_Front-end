import { Link } from "react-router-dom";
import { Cartao } from "./Style";
import { useTranslation } from "react-i18next";


const ProjetoCard = (props) => {
    const { t } = useTranslation();

    return(
            <Cartao>
                <div className="titulo">{props.titulo}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
                <div className="ContainerDetalhes">
                    <p>{props.detalhes}</p>
                    <Link to={`detalhamento/${props.id}`}>{t("detailButton")}</Link>
                </div>
            </Cartao>
    )
}


export default ProjetoCard;