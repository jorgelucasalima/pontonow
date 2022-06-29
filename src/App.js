import Rotas from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import EstiloGlobal from './styles/global'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  Modal.setAppElement('#root');
  return (
      <Router>
        <ToastContainer autoClose={5000}/>
        <Rotas/>
        <EstiloGlobal/>
      </Router>
  );
}

export default App;
