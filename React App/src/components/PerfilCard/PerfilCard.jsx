
import { Perfil } from "./Style"

const PerfilCard = (props) => {
    return(
    <Perfil>
            <div className="nome">{props.nome}</div>
            <figure>
                <img className="imgPerfil" src={props.src} alt="imagem"/>
            </figure>
            <div className="detalhes">{props.detalhes}</div>

    </Perfil>
)
}

export default PerfilCard;