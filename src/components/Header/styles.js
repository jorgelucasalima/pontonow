import styled from 'styled-components';

export const Container = styled.div`
  background: var(--laranga-button);
  padding: 2.5rem 3rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContentUsuario = styled.div`
  display: grid;
  align-items: center;

  p {
    margin-bottom: 0.20rem;
  }

  button {
    margin: 0;
    border: 0;
    padding: 0.25rem;
    border-bottom-left-radius : 4rem;
    border-bottom-right-radius: 4rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

`