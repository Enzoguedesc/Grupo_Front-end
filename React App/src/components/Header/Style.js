import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  margin: 0;
  border-bottom: 1px solid var(--primaria);
  
  a {
    text-align: center;
    margin: 0 .7em;
    min-width: fit-content;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items:center;
    justify-self: center;
    color: var(--primaria);
    text-transform: uppercase;
    /*border-radius: .3em;*/
    &:hover{
      color: var(--secundaria);
    }
  }
`

export {Top}