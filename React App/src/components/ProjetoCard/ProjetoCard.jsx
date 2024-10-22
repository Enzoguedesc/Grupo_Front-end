import { Link } from "react-router-dom";
import { Imagem } from "./Style";


const ProjetoCard = (props) => {
    return(
            <Imagem>
                <div className="nome">{props.nome}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
                <p>Desenvolvimento de um sistema inovador de portfólios do zero, com foco em usabilidade, organização e inovação. Utilizando Html, CSS, JavaScript e o Figma.</p>
                <Link to='detalhamento'>Saiba mais</Link>
            </Imagem>
    )
}


export default ProjetoCard;