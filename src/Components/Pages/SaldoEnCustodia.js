import React from 'react'

export const SaldoEnCustodia = () => {
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
    
    
    
      {/* Main page content*/}
<div className="container mt-n10">
  {/* Wizard card example with navigation*/}
  <div className="card">
  <div className="card-header">Saldo en Custodia</div>
    <div className="card-body">
      <div className="tab-content" id="cardTabContent">
        {/* Wizard tab pane item 1*/}
        <div className="container">
          <div className=" row justify-content-md-center mt-5">
          </div>
          <div className="card">
           <div className="card-header">Valor al Vencimiento</div>
              <div className="card-body">
                <div className="datatable table-responsive">
                  <table className="table  table-bordered table-hover" id="dataTable1" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Rut</th>
                        <th>Inversionista</th>
                        <th>Pagado</th>
                        <th>Reinvertido</th>
                        <th>Disponible</th>
                        <th>Total</th>
                      </tr>
                    
                    </thead>
                   
                    <tbody>
                      <tr>
                        <td>3.634.374</td>
                        <td>JORGE MANUEL IRARRAZAVAL LIBBRECHT</td>
                        <td>15.779.341</td>
                        <td>7.054.175</td>
                        <td>87.081.997</td>
                        <td>109.915.513</td>
                        
                      
                      </tr>
                      <tr>
                        <td>6.372.940</td>
                        <td>MARIA INES OVALLE IRARRAZAVAL</td>
                        <td>6.184.713</td>
                        <td>10.477.269</td>
                        <td>25.628.664</td>
                        <td>42.290.646</td>
                       
                      </tr>
                      <tr>
                        <td>6.389.109</td>
                        <td>JOSE MIGUEL EUGENIO SAAVEDRA FLOREZ</td>
                        <td></td>
                        <td></td>
                        <td>27.115.757</td>
                        <td>27.115.757</td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
          <div className="col-xxl-12 col-xl-12 mt-5">
            <div className="card">
              <div className="card-header">Saldo Invertido</div>
              <div className="card-body">
                <div className="datatable table-responsive">
                  <table className="table  table-bordered table-hover" id="dataTable1" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Rut</th>
                        <th>Nombre</th>
                        <th>Disponible</th>
                        <th>Invertido</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                    <tr>
                        <td>3.634.374</td>
                        <td>JORGE MANUEL IRARRAZAVAL LIBBRECHT</td>
                        <td>52.000.000</td>
                        <td>10.000.000</td>
                        <td>62.000.000</td>
                        
                        
                      
                      </tr>
                      <tr>
                        <td>6.372.940</td>
                        <td>MARIA INES OVALLE IRARRAZAVAL</td>
                        <td></td>
                        <td>30.000.000</td>
                        <td>30.000.000</td>
                        
                       
                      </tr>
                      <tr>
                        <td>6.389.109</td>
                        <td>JOSE MIGUEL EUGENIO SAAVEDRA FLOREZ</td>
                        <td></td>
                        <td></td>
                        <td></td>
                       
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 mt-5">
            <div className="card">
              <div className="card-header">Resumen</div>
              <div className="card-body">
                <div className="datatable table-responsive">
                  <table className="table  table-bordered table-hover" id="dataTable1" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Rut</th>
                        <th>Nombre</th>
                        <th>Disponible</th>
                        
                      </tr>
                    </thead>
                  
                    <tbody>
                    <tr>
                        <td>3.634.374</td>
                        <td>JORGE MANUEL IRARRAZAVAL LIBBRECHT</td>
                        <td>139.081.997</td>
                        
                        
                        
                      
                      </tr>
                      <tr>
                        <td>6.372.940</td>
                        <td>MARIA INES OVALLE IRARRAZAVAL</td>
                        <td>25.628.664</td>
                        
                        
                       
                      </tr>
                      <tr>
                        <td>6.389.109</td>
                        <td>JOSE MIGUEL EUGENIO SAAVEDRA FLOREZ</td>
                        <td>27.115.757</td>
                       
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div></div></div></div></div></div>

  )
}
