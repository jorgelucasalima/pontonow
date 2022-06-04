import styled from 'styled-components';

export const Container = styled.div`

  padding: 4rem 4rem;
  background: var(--fundo-header);
  border-radius: 0.25rem;
  color: var(--texto);
  text-align: center;

  h2 {
    color:var(--texto-escuro);
    margin-bottom: 2rem;
  }

  strong {
    font-size: 4rem;
    color:var(--texto-escuro);
  }

  p{
    margin-top: 0.25rem;
    font-size: 1rem;
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

    margin-top: 2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .cancelar {
    background: var(--fundo-header);
    color: var(--check-verde);
    margin-right: 1rem;
    font-weight: bold;
  }

`;
