import { Content, Container } from "./styles"

export function LoginAdmin() {
  return(
    <Container>
      <Content>
        <form>
          <h1>Olá Admin</h1>
          <p>Entre na sua conta!</p>
          <input type="email" id="email" placeholder="E-mail" />
          <input type="password" id="password" placeholder="Senha"/>
          <button type="submit">Login</button>
        </form>
      </Content>
    </Container> 
  )
}