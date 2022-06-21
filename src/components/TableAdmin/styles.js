import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
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

      a {
        text-decoration: none;
        margin-left: 0.25rem;
        cursor: pointer;
        color: var(--texto-escuro);
        font-size: 20px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;

  h2 {
    color: var(--texto);
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    color: #FFFFFF;
    background: var(--laranga-button);
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