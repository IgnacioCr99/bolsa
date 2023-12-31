import React from 'react'
import { Link } from 'react-router-dom'

export const ListaInversionista = () => {
  return (
    <div id="layoutSidenav_content">
  <main><header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
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
            {/* Wizard tab pane item 1*/}
            <div className="container">
              <div className=" row justify-content-md-center mt-5">
              </div>
              <div>
  <div className="card">
    <div className="card-body">
      {/* <h3 class="mt-2 mb-5 tituloport">Bienvenido, Contempora s.a <small>Giro: Financiera</small></h3> */}
      <div className="row justify-content-md-center">
        <div className=" col col-lg-3 text-center iconcmp">
          <i className="fa fa-thin fa-handshake fa-3x " />
          <h6 className="card-subtitle mt-3 text-muted subti">$0</h6>
          <small className="text-muted">Inversionista</small>
        </div>
        <div className=" col col-lg-3 text-center iconcmp">
          <i className="fas fa-dollar-sign fa-3x " />
          <h6 className="card-subtitle mt-3 text-muted subti">$0</h6>
          <small className="text-muted">Deudores</small>
        </div>
        <div className=" col col-lg-3 text-center iconcmp">
          <i className="fas fa-solid fa-file-invoice-dollar fa-3x " />
          <h6 className="card-subtitle mt-3 text-muted subti">$0</h6>
          <small className="text-muted">Pagadores</small>
        </div>  
      </div>
    </div>
  </div>
  <div className="col-xxl-12 col-xl-12 mt-5">
    <div className="card">
      <div className="card-header">Lista de Inversionistas</div>
      <div className="card-body">
        <div className="col-lg-12 ">
          <div className="row">
            <div className="form-group mr-3">
              <label htmlFor="fileupload">
                <div className="btn btn-contempora2 btn-sm ">
                  <Link to="/AgregarInversionista"><span><i data-feather="upload" /> Crear Inversionista</span></Link>
                </div>
              </label>
            </div> 
          </div>
        </div>
        <div className="datatable table-responsive">
          <table className="table  table-bordered table-hover" id="dataTable1" width="100%" cellSpacing={0}>
            <thead>
              <tr>
                <th>Rut</th>
                <th>Correo</th>
                <th>Nombre</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10321057-7</td>
                <td></td>
                <td>CAROLINA ANDREA MATUS DIAZ</td>
                <td>
                  
                  <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a></button>
                  
                </td>
              </tr>
              <tr>
                <td>10321057-7</td>
                <td></td>
                <td>CAROLINA ANDREA MATUS DIAZ</td>
                <td>
                  
                  <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a></button>
                  
                </td>
              </tr>
              <tr>
                <td>18018935-1</td>
                <td></td>
                <td>LEONARDO ERNESTO OLIVERI TOLEDO</td>
                <td>
                  
                  <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a></button>
                  
                </td>
              </tr>
              <tr>
                <td>76413952-6</td>
                <td></td>
                <td>INVERSIONES AUQUINCO LIMITADA</td>
                <td>
                  
                  <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a></button>
                  
                </td>
              </tr>
              <tr>
                <td>76267151-4</td>
                <td></td>
                <td>INVERSIONES AURORA S.A</td>
                <td>
                  
                  <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a></button>
                  
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
    </div>
  </main>
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
