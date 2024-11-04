import styled from "styled-components";

const DetalheArticle = styled.article`
    width: 85vmin;
    color: var(--primaria);
    display:flex;
    flex-direction: column;
    margin-inline: auto;

    img {
        width: 85vmin;
        height:10rem;
        object-fit: fill;
        margin-top: 1rem;
    }

    @media screen and (min-width: 800px) {
        width: 50vmax;

    }
`

export {DetalheArticle}