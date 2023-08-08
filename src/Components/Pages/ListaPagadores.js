import React from 'react'

export const ListaPagadores = () => {
  return (
    <div id="layoutSidenav_content">
        

    <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
      <div className="container">
        <div className="page-header-content pt-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mt-4">
              <h1 className="page-header-title">
                <div className="page-header-icon"><i data-feather="arrow-right-circle" /></div>
                CMP Bolsa de Productos 
              </h1>
              <div className="page-header-subtitle">Bienvenido <strong>Agrobox S.A</strong> al Sistema CMP Bolsa de Productos de Contempora s.a</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    
    
      <div className="container mt-n10">
      <div className="card">
        <div className="card-body">
          <div className="tab-content" id="cardTabContent">
            <div className="container">
              <div className=" row justify-content-md-center mt-5">
              </div>
              <div className="col-xxl-12 col-xl-12 mt-5">
                <div className="card">
                  <div className="card-header">Listado de Pagadores </div>
                  <div className="card-body">
                   
                    <div className="datatable table-responsive-xxl">
                    <table className="table  table-hover" id="dataTable1" width="100%" cellSpacing={0}>
                        <thead>
                          <tr>
                          <th>Nombre</th>
                            <th>Rut</th>
                            
                          
                          </tr>
                        </thead>
                        
                        <tbody>
                          <tr>
                            <td>TYPACK</td>
                            <td>95874000-k</td>
                           
                          </tr>
                          <tr>
                          <td>Contempora Factoring</td>
                            <td>99562370-6</td>
                            
                          </tr>
                          <tr>
                          <td>PROCESADORA DE ALIMENTOS DEL SUR LTDA.</td>
                            <td>77476390-2</td>
                          </tr>
                          <tr>
                          <td>FAENADORA LO MIRANDA LTDA.</td>
                            <td>78408440-K</td>
                          </tr>
                          <tr>
                          <td>CERMAQ</td>
                            <td>79784980-4</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer mt-auto footer-light">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 small">Copyright © Contempora S.A 2023</div>
    </div>
  </div>
</footer>
    </div>  
  )
}
