import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState, useEffect } from 'react';
import firebase from '../../services/apifirebase'


export function BodyPonto(props) {

  //estados
  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date())
  const [pontoDia, setPontoDia] = useState({})

  //console.log('Ponto: ',pontoDia)

  useEffect( () => {
    
    getPontos()

  }, [pontoDia])


    async function getPontos() {
    // instacia datas
      const instaciaData = new Date()
      const dia = instaciaData.getDate()
      const mes = instaciaData.getMonth() + 1
      const ano = instaciaData.getFullYear()
      const dataString = (dia+'-'+mes+'-'+ano).toString()

      //instanciando o banco de dados firebase
      const db = firebase.firestore();

      //colletion usuarios
      const DocumentRefUsuario = db.collection('usuarios').doc(props.uid.toString());
      const docUsuario = await DocumentRefUsuario.get();

      //colletion ponto
      const DocumentRefPontos = db.collection('pontos')
      const docPonto = await DocumentRefPontos
      .where('uid_usuario', '==', docUsuario.data().uid)
      .where('data', '==', dataString)
      .get()

      docPonto.forEach(item => {
        //console.log('item: ',item.data())
        if (item.data().status === 'inicio_expediente') {
          setPontoDia('inicio_expediente', item.data().ponto.toDate())
        } else if (item.data().status === 'inicio_intervalo') {
          setPontoDia('inicio_intervalo', item.data().ponto.toDate())
        }

      })

    }

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
            pontoDia.inicio_expediente !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(pontoDia.inicio_expediente) }</strong>
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
            pontoDia.inicio_intervalo !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(pontoDia.inicio_intervalo) }</strong>
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
            pontoDia.fim_intervalo !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(pontoDia.fim_intervalo) }</strong>
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
            pontoDia.fim_expediente !== '' ? (
              <>
                <FiCheckCircle className='check'/>
                <strong>{ new Intl.DateTimeFormat('pt-BR', {hour: 'numeric', minute:'numeric', second:'numeric' }).format(pontoDia.fim_expediente) }</strong>
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