import { Container, Content } from "./styles"
import { FiUsers, FiUserMinus, FiUserX } from "react-icons/fi";

export function DashboardAdmin() {
  return(
    <Container>
      <Content>
        <div>
          <p>Qtd. Funcionários</p>
          <FiUsers/>
          <strong>23</strong>
        </div>
        <div>
          <p>Funcionários Férias</p>
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