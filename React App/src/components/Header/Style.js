import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  border-bottom: 1px solid var(--primaria);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-content: space-between;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1000;


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
    color: var(--background);
    text-transform: uppercase;

    /*border-radius: .3em;*/
    &:hover{
      color: var(--detalhe);
    }
  }

  .Botoes{
    display: flex;

  }

  input{
    margin: 0 1em;
    padding: .2em 1em;
    border-radius: 2em;
    border: 1px solid var(--primaria);
    background-color: var(--background);
    color: var(--primaria);
    font-size: 1rem;
    font-weight: bold;
    height: 2rem;
    width: 15rem;
  }

  .Pesquisar{
    display: flex;
    position: absolute;
    transform: translate(77vmax, 1.5vmin);
  }

  img {
    margin-right: 1rem;
    padding: 0.75em;
  }
`

export {Top}