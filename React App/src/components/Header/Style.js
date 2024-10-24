import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  margin: 0;
  border-bottom: 1px solid var(--primaria);
  
  a {
    min-height: 1rem;
    text-align: center;
    margin: 0 .7em;
    width: 7rem;
    text-decoration: none;
    font-weight: bold;
    display: grid;
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