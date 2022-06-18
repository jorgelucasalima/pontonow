import { Container, Content, ContentImg } from "./styles";
import login from "../../assets/login.jpg";
import { Link } from "react-router-dom";
 
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
          <p>Entrar como administrador: <Link to="/loginadmin">Clique Aqui</Link> </p>
        </form>
      </Content>
    </Container> 
  )
}