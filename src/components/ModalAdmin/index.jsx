import { Container } from "./styles"
import Modal from 'react-modal'
import { useState } from "react"
import firebase from '../../services/apifirebase'
import { toast } from "react-toastify"

export function ModalAdmin(props) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cargo, setCargo] = useState('')
  const [status, setStatus] = useState('')


  async function cadastrarFuncionario() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('Usuário cadastrado com sucesso!')
    }).catch(error => {
      console.log(error)
    }
    )
  }

  async function cadastrarFuncionarioFirebase() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async (value) => {
      await firebase.firestore().collection('usuarios').doc(value.user.uid)
      .set({
        nome: nome,
        email: email,
        cargo: cargo,
        status: status
      })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!')
        props.setModalIsOpen(false)
        setNome('')
        setEmail('')
        setSenha('')
        setCargo('')
        setStatus('')
      })
    })
    .catch((error) => {  
      if (error.code === 'auth/email-already-in-use') {
        toast.error('E-mail já cadastrado!')
      } else if (error.code === 'auth/weak-password') {
        toast.error('Senha muito fraca!')
      } else {
        toast.error('Erro ao cadastrar usuário!')
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

          <button onClick={cadastrarFuncionarioFirebase}>Cadastrar</button>
         
      </Container>
    </Modal>
  )
}