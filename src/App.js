
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Pages/Home';
import { ListaOperaciones } from './Components/Pages/ListaOperaciones';
import { ListaInvercionista } from './Components/Pages/ListaInvercionista';
import { VerOperacion } from './Components/Pages/VerOperacion';
import { AgregarOperacion } from './Components/Pages/AgregarOperacion';

function App() {
  return (
    <div id="body" className="nav-fixed">
      <Navbar />

      <div id="layoutSidenav">
      <Sidebar />
      
      <AgregarOperacion/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
