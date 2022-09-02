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

  display: grid;
  grid-template-columns: 1.60fr 0.50fr;
  align-items: center;

  background: var(--fundo-header);
  margin-top: 2rem;
  padding: 5rem;
  border-radius: 0.25rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.25rem;
  }
  
  button {
    background: var(--laranga-button);
    font-size: 1rem;
    font-weight: bold;
    color: #FFFFFF;
    border: 0;
    padding: 0 2rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ContentRegistrosDia = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  div {
    background: var(--fundo-header);
    padding: 1.5rem 1rem;
    border-radius: 0.25rem;
    
    p{
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .check {
      font-size: 1.9rem;
      margin-right: 0.50rem;
      color: var(--check-verde);
    }

    strong{
      font-size: 2rem;
    }

  }
`
