import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  color: var(--texto);
`;

export const ContentTexto = styled.div`
  margin-top: 2rem;
`

export const ContentBatida = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--fundo-header);
  margin-top: 2rem;
  padding: 5rem;
  border-radius: 0.25rem;

  h1 {
    font-size: 3rem;
  }
  

  button {
    background: var(--laranga-button);
    font-size: 1rem;
    font-weight: bold;
    color: #FFFFFF;
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ContentRegistrosDia = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    align-items: center;
    
    th {
      color: var(--texto);
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 0.50rem;
      border: 0;
      background: var(--fundo-header);
      color: var(--texto-escuro);
      border-radius: 0.25rem;
      text-align: center;
    }
  }
`
