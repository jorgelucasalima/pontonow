import { Container, Content, ContentImg } from "./styles";
import login from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import firebase from '../../services/apifirebase'
import { useState } from "react";
import { toast } from 'react-toastify';

 
export function Login() {

  const rota = useNavigate();

  //estados
  const [emailFuncionario, setEmailFuncionario] = useState('')
  const [senhaFuncionario, setSenhaFuncionario] = useState('')


  async function loginFuncionario() {
    await firebase.auth().signInWithEmailAndPassword(emailFuncionario, senhaFuncionario)
    .then(() => { 
      toast.success('Usuário logado com sucesso!')
      rota('/batidaponto')
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
            value={emailFuncionario}
            onChange={e => setEmailFuncionario(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Senha"
            value={senhaFuncionario}
            onChange={e => setSenhaFuncionario(e.target.value)}
          />
          <button onClick={loginFuncionario}>Login</button>
          <p>Entrar como administrador: <Link to="/loginadmin">Clique Aqui</Link> </p>
      </Content>
    </Container> 
  )
}