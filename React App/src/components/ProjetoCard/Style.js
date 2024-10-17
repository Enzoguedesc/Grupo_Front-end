import styled from "styled-components";

const Imagem = styled.article`
    width: 15rem;
    background-color: var(--destaque);
    padding: .5em;
    position: relative;
    margin: 1vmax;

    div.nome{
        background-color: var(--background);
        color: var(--primaria);
        text-align: center;
        font-size: larger;
        font-weight: bold;
        text-transform: uppercase;
    }

    figure {
        margin: .5rem 0 0 0;
    }

    img {
        object-fit: contain;
        width: 100%;
        height: 22rem;
    }

    a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--background);
    text-decoration: none;
    font-weight: bold;
    color: var(--detalhe);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }
`;

export {Imagem};