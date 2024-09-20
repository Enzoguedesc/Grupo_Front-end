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
 - O sistema terá um cabeçalho, dividido e com opções interagiveis.
 - O sistema tem que ter um filtro (ferramentas, cursos, períodos ou Unidades do IBMEC).  
 - No sistema terá paginação (página 1 --> página 2), para poder visualizar outros projetos, sendo encaminhado para outra página. 
 - Na listagem dos projetos, eles precisam ser representados por pelos menos uma imagem.  
 - Cada aluno terá um proprio link, que irá conter todos os projetos dele.  
 - No sistema apenas administradores poderão editar os portfólios dos alunos.
 - O sistema terá as descrições dos projetos (pessoas que participaram, curso dos alunos, inicio e fim do projeto, linguagem de programação utilizada, etc).

**Não Funcionais (caracteristicas do sistema):**      
 - O sistema terá cores aderentes à identidade visual do Ibmec (Azul, Amarelo e branco).
 - O sistema será feito por React.  
 - O sistema terá um padrão de projetos.  
 - O sistema terá dois idiomas diferentes (Inglês e Português).    
 - O sistema deve ser adaptado para dispositivos mobile e computadores.    
 
# Detalhamento de Requisitos 
- Na lista dos projetos, um projeto precisa ser representado por pelo menos uma imagem. No detalhamento do projeto, você pode conter mais de uma imagem, documentos e símbolos que possam representar o projeto. Ao clicar nele o cliente será direcionado para outra página.

- O detalhamento dos projetos tem que estar em apenas uma página.

- No detalhamento dos projetos terá: pessoas que participaram, curso dos alunos, início e fim do projeto, linguagem de programação utilizada, o vínculo, e o papel que os participantes têm com o projeto e um link com a biografia do grupo ("sobre-nós "), contendo foto e descrição do grupo que fez esse projeto. Será um padrão para todos os projetos essa descrição.  
  
- O sistema deverá ter uma página inicial que liste todos os projetos, aparecendo mais de dois projetos por linha, quando for na tela de um computador. Em mobile, tem que ser um projeto embaixo do outro. E além da imagem, tem que aparecer os nomes dos integrantes, uma breve descrição e as tecnologias usadas.  

- Na página inicial os projetos serão representados com uma imagem, uma breve descrição, um titulo, nome dos participantes e tecnologias.

- O sistema vai precisar de um botão para trocar a linguagem (de português para Inglês, por exemplo).

- O ADM apenas edita e desativa os projetos.  

- O sistema terá cores aderentes à identidade visual do Ibmec (Azul, Amarelo e branco).  
  
- Cada grupo vai receber um par de email e senha.  

- Cada projeto pode ter um botão de encaminhar, para poder compartilhar com quem quiser.

- No sistema terá uma página que será possivel informar um par de usuário e senha para se autenticar como ADM. Essa área não será exposta no sistema. Vai ser preciso saber o endereço específico desta página. Após a autenticação, o ADM terá um botão para deslogar do sistema.

- No menu de navegação terá um link para voltar para a página do IBMEC.

- Quando for realizado a ação de clicar no detalhe do projeto, por exemplo, o usuário será direcionado para outra página. Ao clicar no botão de voltar, o usuário terá que voltar exatamente para página anterior que ele estava.

- O sistema tem que ter um filtro com ferramentas, cursos, periodo dos projetos e Unidades do IBMEC.

- No sistema terá paginação (página 1 --> página 2), para poder visualizar outros projetos, sendo encaminhado para outra página.

- A ordenação padrão dos projetos é em ordem cronológica.

- Cada aluno terá um link próprio (Ex: portfolioIbmec.com.br/DiegoBonani) contendo os projetos em que participou.


# Casos de Uso

- [Exibir detalhes do projeto;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Exibir%20detalhes%20do%20projeto.md)
- [Buscar projetos / filtrar;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Buscar%20projetos%20e%20Filtrar.md)
- [Editar (ADM);](https://github.com/Enzoguedesc/Grupo_Front-end/blob/dc946af5d4a71d289e3654798f9a9dad3faa7241/Editar%20(ADM).md)
- [Fazer Login;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Fazer%20Login.md)
- [Exibir o "sobre-nós" (Informações dos desenvolvedores do sistema);](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Exibir_Sobre-Nos.md)
- [Encaminhar os projetos;](https://github.com/Enzoguedesc/Grupo_Front-end/blob/main/Encaminhar_projetos.md)  
  
