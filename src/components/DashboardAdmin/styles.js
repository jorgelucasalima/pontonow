import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  color: var(--texto);
`;


export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  div {
    background: var(--fundo-header);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    
    display: flex;
    
    p{
      font-size: 1.25rem;
      margin-bottom: 1rem;
      margin-right: 6rem;
    }

    svg {
      font-size: 2rem;
    }

    strong{
      font-size: 2rem;
      margin-top: 3rem;
    }

  }

`
