import Base from "./Base";
import dados from "../data/projetos.json";
import { useParams } from "react-router-dom";
import DetalhamentoCard from "../components/DetalhamentoCard/DetalhamentoCard";


const Detalhamento = () => {
    const { id } = useParams();

    const dadosFiltrados = dados.filter(
        (pro) => pro.id === parseInt(id)
    )

    return(
    <Base>
        {dadosFiltrados.map(
            (pro, index) => (
              <DetalhamentoCard
                key={index}
                titulo={pro.titulo}
                src={`${process.env.PUBLIC_URL}/${pro.url}`}
                detalhes={pro.detalhes}
                colaboradores={pro.colaboradores}
                ferramentas={pro.ferramentas}
                papeis={pro.papeis}
              />
              )
          )}
    </Base>
    )

}

export default Detalhamento