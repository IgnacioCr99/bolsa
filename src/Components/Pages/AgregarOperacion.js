import React from 'react'

export const AgregarOperacion = () => {
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
      <div className="card-header">Agregar Operación</div>
      <div className="card-body">
        <form>
          <div className="form-row">
            <div className="form-group col-md-2 mb-md-0">
              <label className="small mb-1" htmlFor="inputEmailAddress">Titulo</label>
              <input className="form-control" id="inputEmailAddress" type="text" placeholder="Ej: 11222333-4" defaultValue />
            </div>
            <div className="form-group col-md-5 mb-md-0">
              <label className="small mb-1" htmlFor="inputUsername">Titulo</label>
              <input className="form-control" id="inputUsername" type="text" placeholder="Titulo" defaultValue />
            </div>
            <div className="form-group col-md-5 mb-md-0">
              <label className="small mb-1" htmlFor="inputUsername">Titulo</label>
              <input className="form-control" id="inputUsername" type="text" placeholder="Titulo" defaultValue />
            </div>
            <div className="form-group col-md-6 mb-md-0">
              <label className="small mb-1" htmlFor="inputUsername">Titulo</label>
              <input className="form-control" id="inputUsername" type="text" placeholder="Titulo" defaultValue />
            </div>
            <div className="form-group col-md-6 mb-md-0">
              <label className="small mb-1" htmlFor="inputUsername">Titulo</label>
              <input className="form-control" id="inputUsername" type="text" placeholder="Titulo" defaultValue />
            </div> 
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 mb-md-0">
              <label className="small mb-1" htmlFor="inputEmailAddress">Titulo</label>
              <input className="form-control" id="inputEmailAddress" type="text" placeholder="Ej: 11222333-4" defaultValue />
            </div>
            <div className="form-group col-md-6 mb-md-0">
              <label className="small mb-1" htmlFor="inputEmailAddress">Titulo</label>
              <input className="form-control" id="inputEmailAddress" type="email" placeholder="Titulo" defaultValue />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mb-md-0">
              <label className="small mb-1" htmlFor="inputPhone">Titulo</label>
              <input className="form-control" id="inputPhone" type="tel" placeholder="Titulo" />
            </div>
            <div className="form-group col-md-4 mb-3">
              <label className="small mb-1" htmlFor="inputBirthday">Titulo</label>
              <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Titulo" />
            </div>
            <div className="form-group col-md-4 mb-3">
              <label htmlFor="exampleFormControlSelect1">Titulo</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Seleccione ciudad</option>
                <option>Titulo</option>
              </select>
            </div>
          </div>
          <div className="form-row "> 
            <button className="btn btn-contempora btn-sm" type="button">Guardar</button>
          </div>
        </form>             
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
