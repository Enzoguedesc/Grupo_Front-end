import { DetalheArticle } from "./Style"

const DetalhamentoCard = (props) => {
    return(
        <DetalheArticle>
            <img src={props.url} alt="imagem"/>
            <div id="container-detal">
                <h1>{props.titulo}</h1>
                <br></br>
                <h2>Descrição:</h2>
                <br></br>
                <p>{props.detalhes}</p>
                <br></br>
                <h2>Colaboradores:</h2>
                <ul>
                    {props.colaboradores.map(
                        (colaborador, index) => <li key={index}>{colaborador}</li> )}
                </ul>
                <h2>Ferramentas Utilizadas:</h2>
                <ul>
                    {props.ferramentas.map(
                        (ferramenta, index) => <li key={index}>{ferramenta}</li> )}
                </ul>
                <h2>Papel  dos colaboradores:</h2>
                <p>{props.papeis}</p>
            </div>
        </DetalheArticle>
    )
}

export default DetalhamentoCard