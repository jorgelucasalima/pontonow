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
    color: #FFFFFF;
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    img {
      height: 1rem;
      width: 1rem;
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

    svg {
      font-size: 2rem;
      margin-right: 1rem;
      color: var(--check-verde);
    }

    strong{
      font-size: 2rem;
    }

  }

`
