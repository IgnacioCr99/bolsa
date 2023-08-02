
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Pages/Home';
import { ListaOperaciones } from './Components/Pages/ListaOperaciones';
import { ListaInvercionista } from './Components/Pages/ListaInvercionista';
import { VerOperacion } from './Components/Pages/VerOperacion';
import { AgregarOperacion } from './Components/Pages/AgregarOperacion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Route path='/ListaInvercionista' element={<ListaInvercionista/>} />
        <Route path='/VerOperacion' element={<VerOperacion/>} />
        <Route path='/AgregarOperacion' element={<AgregarOperacion/>} />'
        
      </Routes>
      
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
