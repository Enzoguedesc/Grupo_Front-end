import styled from "styled-components";

const Perfil = styled.article`
    color: black;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 80vmin;
    padding: 10px;
    gap: 0.7em;
    justify-content: center;
    align-items: center;
    background-color: rgb(235, 235, 235);

.nome{
    font-weight: 600;
    font-size: 1.2em;
}

.imgPerfil{
    display: flex;
    object-fit: contain;
    width: 100%;
    border-radius: 10px;
}

@media screen and (min-width: 800px){
    width: 20%;
}
`
export {Perfil};