import { DetalheArticle } from "./Style"

const DetalhamentoCard = (props) => {
    return(
        <DetalheArticle>
            <img src={props.url} alt="imagem"/>
            <div id="container-detal">
                <div>
                <h1>{props.titulo}</h1>
                <p id="detalhes">{props.detalhes}</p> 
                <img id="foto2"src="https://cdn.portal.estacio.br/Administracao_shutterstock_563114074_1865454718.webp"></img>
                </div>
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