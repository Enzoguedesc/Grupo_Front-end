import styled from "styled-components";

const Barra = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 3rem;
    width: auto;
    position: sticky;
    bottom: 0;
    background-color: var(--destaque);

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        color: var(--background);
        font-family: inherit;
        text-decoration: none;
    }



`;

export {Barra};

