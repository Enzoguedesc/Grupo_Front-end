import { DetalheArticle } from "./Style"

const DetalhamentoCard = (props) => {
    return(
        <DetalheArticle>
            <figure>
                <img src="https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem"/>
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