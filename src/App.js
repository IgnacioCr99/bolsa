import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Pages/Home';

function App() {
  return (
    <div className="nav-fixed">
      <Navbar />

      <div id="layoutSidenav">
      <Sidebar />
      
      <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
