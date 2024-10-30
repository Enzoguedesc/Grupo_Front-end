import { Link } from "react-router-dom";
import { Imagem } from "./Style";


const ProjetoCard = (props) => {
    return(
            <Imagem>
                <div className="titulo">{props.titulo}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
                <div className="ContainerDetalhes">
                    <p>{props.detalhes}</p>
                    <Link to={`detalhamento/${props.id}`}>Saiba mais</Link>
                </div>
            </Imagem>
    )
}


export default ProjetoCard;