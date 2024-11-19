import styled from "styled-components"

const Top = styled.header`
  padding: .5em 1%.5 .5em 5vmin;
  width: auto;
  height: auto;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  border-bottom: 1px solid var(--primaria);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1000;

  a {
    min-height: 1rem;
    text-align: center;
    margin: 0 .7em;
    width: auto;
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

  #botao-logout{

  }

  .link-icon-ibmec {
    width: 10%;
    object-fit: fill;
    margin-right: 1vmin;
    margin-right: 1vmin;
    padding: 0.75em;
  }

  .languageselectorcontainer {
    display: none;
  }


  @media screen and (min-width: 800px){
    padding: .5em 1vmax .5em 1vmax;
    height: 4rem;

    #botao-home{
      display: grid;
      width: 10%;
      font-size: large;
    }

    #botao-sobre{
      display: grid;
      width: 10%;
      font-size: large;
    }

    #botao-logout{
      display: grid;
      width: 10%;
      font-size: large;
    }

    .link-icon-ibmec{
      width: 15%;
      height: 4rem;
      padding: 0;
    }

    .languageselectorcontainer {
      display: flex;
      align-items: center;
      padding-left: 4rem;

    }

    .languageselector {
      font-size: 16px;
      padding: 8px 12px;
      border-radius: 5px;
      border: none;
      appearance: none;
      background-color: var(--secundaria);
      cursor: pointer;
      width: 80px;
      color: white;
      position: relative;
      font-weight: bold;
      text-align: center;
    }

    .languageoption {

      background-position: left center;
      background-size: 20px;
      font-size: large;
      font: bold;
      text-align: center;


  }

  @media screen and (min-width: 1441px){

    #botao-home{
      font-size: x-large;
    }

    #botao-sobre{
      font-size: x-large;
    }

    #botao-logout{
      font-size: x-large;
    }

    .languageselectorcontainer {
      font-size: x-large;
    }
  }
}
`

export {Top}