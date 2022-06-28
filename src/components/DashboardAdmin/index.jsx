import { Container, Content } from "./styles"
import { FiUsers, FiUserMinus, FiUserX } from "react-icons/fi";

export function DashboardAdmin() {
  return(
    <Container>
      <Content>
        <div>
          <p>Funcionários Ativos</p>
          <FiUsers/>
          <strong>23</strong>
        </div>
        <div>
          <p>Funcionários Inativos</p>
          <FiUserMinus/>
          <strong>3</strong>
        </div>
        <div>
          <p>Faltoso Hoje</p>
          <FiUserX/>
          <strong>2</strong>
        </div>
      </Content>
    </Container>
    
  )
}