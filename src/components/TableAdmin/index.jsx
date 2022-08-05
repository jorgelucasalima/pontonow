import { Container, Content } from "./styles"
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { useContext, useState } from "react";
import {ModalAdmin} from "../ModalAdmin"
import { UsuariosContext } from "../../contexts/usuarios";
import { Link } from 'react-router-dom'
 
export function TableAdmin(props) {

  const {usuarios} = useContext(UsuariosContext)
  console.log(usuarios)

  //estados
  const [isModalTableAdminOpen, setIsModalTableAdminOpen] = useState(false);

  //funções
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
        {usuarios.map( usuario => (
            <tr key={usuario.uid}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.cargo}</td>
              <td>{usuario.status}</td>
              <td>
                <Link to={`/view/${usuario.uid}`}><FiEye/></Link>
                <Link to={`/edit/${usuario.uid}`}><FiEdit/></Link>
                <a href=""><FiTrash/></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}