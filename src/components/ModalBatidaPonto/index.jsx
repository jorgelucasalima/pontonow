import {Container} from './styles'
import Modal from 'react-modal'


export function ModalBatidaPonto(props) {

  const horaAtual = new Date()


  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="eact-modal-content"
    >
      <Container>
        <h2>Confirme seu registro!</h2>
        <strong></strong>
        <p>12 de agosto de 1994</p>
        <button className='cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button>Registrar</button>
      </Container>
    </Modal>
  )
}