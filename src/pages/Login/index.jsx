import { Container, Content, ContentImg } from "./styles";
import login from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import firebase from '../../services/apifirebase'
import { useState } from "react";
import { toast } from 'react-toastify';

 
export function Login() {

  const rota = useNavigate();

  //estados
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  async function loginUsuario() {
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((value) => { 
      console.log(value.user)
      toast.success('Usuário logado com sucesso!')
      rota('/batidaponto' )
    })
    .catch((error) => {
      toast.error('email ou senha invalida!')
    })
  }


  return( 
    <Container>
      <ContentImg>
        <img src={login} alt="" />
      </ContentImg>
      <Content>
          <h1>PontoNow</h1>
          <p>Entre na sua conta!</p>
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button onClick={loginUsuario}>Login</button>
          <p>Entrar como administrador: <Link to="/loginadmin">Clique Aqui</Link> </p>
      </Content>
    </Container> 
  )
}