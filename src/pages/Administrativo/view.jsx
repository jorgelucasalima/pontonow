import UsuarioProvider from "../../contexts/usuarios";
import { ContentViewPontos, ContentViewUser, Container } from "./styles";
import {useParams} from 'react-router-dom';
import firebase from '../../services/apifirebase'
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

export function ViewUser() {

  const {id} = useParams();

  const [usuario, setUsuario] = useState({});

  useEffect(()=>{
    async function loadUser(){
      await firebase.firestore().collection('usuarios')
      .doc(id)
      .get({
        nome: usuario.nome,
        cargo: usuario.cargo
      })
      .then(response => {
        setUsuario(response.data());
      })
      .catch(error => {
        console.log(error);
      })
    }
    loadUser();
  },[id])


  return (
    <UsuarioProvider>
      <Header/>
      <Container>
        <ContentViewUser>
          <div>
            <h1>Dados Pessoais:</h1>
            <h3>Nome: {usuario.nome}</h3>
            <h3>Cargo: {usuario.cargo}</h3>
          </div>
        </ContentViewUser>
        <ContentViewPontos>
          <div>
            <h1>Pontos:</h1>
          </div>
        </ContentViewPontos>
      </Container>
    </UsuarioProvider>
  )
}