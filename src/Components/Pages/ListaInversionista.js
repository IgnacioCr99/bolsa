import React from 'react'

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
                  <a href="operaciones.php?crearop=crearop"><span><i data-feather="upload" /> Cargar Inversionista</span></a>
                </div>
              </label>
            </div> 
          </div>
        </div>
        <div className="datatable table-responsive">
          <table className="table table-responsive table-bordered table-hover" id="dataTable1" width="100%" cellSpacing={0}>
            <thead>
              <tr>
                <th>Rut</th>
                <th>Correo</th>
                <th>Nombre</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>juan@empresa1.com</td>
                <td>Juan Astorga</td>
                <td>569778892</td>
                <td>
                  
                  <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></a></button>
                  
                </td>
              </tr>
              <tr>
                <td>rodolfo@empresa2.com</td>
                <td>Rodolfo Medina</td>
                <td>34534543</td>
                <td>
                                    <button className="btn btn-datatable btn-icon btn-transparent-dark mr-2"><a href="operaciones.php?detalleop=detalleop"><i data-feather="eye" /><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></a></button>
                  
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
      <div className="col-md-6 small">Copyright © Contempora S.A 2020</div>
    </div>
  </div>
</footer>

</div>

  )
}
