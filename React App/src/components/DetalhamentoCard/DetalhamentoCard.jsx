
const DetalhamentoCard = (props) => {
    return(
        <div>
            <figure>
                <img src={props.url} />
            </figure>
            <h1>{props.titulo}</h1>^
            <h2>Descrição</h2>
            <p>{props.detalhes}</p>
        </div>
    )
}

export default DetalhamentoCard