import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState, useEffect } from 'react';
import firebase from '../../services/apifirebase'

export function BodyPonto(props) {

  //estados
  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date())
  const [eventClick, setEventClick] = useState(0)
  const [registros, setRegistros] = useState([])

  //console.log('PROPS: ', props)

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
        
        let dados = []
        docPonto.forEach(doc => {
          dados.push({
            status: doc.data().status,
            ponto: doc.data().ponto.toDate(),
          })
        })
        //console.log('DADOS:  ', dados)
        setRegistros(dados)
        
          
    }
    getPontos()
    
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
        <button onClick={abrirModalBatidaPonto} >REGISTRAR PONTO</button>
        <a href=""></a>
      </ContentBatida>

      <ContentRegistrosDia>
        <>
          {registros.sort(function(a, b){
            if (a.ponto < b.ponto) {
              return -1;  
            } else {
              return true;
            }
            }).map((registro) => (
              <div key={registro.status}>
                { registro.status === 'inicio_expediente' || 
                  registro.status === 'inicio_intervalo'  || 
                  registro.status === 'fim_intervalo'     || 
                  registro.status === 'fim_expediente'    ? 
                  <>  
                    <p>Registrado</p>
                    <strong>
                      <FiCheckCircle className='check'/>
                      {new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric', second:'numeric' }).format(registro.ponto)}
                    </strong>
                  </>
                   : 
                  <FiAlertCircle className='alerta'/>
                }
              </div>
            ))
          }         
        </>
      </ContentRegistrosDia>
    </Container>
  )
}