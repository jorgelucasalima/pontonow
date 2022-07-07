import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import { FiCheckCircle } from "react-icons/fi";
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
      const dia = instaciaData.getDate().toString()
      const mes = instaciaData.getMonth() + 1
      const ano = instaciaData.getFullYear()
      const idDataString = (dia+'-'+mes+'-'+ano).toString()

      const db = firebase.firestore();
      const DocumentRef = db.collection('ponto').doc(idDataString.toString());
      
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
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(inicioExpediente) }</strong>
        </div>
        <div>
          <p>Inicio Intervalo</p>
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(inicioIntervalo) }</strong>
        </div>
        <div>
          <p>Fim Intervalo</p>
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(fimIntervalo) }</strong>
        </div>
        <div>
          <p>Fim Expediente</p>
          <FiCheckCircle/>
          <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(fimExpediente) }</strong>
        </div>
      </ContentRegistrosDia>
    </Container>
    
  )
}