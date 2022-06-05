import Rotas from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import EstiloGlobal from './styles/global'
import Modal from 'react-modal'


function App() {
  Modal.setAppElement('#root');
  return (
    <Router>
      <Rotas/>
      <EstiloGlobal/>
    </Router>
  );
}

export default App;
