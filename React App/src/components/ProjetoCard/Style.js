import styled from "styled-components";

const Cartao = styled.article`
    width: 35vmax;
    background-color: white;
    padding: .5em;
    position: relative;
    margin: 1vmax;
    border: 3px solid var(--secundaria);
    border-radius: 5px;


    div.titulo{
        background-color: var(--background);
        height: min-content;
        color: var(--secundaria);
        justify-self: stretch;
        text-align: center;
        font-size: larger;
        font-weight: bold;
        text-transform: uppercase;
    }

    .ContainerDetalhes {
      display: grid;
      grid-template-columns: 3fr 1fr;
      font-size: x-small;
      color: var(--secundaria);
      text-align: left;

  
    }

    figure {
        margin: .5rem 0 0 0;
    }

    img {
        object-fit: fill;
        width: 100%;
        height: 20rem;
    }

    a {
      text-align: center;
      height: min-content;
      padding: 0.5em;
      margin: 2em;
      min-width: 5em;
      background-color: var(--background);
      text-decoration: none;
      font-weight: bold;
      color: var(--detalhe);
      border-radius: 5px;
      text-transform: uppercase;
      /*border-radius: .3em;*/
      &:hover{
        background-color: var(--destaque);
        color: var(--secundaria);
      }
    }

    @media screen and (min-width: 800px) {
      .ContainerDetalhes{
        font-size: large;
      }
    }

    @media screen and (min-width: 1441px) {
      .ContainerDetalhes{
        font-size: x-large;
      }

      img {
        height: 30rem;
      }

      div.titulo{
        font-size: xx-large;
      }
    }
`;

export {Cartao};