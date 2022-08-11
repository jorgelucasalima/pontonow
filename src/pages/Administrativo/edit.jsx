import UsuarioProvider from "../../contexts/usuarios";
import {Container, ContentEditUser } from "./styles";
import {useParams} from 'react-router-dom';
import firebase from '../../services/apifirebase'
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

export function EditUser() {

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [pis, setPis] = useState('');
  const [ctps, setCtps] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cidadeNascimento, setCidadeNascimento] = useState('');
  const [estadoNascimento, setEstadoNascimento] = useState('');

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

  async function atualizarDadosUsuario(e){
    e.preventDefault();
    const user = {
      cpf,
      rg,
      pis,
      ctps,
      dataNascimento,
      cidadeNascimento,
      estadoNascimento
    }
    await firebase.firestore().collection('usuarios')
    .doc(id)
    .update(user)
    .then(() => {
      alert('Usuário atualizado com sucesso!');
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setCpf('');
      setRg('');
      setPis('');
      setCtps('');
      setDataNascimento('');
      setCidadeNascimento('');
      setEstadoNascimento('');
    })
  }

  return (
    <UsuarioProvider>
      <Header/>
      <Container>
        <ContentEditUser>
          <div>
            <h1>Dados Pessoais:</h1>
            <label htmlFor="">Nome:</label>
              <input type="text" placeholder={usuario.nome}  />
            <label htmlFor="">Cargo:</label>
              <input type="text" placeholder={usuario.cargo}/>
            <label htmlFor="">CPF:</label>
              <input type="text" value={cpf} />
            <label htmlFor="">RG:</label>
              <input type="text"/>
            <label htmlFor="">PIS:</label>
              <input type="text"/>
            <label htmlFor="">CTPS:</label>
              <input type="text"/>
            <label htmlFor="">Data Nascimento</label>
              <input type="date"/>
            <label htmlFor="">Cidade Nascimento</label>
              <input type="text" placeholder="Cidade"/>

            <label htmlFor="">UF - Nascimento</label>
            <select name="Estado" id="">
              <option value="">-</option>
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

            <button onClick={atualizarDadosUsuario}>Atualizar</button>

          </div>
        </ContentEditUser>
      </Container>
    </UsuarioProvider>
  )
}