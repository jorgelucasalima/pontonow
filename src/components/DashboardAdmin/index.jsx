import { Container, Content } from "./styles"
import { FiUsers, FiUserMinus, FiUserCheck } from "react-icons/fi";

export function DashboardAdmin() {
  return(
    <Container>
      <Content>
        <div>
          <p>Funcionários Ativos</p>
          <FiUserCheck/>
          <strong>23</strong>
        </div>
        <div>
          <p>Funcionários Inativos</p>
          <FiUserMinus/>
          <strong>3</strong>
        </div>
        <div>
          <p>Funcioários Total</p>
          <FiUsers/>
          <strong>2</strong>
        </div>
      </Content>
    </Container>
    
  )
}