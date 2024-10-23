
const DetalhamentoCard = (props) => {
    return(
        <div>
            <figure>
                <img src={props.url} />
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
        </div>
    )
}

export default DetalhamentoCard