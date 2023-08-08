
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
import { ListaCedente } from './Components/Pages/ListaCedente';
import { ListaPagadores } from './Components/Pages/ListaPagadores';
import { ListaFactura } from './Components/Pages/ListaFactura';
import { AgregarInversionista } from './Components/Pages/AgregarInversionista';
import { VerFactura } from './Components/Pages/VerFactura';
import { AgregarFactura } from './Components/Pages/AgregarFactura';

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
        <Route path='/AgregarOperacion' element={<AgregarOperacion/>} />
        <Route path='/SaldoEnCustodia'element={<SaldoEnCustodia/>}/>
        <Route path='/ListaCedente' element={<ListaCedente/>}/>
        <Route path='/ListaPagadores' element={<ListaPagadores/>}/>
        <Route path='/ListaFactura' element={<ListaFactura/>}/>
        <Route path='/AgregarInversionista' element={<AgregarInversionista/>}/>
        <Route path='/VerFactura' element={<VerFactura/>}/>
        <Route path='/AgregarFactura' element={<AgregarFactura/>}/>
      </Routes>
      
      </div>
      <Footer />
    </div>
    
    </Router>
  );
}

export default App;
