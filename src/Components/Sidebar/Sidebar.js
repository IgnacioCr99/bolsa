import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div id="layoutSidenav_nav">
    <nav className="sidenav shadow-right sidenav-light">
      <div className="sidenav-menu">
        <div className="nav accordion" id="accordionSidenav">
          <div className="sidenav-menu-heading">Comercial</div>
          <a className="nav-link nav-linkcmp" href="../Pages/Home.js">
            <div className="nav-link-icon"><i data-feather="activity" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
            Inicio
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
          <div className="sidenav-menu-heading">Control de Operaciones</div>
          <a className="nav-link nav-linkcmp" href="../Pages/ListaOperaciones.js">
            <div className="nav-link-icon"><i data-feather="list" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></div>
            Lista Operaciones
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a> 
          <div className="sidenav-menu-heading">Inversionista</div>
          <a className="nav-link nav-linkcmp" href="../inversionista/inversionista.php?listinv=listinv">
            <div className="nav-link-icon"><i className="fas fa-solid fa-handshake" /></div>
            Lista Inversionista
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
          <a className="nav-link nav-linkcmp" href="../inversionista/saldocustodia.php">
            <div className="nav-link-icon"><i className="fas fa-solid fa-lock" /></div>
            Saldo Custodia
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
          <a className="nav-link nav-linkcmp" href="../inversionista/cartola_inversionista.php">
            <div className="nav-link-icon"><i className="fas fa-solid fa-folder" /></div>
            Cartola Inversionista
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
          <div className="sidenav-menu-heading">Pagos Bolsa</div>
          <a className="nav-link nav-linkcmp" href="../pagos_bolsa/pagobolsa.php?listpagobolsa=listpagobolsa">
            <div className="nav-link-icon"><i className="fas fa-regular fa-money-bill" /></div>
            Lista Pagos Bolsa
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
          <div className="sidenav-menu-heading">Ejecutivos</div>
          <a className="nav-link nav-linkcmp" href="../ejecutivos/ejecutivos.php?listeje=listeje">
            <div className="nav-link-icon"><i className="fas fa-regular fa-address-book" /></div>
            Lista Ejecutivos
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
          <div className="sidenav-menu-heading">Pagadores</div>
          <a className="nav-link nav-linkcmp" href="../pagadores/pagadores.php?listpag=listpag">
            <div className="nav-link-icon"><i className="fas fa-regular fa-users" /></div>
            Lista Pagadores
            <div className="sidenav-collapse-arrow"><i className="fas fa-angle-right" /></div>
          </a>
        </div>
      </div>
      <div className="sidenav-footer">
        <div className="sidenav-footer-content">
          <div className="sidenav-footer-subtitle">Sesión iniciada:</div>
          <div className="sidenav-footer-title">Agrobox S.A.</div>
        </div>
      </div>
    </nav>
  </div>
  
  )
}
