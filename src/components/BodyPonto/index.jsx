import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import front from '../../assets/front.jpg'
import { FiCheckCircle } from "react-icons/fi";
import { ModalBatidaPonto } from '../ModalBatidaPonto';
import { useState } from 'react';

export function BodyPonto(props) {

  const [isModalBatidaPontoOpen, setIsModalBatidaPontoOpen] = useState(false);

  function abrirModalBatidaPonto() {
    setIsModalBatidaPontoOpen(true);
  }

  function fecharModalBatidaPonto() {
    setIsModalBatidaPontoOpen(false);
  }



  return(
    <Container>
      <ModalBatidaPonto isOpen={isModalBatidaPontoOpen} onRequestClose={fecharModalBatidaPonto}/>
      <ContentTexto>
        <h1>Bem vindo ao Ponto Now</h1>
        <p>Registre seu ponto de acordo o horário do seu computador.</p>
      </ContentTexto>
      
      <ContentBatida>
        <h1>as</h1>
        <button onClick={abrirModalBatidaPonto}>Registrar Ponto</button>
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