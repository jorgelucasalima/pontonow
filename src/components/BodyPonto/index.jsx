import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import front from '../../assets/front.jpg'
import { FiCheckCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState } from 'react';

export function BodyPonto(props) {

  //estados
  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);
  const [dataAtual, setDataAtual] = useState(new Date());

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
      <ModalBatidaPonto isOpen={isModalBatidaPontoOpen} onRequestClose={fecharModalBatidaPonto} dataAtual={dataAtual}/>
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
          <strong>08:00:01</strong>
        </div>
        <div>
          <p>Inicio Intervalo</p>
          <FiCheckCircle/>
          <strong>08:00:01</strong>
        </div>
        <div>
          <p>Fim Intervalo</p>
          <FiCheckCircle/>
          <strong>08:00:01</strong>
        </div>
        <div>
          <p>Fim Expediente</p>
          <FiCheckCircle/>
          <strong>08:00:01</strong>
        </div>
      </ContentRegistrosDia>
    </Container>
    
  )
}