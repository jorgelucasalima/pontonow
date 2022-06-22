import styled from 'styled-components';

export const Container = styled.form`
  
  h1 {
    color: var(--texto);
    margin-bottom: 1rem;
  }

  input, select {
    width: 100%;
    padding: 0 1.2rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    color: var(--texto-escuro);
    //  font-weight: bold;
    font-size: 1.25rem;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
  }

  button {
    width: 100%;
    font-size: 1.5rem;
    //font-weight: bold;
    color: #FFFFFF;
    background: var(--laranga-button);
    border: 0;
    padding: 0 2rem;
    height: 4rem;
    border-radius: 0.25rem;
    margin-top: 1rem;
   
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  
`;
