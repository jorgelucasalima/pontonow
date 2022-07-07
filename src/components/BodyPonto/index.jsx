import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import { FiCheckCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState, useEffect } from 'react';
import firebase from '../../services/apifirebase'


export function BodyPonto(props) {


  //estados
  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date());
  const [registrosDia, setRegistrosDia] = useState([]);

  
  useEffect(() => {
    async function getDatas() {
      const instaciaData = new Date()
      const dia = instaciaData.getDate().toString()
      const mes = instaciaData.getMonth() + 1
      const ano = instaciaData.getFullYear()
      const idDataString = (dia+'-'+mes+'-'+ano).toString()

      const db = firebase.firestore();
      const DocumentRef = db.collection('ponto').doc(idDataString.toString());
      
      const doc = await DocumentRef.get()
   
      const dados = {
        inicio_expediente: doc.data().inicio_expediente.toDate(),
        inicio_intervalo: doc.data().inicio_intervalo.toDate(),
        fim_intervalo: doc.data().fim_intervalo.toDate(),
        fim_expediente: doc.data().fim_expediente.toDate(),
      }

      //setando objeto com os dados da hora do dia para o estado
      setRegistrosDia(dados)

      console.log('teste '+ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(doc.data().inicio_expediente.toDate()))

     
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
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(registrosDia.inicio_expediente) }</strong>
        </div>
        <div>
          <p>Inicio Intervalo</p>
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(registrosDia.inicio_intervalo) }</strong>
        </div>
        <div>
          <p>Fim Intervalo</p>
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(registrosDia.fim_intervalo) }</strong>
        </div>
        <div>
          <p>Fim Expediente</p>
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(registrosDia.fim_expediente) }</strong>
        </div>
      </ContentRegistrosDia>
    </Container>
    
  )
}