import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Menu from './components/Menu';
import DefaultAppContainer from './components/DefaultAppContainer';
import Unidades from './pages/Unidades';
import Balance from './pages/Geracao';
import CadastroUnidade from './pages/CadastroUnidade';

function App() {

  const location = useLocation();
  
  return (
    
    <DefaultAppContainer>

        {location.pathname != "/" && <Menu />}{/* Only show menu if is not login page */ }

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/cadastro-unidade/:id" element={<CadastroUnidade />} />
          <Route path="/geracoes" element={<Balance />} />

        </Routes>

    </DefaultAppContainer>
    

  );
}

export default App;