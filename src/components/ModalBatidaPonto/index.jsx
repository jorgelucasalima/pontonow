import {Container} from './styles'
import Modal from 'react-modal'


export function ModalBatidaPonto(props) {
  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="eact-modal-content"
    >
      <Container>
        <h2>Confirme seu registro!</h2>
        <strong>08:00:01</strong>
        <p>12 de agosto de 1994</p>
        <button className='cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button>Registrar</button>
      </Container>
    </Modal>
  )
}