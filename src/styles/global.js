import { createGlobalStyle } from "styled-components";


const EstiloGlobal = createGlobalStyle`

  :root {
    --laranga-button: #FA9746;
    --fundo: #EAF3FA;
    --fundo-header: #FFFFFF;
    --texto: #78788F;
    --texto-escuro: #58586B;
    --check-verde: #67E474;
    --cordefundo: #F0F2F5;
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
    background: var(--fundo);
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 90%;
    max-width: 600px;
    background: var(--cordefundo);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
  }


`
export default EstiloGlobal