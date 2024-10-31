import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";


const dados = [
    {
        titulo: "Um titulo do Array",
        texto: "Um texto do array."
    },
    {
        titulo: "Outro titulo do Array",
        texto: "Outro texto do array."
    }
]


const SobreNos = () => {

    return(
        <Base>
            <ListContainer>
                
            </ListContainer>
        </Base>
    );

}

export default SobreNos;