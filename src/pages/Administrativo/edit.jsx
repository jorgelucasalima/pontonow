import UsuarioProvider from "../../contexts/usuarios";
import {Container, ContentEditUser } from "./styles";
import {useParams, useNavigate } from 'react-router-dom';
import firebase from '../../services/apifirebase'
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { toast } from "react-toastify"

export function EditUser() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [pis, setPis] = useState('');
  const [ctps, setCtps] = useState('');
  const [cargo, setCargo] = useState('');
  const [status, setStatus] = useState('');
  const [isAdmin, setIsAdmin] = useState('');
  
  
  const rota = useNavigate();
  const {id} = useParams();

  const [usuario, setUsuario] = useState({});

  //carregar usuario de acordo id
  useEffect(()=>{
    async function loadUser(){
      await firebase.firestore().collection('usuarios')
      .doc(id)
      .get({
        nome: usuario.nome,
        cargo: usuario.cargo,
        cpf: usuario.cpf,
        rg: usuario.rg,
        pis: usuario.pis,
        ctps: usuario.ctps,
        status: usuario.status,
        isAdmin: usuario.isAdmin
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
      nome,
      cargo,
      cpf,
      rg,
      pis,
      ctps,
      status,
      isAdmin
    }

    await firebase.firestore().collection('usuarios')
    .doc(id)
    .update(user)
    .then(() => {
      toast.success('Editado com Sucesso.')
      rota('/admin' )

    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setCpf('');
      setRg('');
      setPis('');
      setCtps('');
      setCargo('');
      setStatus('');
      setIsAdmin('');
      setNome('');
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
            <input type="text" placeholder={usuario.nome} value={nome} onChange={e => setNome(e.target.value)}/>

            <select 
              name="cargo" 
              id="cargo"
              value={cargo}
              onChange={e => setCargo(e.target.value)}
            >
              <option selected="selected" hidden>Cargo</option>
              <option value="Desenvolvedor">Desenvolvedor</option>
              <option value="Secretária">Secretária</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Estágiario">Estágiario</option>
            </select>

            <label htmlFor="">CPF:</label>
              <input type="text" value={cpf} onChange={e => setCpf(e.target.value)}/>
            <label htmlFor="" >RG:</label>
              <input type="text" value={rg} onChange={e => setRg(e.target.value)}/>
            <label htmlFor="">PIS:</label>
              <input type="text" value={pis} onChange={e => setPis(e.target.value)}/>
            <label htmlFor="">CTPS:</label>
              <input type="text" value={ctps} onChange={e => setCtps(e.target.value)}/>

            <h3>Configurações:</h3>
            <select 
            name="status" 
            id="status"
            value={status}
            onChange={e => setStatus(e.target.value)}  
          >
            <option selected="selected" hidden>Status</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
          
          <select 
            name="isAdmin" 
            id="isAdmin"
            value={isAdmin}
            onChange={e => setIsAdmin(e.target.value)}  
          >
            <option selected="selected" hidden>Administrador</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
           

          <button onClick={atualizarDadosUsuario}>Atualizar</button>

          </div>
        </ContentEditUser>
      </Container>
    </UsuarioProvider>
  )
}