import { Container, Content } from "./styles"
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { useState } from "react";
import {ModalAdmin} from "../ModalAdmin"
 
export function TableAdmin(props) {


  const [isModalTableAdminOpen, setIsModalTableAdminOpen] = useState(false);

  function abrirModalTableAdmin() {
    setIsModalTableAdminOpen(true)
  }

  function fecharModalTableAdmin() {
    setIsModalTableAdminOpen(false)
  }



  return (
    <Container>
      <ModalAdmin isOpen={isModalTableAdminOpen} onRequestClose={fecharModalTableAdmin}/>
      <Content>
        <h2>Funcionários</h2>
        <button onClick={abrirModalTableAdmin}>Cadastrar</button>
      </Content>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João</td>
            <td>joao@qualinfo.com</td>
            <td>Desenvolvedor</td>
            <td>Ativo</td>
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