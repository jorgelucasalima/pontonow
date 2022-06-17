import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const Content = styled.div`
  background: var(--fundo-header);
  display: flex;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
    margin-right: 0.25rem;
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    display: flex;
    width: 93%;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1.3rem;
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    &::placeholder {
      color: var(--laranga-button);
    }
  }

  button {
    width: 93%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--laranga-button);
    color: var(--fundo-header);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
      
    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    text-decoration: none;
    color: var(--azul-link);
  }
  
`