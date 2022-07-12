import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState, useEffect } from 'react';
import firebase from '../../services/apifirebase'


export function BodyPonto(props) {


  //estados
  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date());

  const [inicioExpediente, setInicioExpediente] = useState('');
  const [inicioIntervalo, setInicioIntervalo] = useState('');
  const [fimIntervalo, setFimIntervalo] = useState('');
  const [fimExpediente, setFimExpediente] = useState('');
 

  useEffect(() => {
    async function getDatas() {
      const instaciaData = new Date()
      const dia = instaciaData.getDate()
      const mes = instaciaData.getMonth() + 1
      const ano = instaciaData.getFullYear()
      const idDataString = (dia+'-'+mes+'-'+ano).toString()
      

      const db = firebase.firestore();
      const DocumentRef = db.collection('ponto').doc(idDataString+'-'+props.uid);
      const doc = await DocumentRef.get()
  
      //setando os valores dos estados com os dados do banco
      setInicioExpediente(doc.data().inicio_expediente.toDate())
      setInicioIntervalo(doc.data().inicio_intervalo.toDate())
      setFimIntervalo(doc.data().fim_intervalo.toDate())
      setFimExpediente(doc.data().fim_expediente.toDate())
      
    }
  
    getDatas()
  }, [])

  

  //funções
  function abrirModalBatidaPonto() {
    setIsModalBatidaPontoOpen(true);
  }

  function fecharModalBatidaPonto() {
    setIsModalBatidaPontoOpen(false);
  }

       
  //ficar atualizando a dataAtual a cada 1 segundo
  setTimeout(()=>{
    setDataAtual(new Date());
  }, 1000);


  return(
    <Container>
      <ModalBatidaPonto 
        isOpen={isModalBatidaPontoOpen} 
        onRequestClose={fecharModalBatidaPonto} 
        dataAtual={dataAtual}
        uid={props.uid}
      />
      <ContentTexto>
        <h1>Bem vindo ao Ponto Now</h1>
        <p>Hoje é {new Intl.DateTimeFormat('pt-BR', { weekday:'long', month:'long', day:'numeric', year:'numeric' }).format(dataAtual)}</p>
      </ContentTexto>
      
      <ContentBatida>
        <h1>{ (new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric', second:'numeric' }).format(dataAtual)) }</h1>
        <button onClick={abrirModalBatidaPonto}>REGISTRAR PONTO</button>
        <a href=""></a>
      </ContentBatida>

      <ContentRegistrosDia>
       <div>
          <p>Inicio Expediente</p>
          {
            inicioExpediente !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(inicioExpediente) }</strong>
              </>
            ) : (
              <>
                <FiAlertCircle className='alerta'/>
                <a href=""></a>
              </>
            )
          }
        </div>
        <div>
          <p>Inicio Intervalo</p>
          {
            inicioIntervalo !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(inicioIntervalo) }</strong>
              </>
            ) : (
              <>
                <FiAlertCircle className='alerta'/>
                <a href=""></a>
              </>
            )
          }
        </div>
        <div>
          <p>Fim Intervalo</p>
          {
            fimIntervalo !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(fimIntervalo) }</strong>
              </>
            ) : (
              <>
                <FiAlertCircle className='alerta'/>
                <a href=""></a>
              </>
            )
          }
        </div>
        <div>
          <p>Fim Expediente</p>
          {
            fimExpediente !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(fimExpediente) }</strong>
              </>
            ) : (
              <>
                <FiAlertCircle className='alerta'/>
                <a href=""></a>
              </>
            )
          }
        </div>
      </ContentRegistrosDia>
    </Container>
    
  )
}