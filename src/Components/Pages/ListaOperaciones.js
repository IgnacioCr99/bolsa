import React from 'react'
import { Link } from 'react-router-dom'

export const ListaOperaciones = () => {
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
  <div className="card-header">Listado Operaciones</div>
    
      <div className="tab-content" id="cardTabContent">
        <div className="container">
          
          <div className="col-xxl-12 col-xl-12 mt-5">
            <div className="card">
              <div className="card-body">
                <div className="col-lg-12 ">
                  <div className="row">
                    <div className="form-group mr-3 col">
                      
                        <div  className="btn btn-contempora2 btn-sm-col ">
                          <Link to="/AgregarOperacion" ><span><i data-feather="upload" /> Agregar Operación</span></Link>

                        </div>
                      
                    </div> 
                  </div>
                </div>
                <div className="datatable table-responsive">
                  <table className="table table-responsive table-hover" id="dataTable1" width="100%" cellSpacing={0}>
                    <thead>
                      <tr >
                      <th>Fecha Operación</th>
                        <th>Fecha Liquid.</th>
                        <th>N° Lote</th>
                        <th>Folio</th>
                        <th>Nemo pagador</th>
                        <th>RUT DEUDOR  (sin puntos, con guión y DV)</th>
                        <th>Nombre deudor</th>
                        <th>RUT</th>
                        <th>D	</th>
                        <th>INVERSIONISTA</th>
                        <th>Tasa Efectiva Comp.</th>
                        <th>Rut</th>
                        <th>D </th>
                        <th>CEDENTE</th>
                        <th>Tasa Efectiva Vend.</th>
                        <th>Nemotécnico</th>
                        <th>Monto Transado</th>
                        <th>Tasa Bolsa</th>
                        <th>Condición PH/PM</th>
                        <th>Fecha de Vencimiento</th>
                        <th>Valor al Vencimiento</th>
                        <th>Comisión</th>
                        <th>IVA</th>
                        <th>Días al Vencimiento</th>
                        <th>Estado</th>
                        <th>Valor Total al Día de Hoy</th>
                        <th>Plazo en Dias Op. BPC</th>
                        <th>Mes Operación</th>
                        <th>OBSERVACIONES</th>
                        <th>LLave Pago</th>
                        <th>Fecha de Pago BPC a CTP</th>
                        <th>Monto Pago BDP</th>
                        <th>Diferencia</th>
                        <th>Forma de Pago a Cliente</th>
                        <th>Saldo Pendiente</th>
                        <th>Dias reales en BPC</th>
                        <th>Plazo en Dias Op. BPC</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      
                    <tr>
                        <td>10/05/2023	</td>
                        <td>10/05/2023</td>
                        <td>17820</td>
                        <td>9144</td>
                        <td>TYPACK</td>
                        <td>99999999-9</td>
                        <td>TYPACK</td>
                        <td>10.321.057</td>
                        <td>7</td>
                        <td>CAROLINA ANDREA MATUS DIAZ</td>
                        <td>1,30</td>
                        <td>96.931.540</td>
                        <td>8</td>
                        <td>RECIPET S.A </td>
                        <td>1,31</td>
                        <td>ATYPACK</td>
                        <td>23.924.198</td>
                        <td>1,31</td>
                        <td>PH</td>
                        <td>21/08/2023</td>
                        <td>25.000.229</td>
                        <td>8.214</td>
                        <td>1.561</td>
                        <td>18</td>
                        <td>PENDIENTE PAGO</td>
                        <td>24.812.184</td>
                        <td>103</td>
                        <td></td>
                        <td></td>
                        <td>9144-9999999</td>
                        <td></td>
                        <td></td>
                        <td>25.000.229</td>
                        <td></td>
                        <td>25.000.229</td>
                        <td>-45056</td>
                        <td>103</td>
                        <td>
                          
                          <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><Link to="/VerOperacion"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></button>
                          
                        </td>
                      </tr>
                      <tr>
                        <td>10/05/2023	</td>
                        <td>10/05/2023</td>
                        <td>17820</td>
                        <td>9144</td>
                        <td>TYPACK</td>
                        <td>99999999-9</td>
                        <td>TYPACK</td>
                        <td>10.321.057</td>
                        <td>7</td>
                        <td>CAROLINA ANDREA MATUS DIAZ</td>
                        <td>1,30</td>
                        <td>96.931.540</td>
                        <td>8</td>
                        <td>RECIPET S.A </td>
                        <td>1,31</td>
                        <td>ATYPACK</td>
                        <td>23.924.198</td>
                        <td>1,31</td>
                        <td>PH</td>
                        <td>21/08/2023</td>
                        <td>25.000.229</td>
                        <td>8.214</td>
                        <td>1.561</td>
                        <td>18</td>
                        <td>PENDIENTE PAGO</td>
                        <td>24.812.184</td>
                        <td>103</td>
                        <td></td>
                        <td></td>
                        <td>9144-9999999</td>
                        <td></td>
                        <td></td>
                        <td>25.000.229</td>
                        <td></td>
                        <td>25.000.229</td>
                        <td>-45056</td>
                        <td>103</td>
                        <td>
                          
                          <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><Link to="/VerOperacion"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></button>
                          
                        </td>
                      </tr>
                      <tr>
                      <td>10/05/2023	</td>
                        <td>10/05/2023</td>
                        <td>17820</td>
                        <td>9144</td>
                        <td>TYPACK</td>
                        <td>99999999-9</td>
                        <td>TYPACK</td>
                        <td>10.321.057</td>
                        <td>7</td>
                        <td>CAROLINA ANDREA MATUS DIAZ</td>
                        <td>1,30</td>
                        <td>96.931.540</td>
                        <td>8</td>
                        <td>RECIPET S.A </td>
                        <td>1,31</td>
                        <td>ATYPACK</td>
                        <td>23.924.198</td>
                        <td>1,31</td>
                        <td>PH</td>
                        <td>21/08/2023</td>
                        <td>25.000.229</td>
                        <td>8.214</td>
                        <td>1.561</td>
                        <td>18</td>
                        <td>PENDIENTE PAGO</td>
                        <td>24.812.184</td>
                        <td>103</td>
                        <td></td>
                        <td></td>
                        <td>9144-9999999</td>
                        <td></td>
                        <td></td>
                        <td>25.000.229</td>
                        <td></td>
                        <td>25.000.229</td>
                        <td>-45056</td>
                        <td>103</td>
                        <td>
                          
                          <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><Link to="/VerOperacion"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></button>
                          
                        </td>
                      </tr>
                      <tr>
                      <td>10/05/2023	</td>
                        <td>10/05/2023</td>
                        <td>17820</td>
                        <td>9144</td>
                        <td>TYPACK</td>
                        <td>99999999-9</td>
                        <td>TYPACK</td>
                        <td>10.321.057</td>
                        <td>7</td>
                        <td>CAROLINA ANDREA MATUS DIAZ</td>
                        <td>1,30</td>
                        <td>96.931.540</td>
                        <td>8</td>
                        <td>RECIPET S.A </td>
                        <td>1,31</td>
                        <td>ATYPACK</td>
                        <td>23.924.198</td>
                        <td>1,31</td>
                        <td>PH</td>
                        <td>21/08/2023</td>
                        <td>25.000.229</td>
                        <td>8.214</td>
                        <td>1.561</td>
                        <td>18</td>
                        <td>PENDIENTE PAGO</td>
                        <td>24.812.184</td>
                        <td>103</td>
                        <td></td>
                        <td></td>
                        <td>9144-9999999</td>
                        <td></td>
                        <td></td>
                        <td>25.000.229</td>
                        <td></td>
                        <td>25.000.229</td>
                        <td>-45056</td>
                        <td>103</td>
                        <td>
                          
                          <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><Link to="/VerOperacion"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></button>
                          
                        </td>
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


  )
}
