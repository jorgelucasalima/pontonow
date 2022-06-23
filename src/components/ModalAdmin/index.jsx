import { Container } from "./styles"
import Modal from 'react-modal'
import { useState } from "react"
import firebase from '../../services/apifirebase'

export function ModalAdmin(props) {

  //const [nomeFuncionario, setNomeFuncionario] = useState('')
  const [emailFuncionario, setEmailFuncionario] = useState('')
  const [senhaFuncionario, setSenhaFuncionario] = useState('')
  //const [cargoFuncionario, setCargoFuncionario] = useState('')


  async function cadastrarFuncionario() {
    await firebase.auth().createUserWithEmailAndPassword(emailFuncionario, senhaFuncionario)
    .then(() => {
      console.log('Usuário cadastrado com sucesso!')
    }).catch(error => {
      console.log(error)
    }
    )

  }

// removido o form para inclusão do usuário
// o ideal é deixar o form para cadastro das outras informações do usuário
// e botar um onSubmit no container do form para chamar a função cadastrarFuncionario()
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
            value={emailFuncionario}
            onChange={e => setEmailFuncionario(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Senha"
            value={senhaFuncionario}
            onChange={e => setSenhaFuncionario(e.target.value)}   
          />
          <select 
            name="cargoFuncionario" 
            id="cargoFuncionario"
           
          >
            <option value='DEFAULT' selected="selected" hidden>- Selecione o cargo -</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Secretária">Secretária</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Estágiario">Estágiario</option>
          </select>
          <button onClick={cadastrarFuncionario}>Cadastrar</button>
         
      </Container>
    </Modal>
  )
}