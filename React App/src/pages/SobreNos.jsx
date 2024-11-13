import ListContainer from "../components/ListContainer/ListContainer";
import PerfilCard from "../components/PerfilCard/PerfilCard";
import Base from "./Base";

const dadosPerfilPt = [
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

const dadosPerfilEn = [
    {
        "nome" : "Enzo Guedes",
        "imagem" : "imagens/fotoEnzo.jpg",
        "detalhes" : "I am a Data Science and Artificial Intelligence student at IBMEC Barra, i'm currently in my second semester. Passionate about technology and data analysis, I'm developing skills in programming, statistics, and machine learning to understand and solve complex problems. I constantly seek to learn and apply new knowledge in practical projects that involve innovation.",
    },
    {
        "nome" : "Diego Bonani",
        "imagem" : "imagens/fotoDiego.jpg",
        "detalhes" : "I am a Computer Engineering student at IBMEC Barra, currently in my second semester. Passionate about technology and innovation, I am constantly seeking to enhance my knowledge in programming, algorithms, and systems. With a keen eye for developing practical and efficient solutions, I am focused on building a solid foundation for my future career in the technology field.",
    },
    {
        "nome" : "Luca Confente",
        "imagem" : "imagens/fotoLuca.jpg",
        "detalhes" : "I am a Data Science and Artificial Intelligence student at IBMEC Barra, currently in my second semester. Passionate about technology and data analysis, I am developing skills in programming, statistics, and machine learning to understand and solve complex problems. I am constantly seeking to learn and apply new knowledge in practical projects that involve innovation and impact.",
    },
    {
        "nome" : "Bernardo Meireles",
        "imagem" : "imagens/fotoBernardo.jpg",
        "detalhes" : "I am a Systems Analysis and Development student at IBMEC Barra, currently in my second semester. Passionate about technology and always seeking continuous learning to enhance my software development skills. Exploring the world of programming and gaining practical experience through academic and personal projects.",
    },
    {
        "nome" : "Pedro Mynssen",
        "imagem" : "imagens/fotoPedro.jpg",
        "detalhes" : "I am a Software Engineering student at IBMEC Barra, currently in my second semester. I am passionate about technology and systems development, always seeking to deepen my knowledge in programming and innovation. I am continuously learning and growing, with a focus on practical projects that help consolidate the skills acquired in the classroom.",
    }
]
const SobreNos = () => {

    return(
        <Base>
            <ListContainer>
                {
                    dadosPerfilPt.map((pro, index) =>
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