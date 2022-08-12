import UsuarioProvider from "../../contexts/usuarios";
import { ContentViewPontos, ContentViewUser, Container, ButtonPdf, ContentPdf } from "./styles";
import {useParams, Link} from 'react-router-dom';
import firebase from '../../services/apifirebase'
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {FiDownload, FiEdit} from 'react-icons/fi'

export function ViewUser() {

  const {id} = useParams();

  const [usuario, setUsuario] = useState({});
  const [pontos, setPontos] = useState([]);
  //console.log('pontos:' , pontos)

  useEffect(()=>{
    async function loadUser(){
      await firebase.firestore().collection('usuarios')
      .doc(id)
      .get({
        nome: usuario.nome,
        cpf: usuario.cpf,
        rg: usuario.rg,
        pis: usuario.pis,
        ctps: usuario.ctps,
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


  useEffect(()=> {
    async function loadPontosUser() {
      await firebase.firestore().collection('pontos')
      .where('uid_usuario', '==', id)
      .get()
      .then(response => {
        setPontos(response.docs.map(doc => doc.data()));
      }).catch(error => {
        console.log(error);
      })
    }
    loadPontosUser();
  }, [id])


  return (
    <UsuarioProvider>
      <Header/>
      <Container>

        <ContentPdf>
          <a href=""></a>
          <ButtonPdf>
            <button><FiDownload/></button>
          </ButtonPdf>
        </ContentPdf>
        
        <ContentViewUser>
          <div>
            <h1>Dados Pessoais:</h1>
            <h3>Nome: {usuario.nome}</h3>
            <h3>CPF: {usuario.cpf}</h3>
            <h3>RG: {usuario.rg}</h3>
            <h3>PIS: {usuario.pis}</h3>
            <h3>CTPS: {usuario.ctps}</h3>
            <h3>Cargo: {usuario.cargo}</h3>
          </div>
        </ContentViewUser>

        <ContentViewPontos>
          <div>
            <h1>Pontos:</h1>
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Pontos</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pontos.sort(function(a, b){
                      if (a.ponto < b.ponto) {
                        return -1;  
                      } else {
                        return true;
                      }
                      }).map(ponto => (
                        <tr key={ponto.uid_usuario}>
                          <td>{ponto.data}</td>
                          <td>{new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric', second:'numeric' }).format(ponto.ponto)}</td>
                          <td> <Link to={`/edit/${ponto.uid_usuario}`}><FiEdit/></Link></td>
                        </tr>
                       ))

                  }
                </tbody>
              </table>
          </div>
        </ContentViewPontos>
      </Container>
    </UsuarioProvider>
  )
}