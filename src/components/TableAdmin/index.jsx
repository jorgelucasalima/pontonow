import { Container, Content } from "./styles"
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export function TableAdmin() {
  return (
    <Container>
      <Content>
        <h2>Funcionários</h2>
        <button>Cadastrar</button>
      </Content>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João</td>
            <td>joao@qualinfo.com</td>
            <td>Desenvolvedor</td>
            <td>
              <a href=""> <FiEye/> </a>
              <a href=""> <FiEdit/> </a>
              <a href=""> <FiTrash/> </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}