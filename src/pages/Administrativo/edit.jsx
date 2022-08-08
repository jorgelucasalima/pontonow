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
            <input type="text" placeholder={usuario.nome}/>
            <input type="text" placeholder={usuario.cargo}/>
            <input type="text" placeholder="CPF"/>
            <input type="text" placeholder="PIS"/>
            <input type="text" placeholder="CTPS"/>
            <input type="text" placeholder="RG"/>
            <label htmlFor="">Data Nascimento</label>
            <input type="date"/>
            <input type="text" placeholder="Cidade"/>
            <select name="Estado" id="">
              <option value="">UF</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Piauí">Piauí</option>
              <option value="Ceará">Ceará</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Bahia">Bahia</option>
            </select>

          </div>
        </ContentEditUser>
      </Container>
    </UsuarioProvider>
  )
}