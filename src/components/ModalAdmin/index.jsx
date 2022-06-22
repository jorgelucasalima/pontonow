import { Container } from "./styles"
import Modal from 'react-modal'

export function ModalAdmin(props) {

  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <form action="">
          <h1>Cadastrar Funcionário</h1>
          <input type="text" placeholder="Nome"/>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <select name="" id="">
            <option value="" selected>- Cargo -</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Secretária">Secretária</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Estágiario">Estágiario</option>
          </select>
          <button>Cadastrar</button>
        </form>  
      </Container>
    </Modal>
  )
}