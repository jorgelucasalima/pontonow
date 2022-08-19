import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  margin-top: 1rem;
`
export const ContentPdf = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
`

export const ButtonPdf = styled.div`

  align-items: center;

  button{
    padding: 0.50rem;
    border: 0;
    width: 4rem;

    background: var(--laranga-button);
    font-size: 20px;
    border-radius: 0.25rem;
    
  }
`

export const ContentViewUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--fundo-header);
  color: var(--texto-escuro);
  padding: 2rem;
  border-radius: 0.25rem;

  h1 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.25rem;
  }
`;

export const ContentEditUser = styled.div`
  
  background: var(--fundo-header);
  color: var(--texto-escuro);
  padding: 2rem;
  border-radius: 0.25rem;

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

  h1 {
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    font-size: 1.5rem;
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
`

export const ContentViewPontos = styled.div`

  background: var(--fundo-header);
  color: var(--texto-escuro);
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 0.25rem;

  table {
    width: 100%;
    align-items: center;
    margin-top: 1rem;
    
    th {
      color: var(--texto);
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }

    td {
      padding: 0.3rem 0.5rem;
      border: 1px solid;
      border-color: aliceblue;
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
`


