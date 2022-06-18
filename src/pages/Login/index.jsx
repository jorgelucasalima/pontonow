import { Container, Content, ContentImg } from "./styles";
import login from "../../assets/login.jpg";
 
export function Login() {
  return( 
    <Container>
      <ContentImg>
        <img src={login} alt="" />
      </ContentImg>
      <Content>
        <form>
          <h1>Bem Vindo</h1>
          <p>Entre na sua conta!</p>
          <input type="email" id="email" placeholder="E-mail" />
          <input type="password" id="password" placeholder="Senha"/>
          <button type="submit">Login</button>
          <p>Entrar como administrador: <a href="">Clique Aqui</a> </p>
        </form>
      </Content>
    </Container> 
  )
}