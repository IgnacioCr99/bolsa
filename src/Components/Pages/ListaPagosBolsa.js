import React from 'react'
import { Link } from 'react-router-dom'

export const ListaPagosBolsa = () => {
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
                  <div className="card-header">Listado de pagos Bolsa</div>
                    <div className="datatable table-responsive-xxl">
                      <table className="table table-responsive table-hover" id="dataTable1" width="100%" cellSpacing={0}>
                        <thead>
                          <tr>
                          <th>Folio</th>
                            <th>Tipo</th>
                            <th>Monto Factura</th>
                            <th>Monto Abono</th>
                            <th>Monto Pagado PX.</th>
                            <th>Monto Custodia</th>
                            <th>Monto Pagado Tenedor</th>
                            <th>Rut Pagador</th>
                            <th>Pagador</th>
                            <th>Vendedor</th>
                           
                            <th>Fecha Ult Abono</th>
                            <th>Origen de Pago</th>
                            <th>Fecha Vencimiento PTX</th>
                            <th>Estado Anterior</th>
                          </tr>
                        </thead>
                        
                        <tbody>
                          <tr>
                            <td>28393</td>
                            <td>33</td>
                            <td>$671.911</td>
                            <td>$671.911</td>
                            <td>$671.911</td>
                            <td>$0</td>
                            <td>$671.911</td>
                            <td>99999999-9</td>
                            <td>COMERCIALIZACION Y SERVICIOS HS PANELES LIMITADA</td>
                            <td>Contempora Corredores De Bolsa de Productos S.A.</td>
                            <td>05/07/2023</td>
                            <td>PAGADOR</td>
                            <td>11/07/2023</td>
                            <td>En Custodia</td>
                            
                          </tr>
                          <tr>
                          <td>249</td>
                            <td>33</td>
                            <td>$6.390.895</td>
                            <td>$6.071.350</td>
                            <td>$6.071.350</td>
                            <td>$0</td>
                            <td>$6.071.350</td>
                            <td>96963440-6</td>
                            <td>NUEVOSUR</td>
                            <td>Contempora Corredores De Bolsa de Productos S.A.</td>
                            <td>05/07/2023</td>
                            <td>DEPOSITATNTE</td>
                            <td>04/07/2023</td>
                            <td>En Custodia</td>
                           
                          </tr>
                          <tr>
                            <td>28392</td>
                            <td>33</td>
                            <td>$1.398.167</td>
                            <td>$1.398.167</td>
                            <td>$1.398.167</td>
                            <td>$0</td>
                            <td>$1.398.167</td>
                            <td>78919770-9</td>
                            <td>COMERCIALIZACION Y SERVICIOS HS PANELES LIMITADA</td>
                            <td>Contempora Corredores De Bolsa de Productos S.A.</td>
                            <td>05/07/2023</td>
                            <td>PAGADOR</td>
                            <td>11/07/2023</td>
                            <td>En Custodia</td>
                           
                          </tr>
                          <tr>
                          <td>4976</td>
                            <td>33</td>
                            <td>$1.931.370</td>
                            <td>$1.931.370</td>
                            <td>$1.931.370</td>
                            <td>$0</td>
                            <td>$1.931.370</td>
                            <td>88842000-2</td>
                            <td>VEOLIA SI CHILE S.A</td>
                            <td>Contempora Corredores De Bolsa de Productos S.A.</td>
                            <td>23/06/2023</td>
                            <td>PAGADOR</td>
                            <td>26/07/2023</td>
                            <td>En Custodia</td>
                            
                          </tr>
                          <tr>
                          <td>4975</td>
                            <td>33</td>
                            <td>$2.344.300</td>
                            <td>$2.344.300</td>
                            <td>$2.344.300</td>
                            <td>$0</td>
                            <td>$2.344.300</td>
                            <td>88842000-2</td>
                            <td>VEOLIA SI CHILE S.A.</td>
                            <td>Contempora Corredores De Bolsa de Productos S.A.</td>
                            <td>23/06/2023</td>
                            <td>PAGADOR</td>
                            <td>2/07/2023</td>
                            <td>En Custodia</td>
                           
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
