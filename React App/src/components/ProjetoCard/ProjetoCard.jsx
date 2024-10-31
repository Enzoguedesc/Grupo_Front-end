import { Link } from "react-router-dom";
import { Cartao } from "./Style";


const ProjetoCard = (props) => {
    return(
            <Cartao>
                <div className="titulo">{props.titulo}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
                <div className="ContainerDetalhes">
                    <p>{props.detalhes}</p>
                    <Link to={`detalhamento/${props.id}`}>Saiba mais</Link>
                </div>
            </Cartao>
    )
}


export default ProjetoCard;