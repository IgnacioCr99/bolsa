
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Pages/Home';
import { ListaOperaciones } from './Components/Pages/ListaOperaciones';
import { ListaInversionista } from './Components/Pages/ListaInversionista';
import { VerOperacion } from './Components/Pages/VerOperacion';
import { AgregarOperacion } from './Components/Pages/AgregarOperacion';
import { SaldoEnCustodia } from './Components/Pages/SaldoEnCustodia';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListaPagosBolsa } from './Components/Pages/ListaPagosBolsa';

function App() {
  return (
    <Router>
    <div id="body" className="nav-fixed">
      <Navbar />

      <div id="layoutSidenav">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ListaOperaciones' element={<ListaOperaciones/>} />
        <Route path='/ListaInversionista' element={<ListaInversionista/>} />
        <Route path='/ListaPagosBolsa' element={<ListaPagosBolsa/>}/>
        <Route path='/VerOperacion' element={<VerOperacion/>} />
        <Route path='/AgregarOperacion' element={<AgregarOperacion/>} />'
        <Route path='/SaldoEnCustodia'element={<SaldoEnCustodia/>}/>
      </Routes>
      
      </div>
      <Footer />
    </div>
    
    </Router>
  );
}

export default App;
