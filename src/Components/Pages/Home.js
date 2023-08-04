import React from 'react'

export const Home = () => {
  return (
    <div id="layoutSidenav_content">
    <div className="container mt-5">
  {/* Custom page header alternative example*/}
  <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
    <div className="mr-4 mb-3 mb-sm-0">
      <h1 className="mb-0 titulocmp">CMP Bolsa de Productos</h1>
      <div className="small pcmp_small">
        <span className="font-weight-500 titulocmp_small">Lunes</span>
        · 20 junio 2021 · 12:16 PM
      </div>
    </div>
    {/* Date range picker example button*/}
    <button className="btn btn-white btn-sm line-height-normal p-3 text-numbercmp">
      <i className="mr-2 titulocmp_small" data-feather="dollar-sign" />Dolar 768.81  <i style={{marginLeft: '5px !important'}} className="mr-2 titulocmp_small" data-feather="activity" />UF 28670.21
      <span />
    </button>
  </div>
  {/* Illustration dashboard card example*/}
  <div className="card card-waves mb-4 mt-5">
    <div className="card-body p-5">
      <div className="row align-items-center justify-content-between">
        <div className="col">
          <h2 className="subtitulocmp">Bienvenido Agrobox S.A</h2>
          <p className="parrafo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum cum distinctio culpa vitae neque, laudantium iure omnis tempore, nobis commodi enim fuga cumque perspiciatis inventore nostrum hic modi maiores amet!</p>
          <a className="btn btn-cmp btn-sm px-3 py-2" href="datoscomerciales.html">
            Boton acceso
            <i className="ml-1" data-feather="arrow-right" />
          </a>
        </div>
        <div className="col d-none d-lg-block mt-xxl-n4"><img className="img-fluid px-xl-4 mt-xxl-n5" src="../assets/img/Logos_contempora_servicios.png" /></div>
      </div>
    </div>
  </div>
  <div className="row justify-content-md-center align-items-center">
    <div className="col-xl-3 col-md-6 mb-4">
      {/* Dashboard info widget 1*/}
      <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-cmp h-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div className="small font-weight-bold titulocmp_small mb-1">Inversionista</div>
              <div className="h5 h5cmp">$0</div>
              <div className="text-xs font-weight-bold text-numbercmp d-inline-flex align-items-center">
                <i className="mr-1" data-feather="trending-up" />
                12%
              </div>
            </div>
            <div className="ml-2"><i className="fa fa-thin fa-handshake fa-2x text-gray-200" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
      {/* Dashboard info widget 2*/}
      <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-cmp h-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div className="small font-weight-bold titulocmp_small mb-1">Deudores</div>
              <div className="h5 h5cmp">$0</div>
              <div className="text-xs font-weight-bold text-numbercmp d-inline-flex align-items-center">
                <i className="mr-1" data-feather="trending-down" />
                3%
              </div>
            </div>
            <div className="ml-2"><i className="fas fa-dollar-sign fa-2x text-gray-200" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
      {/* Dashboard info widget 3*/}
      <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-cmp h-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <div className="small font-weight-bold titulocmp_small mb-1">Pagadores</div>
              <div className="h5 h5cmp">$0</div>
              <div className="text-xs font-weight-bold text-numbercmp d-inline-flex align-items-center">
                <a className="linkcmp" href>Consultar</a>{/* Desplegar y mostrar los link de documentos vigentes, morosos, prorrogados*/}
              </div>
            </div>
            <div className="ml-2"><i className="fas fa-solid fa-file-invoice-dollar fa-2x text-gray-200" /></div>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <div className="row">
    <div className="col-lg-4 mb-4">
      {/* Illustration card example*/}
      <div className="card mb-4">
        <div className="card-header border-bottom-0 titulocmp_header">Ejecutivo</div>
        <div className="card-body text-center p-5">
          <img className="img-account-profile rounded-circle mb-2" src="src/assets/img/oscar.jpg" />
          <h4 className="titulocmp_h4">Lorem ipsum dolor sit a</h4>
          <p className="mb-4 correocmp">ti_contempora@contempora.com</p>
          <p className="mb-4 fonocmp"> 222301089 - +56 990136047</p>
          <a className="btn btn-cmp btn-sm py-2 px-3" href="#!">Contactar</a>
        </div>
      </div> 
    </div>
    <div className="col-lg-8 mb-4"> 
      <div className="card mb-4">
        <div className="card-header titulocmp_header">Documentos</div>
        <div className="card-body">
          <div className="datatable table-responsive">
            <table className="table table-bordered table-hover tablehomecmp" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr className="thead_cmp">
                  <th>Titulo</th>
                  <th>Titulo</th>
                  <th>Titulo</th>
                  <th>Titulo</th>
                  <th>Titulo</th>
                  <th>Titulo</th> 
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <td className="text-numbercmpth">77647</td>
                  <td className="text-center">Factura</td>
                  <td className="text-center">05-05-2021</td>
                  <td className="text-center">10</td>
                  <td className="text-right">$10.000.000</td>
                  <td className="text-right">$5.000.000</td> 
                </tr> 
                <tr>
                  <td className="text-numbercmpth">77647</td>
                  <td className="text-center">Factura</td>
                  <td className="text-center">05-05-2021</td>
                  <td className="text-center">10</td>
                  <td className="text-right">$10.000.000</td>
                  <td className="text-right">$5.000.000</td> 
                </tr> 
                <tr>
                  <td className="text-numbercmpth">77647</td>
                  <td className="text-center">Factura</td>
                  <td className="text-center">05-05-2021</td>
                  <td className="text-center">10</td>
                  <td className="text-right">$10.000.000</td>
                  <td className="text-right">$5.000.000</td> 
                </tr> 
                <tr>
                  <td className="text-numbercmpth">77647</td>
                  <td className="text-center">Factura</td>
                  <td className="text-center">05-05-2021</td>
                  <td className="text-center">10</td>
                  <td className="text-right">$10.000.000</td>
                  <td className="text-right">$5.000.000</td> 
                </tr> 
                <tr>
                  <td className="text-numbercmpth">77647</td>
                  <td className="text-center">Factura</td>
                  <td className="text-center">05-05-2021</td>
                  <td className="text-center">10</td>
                  <td className="text-right">$10.000.000</td>
                  <td className="text-right">$5.000.000</td> 
                </tr> 
              </tbody>
            </table>
          </div>
        </div>
      </div> 
    </div>
  </div>
</div>
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
