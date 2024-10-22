import { Link } from "react-router-dom";
import { Imagem } from "./Style";


const ProjetoCard = (props) => {
    return(
            <Imagem>
                <div className="nome">{props.nome}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt eius consequatur unde harum voluptas numquam delectus!
                     Suscipit excepturi nesciunt voluptatum molestias assumenda rem ad, adipisci ab debitis, ipsam rerum.</p>
                <Link to='detalhamento'>Saiba mais</Link>
            </Imagem>
    )
}


export default ProjetoCard;