import { Container } from "./styles"

export function TableAdmin() {
  return (
    <Container>
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
              <a href="">Ver</a>
              <a href="">Editar</a>
              <a href="">Excluir</a>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}