import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState, useEffect } from 'react';
import firebase from '../../services/apifirebase'


export function BodyPonto(props) {

  //estados
  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date())
  const [registros, setRegistros] = useState([])

  //console.log('REGISTRO: ', registros)

  useEffect( () => {

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
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('Não há registros');
          } else {
            const dados = []
            snapshot.forEach(doc => {
              dados.push({
                status: doc.data().status,
                ponto: doc.data().ponto,
              })
            });
            setRegistros(dados)
          }
        })
        
    }
    getPontos()
    
  }, [registros])

  
  


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
          {registros.find(registro => registro.status === 'inicio_expediente') ? <FiCheckCircle size={30}/> : <FiAlertCircle size={30}/>}
        </div>

        <div>
          <p>Inicio Intervalo</p>
          {registros.find(registro => registro.status === 'inicio_expediente') ? <FiCheckCircle size={30}/> : <FiAlertCircle size={30}/>}
        </div>
        <div>
          <p>Fim Intervalo</p>
          {registros.find(registro => registro.status === 'inicio_expediente') ? <FiCheckCircle size={30}/> : <FiAlertCircle size={30}/>}
        </div>
        <div>
          <p>Fim Expediente</p>
          {registros.find(registro => registro.status === 'inicio_expediente') ? <FiCheckCircle size={30}/> : <FiAlertCircle size={30}/>}
        </div>
        
      </ContentRegistrosDia>
    </Container>
    
  )
}