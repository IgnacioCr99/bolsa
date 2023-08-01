import React from 'react'


export const Navbar = () => {
  return (
    <div className="nav-fixed"> 
 <nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
  <a className="navbar-brand" href="../home/main.php"><img src="../assets/img/logo_contempora.png" style={{height: 'auto', width: 'auto'}} className="img-fluid" /></a>
  <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2" id="sidebarToggle" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
  <ul className="navbar-nav align-items-center ml-auto">
    <li className="nav-item dropdown no-caret mr-3 d-none d-md-inline">
      <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="d-none d-md-inline font-weight-500">Ayuda</div>
        <i className="fas fa-chevron-right dropdown-arrow" />
      </a>
      <div className="dropdown-menu dropdown-menu-right py-0 mr-sm-n15 mr-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
        <a className="dropdown-item py-3" href="#!" target="_blank">
          <div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="book" /></div>
          <div>
            <div className="small text-gray-500">Documentación</div>
            Explicación Factoring
          </div>
        </a>
        <div className="dropdown-divider m-0" />
        <a className="dropdown-item py-3" href="#!" target="_blank">
          <div className="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="code" /></div>
          <div>
            <div className="small text-gray-500">Manuales</div>
            Manuales de uso plataforma
          </div>
        </a>
        <div className="dropdown-divider m-0" />
     <a class="dropdown-item py-3" href="#!" target="_blank">
                      <div class="icon-stack bg-primary-soft text-primary mr-4"><i data-feather="file-text"></i></div>
                      <div>
                          <div class="small text-gray-500">Preguntas Frecuentes</div>
                          Preguntas Frecuentes
                      </div>
                  </a> 
      </div>
    </li>
    <li className="nav-item dropdown no-caret mr-3 d-md-none">
      <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="search" /></a>
      {/* Dropdown - Search*/}
      <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
        <form className="form-inline mr-auto w-100">
          <div className="input-group input-group-joined input-group-solid">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <div className="input-group-text"><i data-feather="search" /></div>
            </div>
          </div>
        </form>
      </div>
    </li>
    <li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
      <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
      <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
        <h6 className="dropdown-header dropdown-notifications-header">
          <i className="mr-2" data-feather="bell" />
          Notificaciones
        </h6>
        <a class="dropdown-item dropdown-notifications-item" href="#!">
                      <div class="dropdown-notifications-item-icon bg-warning"><i data-feather="activity"></i></div>
                      <div class="dropdown-notifications-item-content">
                          <div class="dropdown-notifications-item-content-details">December 29, 2019</div>
                          <div class="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                      </div>
                  </a> 
        <a class="dropdown-item dropdown-notifications-item" href="#!">
                      <div class="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart"></i></div>
                      <div class="dropdown-notifications-item-content">
                          <div class="dropdown-notifications-item-content-details">December 22, 2019</div>
                          <div class="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                      </div>
                  </a>
        <a className="dropdown-item dropdown-notifications-item" href="#!">
          <div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle" /></div>
          <div className="dropdown-notifications-item-content">
            <div className="dropdown-notifications-item-content-details">10 de Agosto del 2020</div>
            <div className="dropdown-notifications-item-content-text">Su simulación esta en el paso de aprobación.</div>
          </div>
        </a>
         <a class="dropdown-item dropdown-notifications-item" href="#!">
                      <div class="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus"></i></div>
                      <div class="dropdown-notifications-item-content">
                          <div class="dropdown-notifications-item-content-details">December 2, 2019</div>
                          <div class="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                      </div>
                  </a> 
        <a className="dropdown-item dropdown-notifications-footer" href="#!">Todas las alertas</a>
      </div>
    </li>

    <li className="nav-item dropdown no-caret mr-2 dropdown-user">
      <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i data-feather="user" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </a>
      <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
        <h6 className="dropdown-header d-flex align-items-center">
          <i className="dropdown-user-img" data-feather="user" />
          <div className="dropdown-user-details">
            <div className="dropdown-user-details-name">Agrobox S.A</div>
            <div className="dropdown-user-details-email">jacosta@agrobox.cl</div>
          </div>
        </h6>
        <div className="dropdown-divider" />
        <a class="dropdown-item" href="#!">
                      <div class="dropdown-item-icon"><i data-feather="settings"></i></div>
                      Mi Cuenta
                  </a> 
        <a className="dropdown-item" href="index.php">
          <div className="dropdown-item-icon"><i data-feather="log-out" /></div>
          Cerrar Sesión
        </a>
      </div>
    </li>
  </ul>
</nav>
</div>
  
                
  
  )
                }
