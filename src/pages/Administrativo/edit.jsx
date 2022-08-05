import UsuarioProvider from "../../contexts/usuarios";
import {Container, ContentEditUser } from "./styles";
import {useParams} from 'react-router-dom';
import firebase from '../../services/apifirebase'
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

export function EditUser() {

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
        <ContentEditUser>
          <div>
            <h1>Dados Pessoais:</h1>
            <h3>Colaborador: {usuario.nome}</h3>
            <h3>Cargo: {usuario.cargo}</h3>
            <h3>Data Nascimento</h3>
            <h3>Cidade</h3>
            <h3>Estado-UF</h3>
            <h3>CPF:</h3>
            <h3>PIS:</h3>
            <h3>CTPS:</h3>
            <h3>RG:</h3>
            <h3>TUDO AQUI VAI SER INPUT</h3>
          </div>
        </ContentEditUser>
      </Container>
    </UsuarioProvider>
  )
}