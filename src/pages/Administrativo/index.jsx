import { DashboardAdmin } from '../../components/DashboardAdmin';
import {Header} from '../../components/Header';
import { TableAdmin } from '../../components/TableAdmin';
import UsuarioProvider from '../../contexts/usuarios';

export function Administrativo() {
  return (
    <UsuarioProvider>
      <Header/>
      <DashboardAdmin/>
      <TableAdmin/>
    </UsuarioProvider>
  )
}