import styled from "styled-components";

const DetalheArticle = styled.article`
    width: 85vmin;
    color: var(--primaria);
    display:flex;
    flex-direction: column;
    justify-content: center;
    

    img {
        align-items: center;
        width: 85vmin;
        height:10rem;
        object-fit: fill;
        margin-top: 1rem;
    }

    h3{
        text-align: justify;
    }

    p{
        text-align: justify;
        border: 200cm;
    }
    #container-detal{
        margin-inline: auto;
    }
    #detalhes{
     border: 0cm;
        overflow: hidden;
    }
    #foto2{
        float: right;
        margin-left: 10px;
        width: 50%;
    }
    @media screen and (min-width: 800px) {
        img{
            width: 50vmax;
            height: 30rem;
        }

    }

`

export {DetalheArticle}