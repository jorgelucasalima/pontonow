import { Container, Content } from "./styles";
import login from "../../assets/login.jpg";
 
export function Login() {
  return( 
    <Container>
      <Content>
        <img src={login} alt="" />
        <form>
          <h1>login</h1>
          <input type="email" id="email" placeholder="E-mail" />
          <input type="password" id="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
          <p>Entrar com administrador: <a href="">Clique Aqui</a> </p>
          
        </form>
      </Content>
    </Container> 
  )
}