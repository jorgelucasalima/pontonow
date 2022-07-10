import {Container} from './styles'
import Modal from 'react-modal'
import firebase from '../../services/apifirebase'
import { toast } from 'react-toastify';


export function ModalBatidaPonto(props) {

  //funções

  async function registrarPonto() {

    const instaciaData = new Date()
    const dia = instaciaData.getDate().toString()
    const mes = instaciaData.getMonth() + 1
    const ano = instaciaData.getFullYear()

    const idDataString = (dia+'-'+mes+'-'+ano).toString()
   
    const db = firebase.firestore();
    const DocumentRef = db.collection('ponto').doc(idDataString+'-'+props.uid);
    console.log('Documento.id: '+DocumentRef.id)
    
    const doc = await DocumentRef.get()

    //verificar se existe algum documento direfente da data de hoje 
    // se meu documento.id for diferente da data de hoje ele adiciona 
    if (DocumentRef.id === idDataString+'-'+props.uid && doc.data() === undefined ) {
      try {
        await DocumentRef.set({
          uid_documento: DocumentRef.id,
          uid_usuario: props.uid,
          inicio_expediente: props.dataAtual,
          inicio_intervalo: '',
          fim_intervalo: '',
          fim_expediente: '',
        })
        props.onRequestClose()
        toast.success('Ponto registrado com sucesso!')
      } catch (error) {
          props.onRequestClose()
          toast.error('Ocorreu um problema ao registrar o ponto!')
      }
        
      }  else  {
        try {
          //verificar se inicio expediente esta vazio e inicio intervalo ta nulo e adiciona
          if (doc.data().inicio_expediente !== '' && doc.data().inicio_intervalo === '') {
            await DocumentRef.update({
              inicio_intervalo: props.dataAtual,
            })
            props.onRequestClose()
            toast.success('Ponto registrado com sucesso!')
          }
          //verifica se o inicio intervalo esta vazio e fim intervalo ta nulo e adiciona
            else if (doc.data().inicio_intervalo !== '' && doc.data().fim_intervalo === '') {
              await DocumentRef.update({
                fim_intervalo: props.dataAtual,
              })
              props.onRequestClose()
              toast.success('Ponto registrado com sucesso!')
            }
            //verifica se o fim intervalo esta vazio e fim expediente ta nulo e adiciona
            else if (doc.data().fim_intervalo !== '' && doc.data().fim_expediente === '') {
              await DocumentRef.update({
                fim_expediente: props.dataAtual,
              })
              props.onRequestClose()
              toast.success('Ponto registrado com sucesso!')
            }

            else {
              props.onRequestClose()
              toast.info('Todos os pontos foram registrados!')
            }
        }
        catch (error) {
          console.log(error)
          props.onRequestClose()
          toast.error('Ocorreu um problema ao registrar o ponto!')
        }
    }
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