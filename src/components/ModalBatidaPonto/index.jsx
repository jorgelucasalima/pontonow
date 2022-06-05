import {Container} from './styles'
import Modal from 'react-modal'
import firebase from '../../services/apifirebase'


export function ModalBatidaPonto(props) {


  //funções
  async function registrarPonto() {
    console.log(props.dataAtual)
    await firebase.firestore().collection('ponto').add({
      inicioExpediente: props.dataAtual,
    })
    .then(()=>{
      alert('Ponto registrado com sucesso!')
      props.onRequestClose()

    })
    .catch(()=>{
      alert('Erro ao registrar ponto!')
    })
  }

  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="eact-modal-content"
    >
      <Container onSubmit={registrarPonto}>
        <h2>Confirme seu registro!</h2>
        <strong>{ (new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric' }).format(props.dataAtual)) }</strong>
        <p>{new Intl.DateTimeFormat('pt-BR', { weekday:'long', month:'long', day:'numeric', year:'numeric' }).format(props.dataAtual)}</p>
        <button className='cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button type='submit'>Registrar</button>
      </Container>
    </Modal>
  )
}