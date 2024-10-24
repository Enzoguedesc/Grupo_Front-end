import { DetalheArticle } from "./Style"

const DetalhamentoCard = (props) => {
    return(
        <DetalheArticle>
            <figure>
                <img src={props.url} alt="imagem"/>
            </figure>
            <h1>{props.titulo}</h1>
            <h2>Descrição</h2>
            <p>{props.detalhes}</p>
            <h2>Colaboradores</h2>
            <ul>
                {props.colaboradores.map(
                    (colaborador, index) => <li key={index}>{colaborador}</li> )}
            </ul>
            <h2>Ferramentas Utilizadas:</h2>
            <p>{props.ferramentas}</p>
            <h2>Papel  dos colaboradores:</h2>
            <p>{props.papeis}</p>
        </DetalheArticle>
    )
}

export default DetalhamentoCard