import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 6rem 2rem;
  color: var(--texto);
`;

export const ContentImg = styled.div`
  background: var(--fundo-header);
  display: flex;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  background: var(--laranga-button);
  padding: 3rem;

  h1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: var(--fundo-header);
  }

  p {
    color: var(--fundo-header);
    margin-bottom: 1rem;
  }

  input {
    background: var(--fundo-input);
    display: flex;
    width: 100%;
    padding: 0 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: none;
    //border: 1px solid #d7d7d7;
    //  font-weight: bold;
    font-size: 1rem;
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    &::placeholder {
      color: var(--fundo-header);
    }
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--azul-link );
    color: var(--fundo-header);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
      
    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
  
`