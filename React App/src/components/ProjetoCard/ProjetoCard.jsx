import { Link } from "react-router-dom";
import { Imagem } from "./Style";


const ProjetoCard = (props) => {
    return(
            <Imagem>
                <div className="nome">{props.titulo}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
                <p>{props.detalhes}</p>
                <Link to={`detalhamento/${props.id}`}>Saiba mais</Link>
            </Imagem>
    )
}


export default ProjetoCard;