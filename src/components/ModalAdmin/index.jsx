import { Container } from "./styles"
import Modal from 'react-modal'
import { useState } from "react"
import firebase from '../../services/apifirebase'
import { toast } from "react-toastify"


export function ModalAdmin(props) {

  //estados
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cargo, setCargo] = useState('')
  const [status, setStatus] = useState('')
  const [isAdmin, setIsAdmin] = useState('')


  //funções
  async function cadastrarFuncionarioFirebase() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async (value) => {
      await firebase.firestore().collection('usuarios').doc(value.user.uid)
      .set({
        uid: value.user.uid,
        nome: nome,
        email: email,
        cargo: cargo,
        status: status,
        isAdmin: isAdmin
      })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!')
        props.onRequestClose()
        setNome('')
        setEmail('')
        setSenha('')
        setCargo('')
        setStatus('')
        setIsAdmin('')
      })
    })
    .catch((error) => {  
      if (error.code === 'auth/email-already-in-use') {
        toast.error('E-mail já cadastrado!')
      } else if (error.code === 'auth/weak-password') {
        toast.error('Senha muito fraca!')
      } 
    })

  }


  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        
          <h1>Cadastrar Funcionário</h1>
          <input 
            type="text" 
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
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
          <select 
            name="cargo" 
            id="cargo"
            value={cargo}
            onChange={e => setCargo(e.target.value)}
          >
            <option selected="selected" hidden>- Selecione o cargo -</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Secretária">Secretária</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Estágiario">Estágiario</option>
          </select>

          <select 
            name="status" 
            id="status"
            value={status}
            onChange={e => setStatus(e.target.value)}  
          >
            <option selected="selected" hidden>- Selecione o status -</option>
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

          <button onClick={cadastrarFuncionarioFirebase}>Cadastrar</button>
         
      </Container>
    </Modal>
  )
}