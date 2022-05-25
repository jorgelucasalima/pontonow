import { createGlobalStyle } from "styled-components";


const EstiloGlobal = createGlobalStyle`

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
  }


`
export default EstiloGlobal