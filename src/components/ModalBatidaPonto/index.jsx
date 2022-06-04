import {Container} from './styles'
import Modal from 'react-modal'



export function ModalBatidaPonto(props) {
  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="Overlay"
      className="Modal"
    >
      <Container>
        <h2>Confirme seu registro!</h2>
        <p>Você está prestes a registrar seu ponto de acordo com o horário do seu computador.</p>
        <strong>08:00:01</strong>
        <p>12 de agosto de 1994</p>
        <button>Cancelar</button>
        <button>Registrar</button>
      </Container>
    </Modal>
  )
}