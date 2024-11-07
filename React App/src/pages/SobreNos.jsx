import ListContainer from "../components/ListContainer/ListContainer";
import PerfilCard from "../components/PerfilCard/PerfilCard";
import Base from "./Base";

const dadosPerfil = [
    {
        "nome" : "Enzo Guedes",
        "imagem" : "imagens/fotoEnzo.jpg",
        "detalhes" : "Sou estudante de Ciência de Dados e Inteligência Artificial no IBMEC Barra, atualmente no segundo período. Apaixonado por tecnologia e análise de dados, estou desenvolvendo habilidades em programação, estatística e aprendizado de máquina para entender e solucionar problemas complexos. Busco constantemente aprender e aplicar novos conhecimentos em projetos práticos que envolvam inovação e impacto.",
    },
    {
        "nome" : "Diego Bonani",
        "imagem" : "imagens/fotoDiego.jpg",
        "detalhes" : "Estudante de Engenharia da Computação no IBMEC Barra, atualmente no segundo período. Apaixonado por tecnologia e inovação, estou constantemente buscando aprimorar meus conhecimentos em programação, algoritmos e sistemas. Com um olhar atento ao desenvolvimento de soluções práticas e eficientes, estou focado em construir uma base sólida para minha futura carreira na área de tecnologia.",
    },
    {
        "nome" : "Luca Confente",
        "imagem" : "imagens/fotoLuca.jpg",
        "detalhes" : "Sou estudante de Ciência de Dados e Inteligência Artificial no IBMEC Barra, atualmente no segundo período. Apaixonado por tecnologia e análise de dados, estou desenvolvendo habilidades em programação, estatística e aprendizado de máquina para entender e solucionar problemas complexos. Busco constantemente aprender e aplicar novos conhecimentos em projetos práticos que envolvam inovação e impacto.",
    },
    {
        "nome" : "Bernardo Meireles",
        "imagem" : "imagens/fotoBernardo.jpg",
        "detalhes" : "Estudante de Análise e Desenvolvimento de Sistemas no IBMEC Barra, atualmente no segundo período. Apaixonado por tecnologia e sempre em busca de aprendizado contínuo para aprimorar habilidades em desenvolvimento de software. Explorando o universo da programação e adquirindo experiência prática em projetos acadêmicos e pessoais.",
    },
    {
        "nome" : "Pedro Mynssen",
        "imagem" : "imagens/fotoPedro.jpg",
        "detalhes" : "Sou estudante de Engenharia de Software no Ibmec Barra, atualmente no segundo período. Tenho paixão por tecnologia e desenvolvimento de sistemas, buscando sempre aprofundar meus conhecimentos em programação e inovação. Estou em constante aprendizado e desenvolvimento, com foco em projetos práticos que ajudam a consolidar as habilidades adquiridas em sala de aula.",
    }
]

const SobreNos = () => {

    return(
        <Base>
            <ListContainer>
                {
                    dadosPerfil.map((pro, index) =>
                    <PerfilCard
                    nome={pro.nome}
                    src={pro.imagem}
                    key={index}
                    detalhes={pro.detalhes} />)
                    }
            </ListContainer>
        </Base>
    );
}


export default SobreNos;