import styled from "styled-components"

const Top = styled.header`
  padding: .5em 1.5vmin .5em 1.5vmin;
  width: 97vmin;
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
    width: 10%;
    text-decoration: none;
    font-weight: bold;
    display: grid;
    align-items:center;
    justify-self: center;
    color: var(--background);
    text-transform: uppercase;

    /*border-radius: .3em;*/
    &:hover{
      color: var(--destaque);
    }
  }

  #botao-home{
    display: none;
  }

  #botao-sobre{
    display: none;
  }

  img {
    width:25%;
    margin-right: 1vmin;
    padding: 0.75em;
  }

  @media screen and (min-width: 800px){
    padding: .5em 1.5vmax .5em 1.5vmax;
    width: 97vmax;

    #botao-home{
      display: grid;
      width: 10%;
    }

    #botao-sobre{
      display: grid;
      width: 10%;
    }

    img{
      width: 15%;
      height: 4rem;
    }

  }
`

export {Top}