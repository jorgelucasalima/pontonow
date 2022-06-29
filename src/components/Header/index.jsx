import { Container, Content, ContentUsuario } from "./styles"
import firebase from '../../services/apifirebase'
import { useNavigate } from "react-router-dom";

export function Header(props) {

  const rota = useNavigate();

  async function sair(params) {
    await firebase.auth().signOut()
    .then(() => {
      rota('/')
    }
    )
  }

  return (
    <Container>
      <Content>
        <a href="">LOGO - Ponto Now</a>
        <ContentUsuario>
          <p>{props.email}</p>
          <button onClick={sair}>Sair</button>
        </ContentUsuario>
      </Content>
    </Container>
  )
}