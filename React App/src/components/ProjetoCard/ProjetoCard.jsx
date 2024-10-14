import { Imagem } from "./Style";


const ProjetoCard = (props) => {
    return(
            <Imagem>
                <div className="nome">{props.nome}</div>
                <figure>
                    <img src={props.src} alt="Imagem"/>
                </figure>
            </Imagem>
    )
}


export default ProjetoCard;