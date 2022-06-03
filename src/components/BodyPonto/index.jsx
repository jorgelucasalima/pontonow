import {Container, ContentTexto, ContentBatida, ContentRegistrosDia} from './styles'
import front from '../../assets/front.jpg'
import { FiCheckCircle } from "react-icons/fi";

export function BodyPonto() {
  return(
    <Container>
      <ContentTexto>
        <h1>Bem vindo ao Ponto Now</h1>
        <p>Registre seu ponto de acordo o horário do seu computador.</p>
      </ContentTexto>
      
      <ContentBatida>
        <h1>08:00:01</h1>
        <button>Registrar Ponto</button>
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