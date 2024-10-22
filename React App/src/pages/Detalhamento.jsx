import Base from "./Base";
import dados from "../data/projetos.json";
import { useParams } from "react-router-dom";


const Detalhamento = () => {
    const { id } = useParams();

    const dadosFiltrados = dados.filter(
        (pro) => pro.id === parseInt(id) || !id
    )

    return(
    <Base>
        {dadosFiltrados.map(
            (pro, index) => (
              <DetalhamentoCard
                key={index}
                titulo={pro.nome}
                src={`${process.env.PUBLIC_URL}/${pro.url}`}
                detalhes={pro.detalhes}
                colaboradores={pro.colaboradores}
              />
              )
          )}
    </Base>
    )

}

export default Detalhamento