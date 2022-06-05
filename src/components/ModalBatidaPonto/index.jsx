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
        <strong>{ (new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric', second:'numeric' }).format(props.dataAtual)) }</strong>
        <p>{new Intl.DateTimeFormat('pt-BR', { weekday:'long', month:'long', day:'numeric', year:'numeric' }).format(props.dataAtual)}</p>
        <button className='cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button>Registrar</button>
      </Container>
    </Modal>
  )
}