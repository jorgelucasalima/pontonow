import { DashboardAdmin } from '../../components/DashboardAdmin';
import {Header} from '../../components/Header';
import { TableAdmin } from '../../components/TableAdmin';


export function Administrativo() {
  return (
    <>
      <Header/>
      <DashboardAdmin/>
      <TableAdmin/>
    </>
  )
}