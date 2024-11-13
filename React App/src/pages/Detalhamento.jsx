import Base from "./Base";
import brutosPt from "../data/projetosPt.json";
import brutosEn from "../data/projetosEn.json";
import { useParams } from "react-router-dom";
import DetalhamentoCard from "../components/DetalhamentoCard/DetalhamentoCard";
import i18next from "i18next";
import { useEffect, useState } from "react";


const Detalhamento = () => {
    const { id } = useParams();
    const [dadosPt, setDadosPt] = useState(brutosPt);
    const [dadosEn, setDadosEn] = useState(brutosEn);
    useEffect(()=> {
        setDadosPt(brutosPt.filter(
            (pro) => pro.id === parseInt(id)
        ))

        setDadosEn(brutosEn.filter(
            (pro) => pro.id === parseInt(id)
        ))
    }, [i18next.language])

    return(
    <Base>
        {
            i18next.language == 'pt'
            ?dadosPt.map(
            (pro, index) => (
                <DetalhamentoCard
                    key={index}
                    titulo={pro.titulo}
                    url={`${process.env.PUBLIC_URL}/${pro.url}`}
                    detalhes={pro.detalhes}
                    colaboradores={pro.colaboradores}
                    ferramentas={pro.ferramentas}
                    papeis={pro.papeis}
                />
            ))
            :dadosEn.map(
                (pro, index) => (
                <DetalhamentoCard
                    key={index}
                    titulo={pro.titulo}
                    url={`${process.env.PUBLIC_URL}/${pro.url}`}
                    detalhes={pro.detalhes}
                    colaboradores={pro.colaboradores}
                    ferramentas={pro.ferramentas}
                    papeis={pro.papeis}
                />
            ))
        }
    </Base>
    )
}

export default Detalhamento