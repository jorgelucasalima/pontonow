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
      font-weight: 400;
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

`