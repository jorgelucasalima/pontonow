import {Container} from './styles'
import Modal from 'react-modal'
import firebase from '../../services/apifirebase'
import { toast } from 'react-toastify';


export function ModalBatidaPonto(props) {


  //funções

  async function registrar() {
    const db = firebase.firestore();
    const DocumentRef = db.collection('ponto').doc('8YYv4IyLXCNdAeFJ14vr')

    try {
      const response = await db.runTransaction( async t => {
        const doc = await t.get(DocumentRef);
        console.log(doc.data())

        if (doc.data().inicioExpediente === '') {
          t.update(DocumentRef, {
            inicioExpediente: props.dataAtual,
          })
          props.onRequestClose()
          toast.success('Ponto registrado com sucesso!')
        } 
          //verificar se o inicio Expediente está preenchido e se o inicio do intervalo está vazio e depois adicina a hora atual no inicio intervalo
          else if (doc.data().inicioExpediente !== '' && doc.data().inicioIntervalo === '') {
            t.update(DocumentRef, {
              inicioIntervalo: props.dataAtual,
            })
            props.onRequestClose()
            toast.success('Ponto registrado com sucesso!')
          }
          //verificar se o inicio intervalo está preenchido e se o fim do intervalo está preenchido e depois adicina a hora atual no fim intervalo
          else if (doc.data().inicioIntervalo !== '' && doc.data().fimIntervalo === '') {
            t.update(DocumentRef, {
              fimIntervalo: props.dataAtual,
            })
            props.onRequestClose()
            toast.success('Ponto registrado com sucesso!')
          }
          //verificar se o fim do intervalo está preenchido e se o fim do expediente está vazio e depois adicina a hora atual no fim expediente
          else if (doc.data().fimIntervalo !== '' && doc.data().fimExpediente === '') {
            t.update(DocumentRef, {
              fimExpediente: props.dataAtual,
            })
            props.onRequestClose()
            toast.success('Ponto registrado com sucesso!')
          }
      })
      
    }  
    catch (error) {
      toast.error('Ocorreu algum problema ao registrar o ponto!')
      console.log(error)
    }
  }  

  async function registrarPonto() {
    const db = firebase.firestore();
    const DocumentRef = db.collection('ponto').doc()
    console.log(DocumentRef)
  }


  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="eact-modal-content"
    >
      <Container>
        <h2>Confirme seu registro!</h2>
        <strong>{ (new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric' }).format(props.dataAtual)) }</strong>
        <p>{new Intl.DateTimeFormat('pt-BR', { weekday:'long', month:'long', day:'numeric', year:'numeric' }).format(props.dataAtual)}</p>
        <button className='cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button onClick={registrarPonto}>Registrar</button>
      </Container>
    </Modal>
  )

}