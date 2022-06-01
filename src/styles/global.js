import { createGlobalStyle } from "styled-components";


const EstiloGlobal = createGlobalStyle`

  :root {
    --laranga-button: #FA9746;
    --fundo: #EAF3FA;
    --fundo-header: #FFFFFF;
    --texto: #78788F;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1088px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  p {
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 8.6;
    cursor: not-allowed;
  }


`
export default EstiloGlobal