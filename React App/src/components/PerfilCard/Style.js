import styled from "styled-components";

const Perfil = styled.article`
    color: black;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.5);
    width: 20%;
    padding: 10px;
    gap: 0.7em;
    justify-content: center;
    align-items: center;

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
`
export {Perfil};