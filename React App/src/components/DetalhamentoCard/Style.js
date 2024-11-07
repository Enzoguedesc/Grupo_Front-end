import styled from "styled-components";

const DetalheArticle = styled.article`
    width: 85vmin;
    color: var(--primaria);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img {
        width: 85vmin;
        height:10rem;
        object-fit: fill;
        margin-top: 1rem;
    }

    #container-detal{
        margin-inline: auto;
    }

    @media screen and (min-width: 800px) {
        img{
            width: 50vmax;
            height: 30rem;
        }

    }

`

export {DetalheArticle}