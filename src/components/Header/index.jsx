import { Container, Content, ContentUsuario } from "./styles"


export function Header() {
  return (
    <Container>
      <Content>
        <a href="">LOGO - Ponto Now</a>
        <ContentUsuario>
          <p>Nome Funcionário</p>
          <button>Sair</button>
        </ContentUsuario>
      </Content>
    </Container>
  )
}