# Grupo Front-Link
- [Enzo Guedes](https://github.com/Enzoguedesc/react-base-project.git) 
- [Luca Confente](https://github.com/LucaConfente/Front-End) 
- [Diego Gode Bonani](https://github.com/Diego-Bonani/react-base-project) 
- [Bernardo Meireles](https://github.com/meireles07/react-base-project.git) 
- [Pedro Mynssen](https://github.com/endsky1/Projeto_FrontEnd)


# Propósito do sistema
O propósito do sistema que iremos desenvolver é criar um portfólio para o IBMEC, mostrando projetos feitos pelos estudantes e seus integrantes, servindo como um lugar no qual futuros alunos com interesse na instituição e possíveis parceiros de negócios possam acessar para ver o que está acontecendo dentro da universidade.


# 5W2H  
5W2H é um checklist administrativo de atividades, prazos e responsabilidades que devem ser desenvolvidas com clareza e eficiência por todos os envolvidos no projeto, nesse caso um sistema de portfólios do IBMEC, que tem como função definir o que será feito, porque, onde, quem irá fazer, quando será feito, como, e quanto.  

- What?  
  O que é o sistema?
  - Um site feito pelo Ibmec para mostrar os portfólios criados pelos alunos.  

- Why?  
  Por que o sistema existe?  
  - O sistema existe com o intuito de proporcionar organização e facilidade para os usuários na visualização dos projetos.  

- Who?  
  Quem usaria o sistema?  
  - Possíveis futuros clientes, professores e o próprio aluno na hora de apresentar o projeto.  

- Where?  
  Aonde ele seria usado?  
  - Online em um site.  

- When?  
  Quando ele seria usado ou disponivel para uso?  
  - Quando alguem quiser achar um projeto que possa resolver o seu problema, quando um aluno desejar apresentar o seu portfólio e quando o ADM for adicionar um novo projeto.  

- How?  
  Como o sistema seria utilizado?  
  - O sistema seria usado para mostrar projetos feitos pelos estudantes e seus integrantes.  

- How much?  
  Custo de tempo de produção do sistema.  
  - Tempo de trabalho dos alunos e custo do dominio do site.  


# Requisitos

**Funcionais (Funções do sistema):**  
 - O sistema deverá ter uma pagina que liste todos os projetos.
   - Deve aparecer mais de dois projetos por linha, quando for na tela de um computador. Em mobile, tem que ser um projeto embaixo do outro.
   - Na página inicial os projetos serão representados com pelo menos uma imagem, uma breve descrição, um titulo, nome dos participantes e tecnologias.
   - Quando for realizado a ação de clicar no detalhe do projeto o usuário será direcionado para outra página.
   - A ordenação padrão dos projetos é em ordem cronológica.
 - O sistema tem que ter um filtro/barra de pesquisa.
   -  Opcões para o filtro: ferramentas, cursos, periodo dos projetos e Unidades do IBMEC.
 - No sistema terá paginação (página 1 --> página 2), para poder visualizar outros projetos, sendo encaminhado para outra página. 
 - Cada aluno terá um proprio link, que irá conter todos os projetos dele.
 - Cada projeto terá uma página de detalhamento única.
   - No detalhamento do projeto, você pode conter mais de uma imagem, documentos e símbolos que possam representar o projeto.
   - O detalhamento dos projetos tem que estar em apenas uma página.
   - No detalhamento dos projetos terá: pessoas que participaram, curso dos alunos, início e fim do projeto, linguagem de programação utilizada, o vínculo, e o papel que os participantes têm com o projeto e um link com a biografia do grupo ("sobre-nós "), contendo foto e descrição do grupo que fez esse projeto. Será um padrão para todos os projetos essa descrição.
   - Cada projeto pode ter um botão de encaminhar, para poder compartilhar com quem quiser.
 - No sistema apenas administradores poderão editar os portfólios dos alunos.
   - O ADM apenas edita e remove os projetos.
 - No sistema terá uma página que será possivel informar um par de usuário e senha para se autenticar como ADM.
   - Essa área não será exposta no sistema, vai ser preciso saber o endereço específico desta página.
   - Após a autenticação, o ADM terá um botão para deslogar do sistema.
 - Ao clicar no botão de voltar, o usuário terá que voltar exatamente para página anterior que ele estava.
 - Cada aluno terá um link próprio (Ex: portfolioIbmec.com.br/DiegoBonani) contendo os projetos em que participou.

**Não Funcionais (caracteristicas do sistema):**      
 - O sistema terá cores aderentes à identidade visual do Ibmec.
   - As cores do Ibmec são: Azul escuro #002555, Amarelo #F5AC00, Azul #1245FF
 - O sistema será feito por React.  
 - O sistema terá um padrão de projetos.  
 - O sistema terá dois idiomas diferentes (Inglês e Português).
   - O sistema vai precisar de um botão para trocar a linguagem (de português para Inglês, por exemplo).
 - O sistema deve ser adaptado para dispositivos mobile e computadores.    

# Casos de Uso

- [Exibir detalhes do projeto;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Exibir%20detalhes%20do%20projeto.md)
- [Buscar projetos / filtrar;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Buscar%20projetos%20e%20Filtrar.md)
- [Editar (ADM);](https://github.com/Enzoguedesc/Grupo_Front-end/blob/dc946af5d4a71d289e3654798f9a9dad3faa7241/Editar%20(ADM).md)
- [Fazer Login;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Fazer%20Login.md)
- [Exibir o "sobre-nós" (Informações dos desenvolvedores do sistema);](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Exibir_Sobre-Nos.md)
- [Encaminhar os projetos;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Encaminhar_projetos.md)  
  

# Protótipo

- [Link](https://www.figma.com/design/o3H2XyWzj1dHUAA1pZX9oT/Front-end---AP1?node-id=0-1&t=h8DTWxlsC8o2wZ9X-1)
- [Link02](https://www.figma.com/design/u9UExaEvoR5HJagcmbIyj5/Untitled?node-id=0-1&node-type=canvas&t=TPrD1TX0J2UUCyCa-0)

# Notion
### [Link](https://www.notion.so/1227d5c115d68069bfcbc2b58058e6b6?v=1227d5c115d680909ac0000c5b74627c&pvs=4)

# Protótipo
### [GitHub Pages](https://enzoguedesc.github.io/Grupo_Front-end/)

# Apresentação final
### [Canva](https://www.canva.com/design/DAGWgeJlIXU/P5ctvJJTRk_X3f8VxBgneA/edit?utm_content=DAGWgeJlIXU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
