<!DOCTYPE html>
<html lang="en" data-textdirection="ltr" class="loading">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
      <meta name="description" content="Robust admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
      <meta name="keywords" content="admin template, robust admin template, dashboard template, flat admin template, responsive admin template, web app">
      <meta name="author" content="PIXINVENT">
      <title>El Pollero</title>
      <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('template/images/ico/apple-icon-60.png') }}">
      <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('template/images/ico/apple-icon-76.png') }}">
      <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('template/images/ico/apple-icon-120.png') }}">
      <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('template/images/ico/apple-icon-152.png') }}">
      <link rel="shortcut icon" type="image/x-icon" href="{{ asset('template/images/ico/favicon.ico') }}">
      <link rel="shortcut icon" type="image/png" href="{{ asset('template/images/ico/favicon-32.png') }}">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-touch-fullscreen" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="default">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <!-- BEGIN VENDOR CSS-->
      <link rel="stylesheet" href="{{ asset('css/template.css') }}">
      <link rel="stylesheet" href="{{ asset('css/app.css') }}">
      <script>
         var url = '{{Request::root()}}';
         $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
      </script>
      <script
         src="https://code.jquery.com/jquery-3.4.0.min.js"
         integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
         crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.4/css/tether-theme-arrows-dark.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.4/js/tether.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/css/perfect-scrollbar.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/perfect-scrollbar.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
      <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
      <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
      <!-- END Custom CSS-->
   </head>
   <body>
      <div class="app-content content container-fluid">
      <div class="content-wrapper">
         <div class="content-header row">
         </div>
         <div class="content-body">
            <section class="flexbox-container">
               <div class="col-md-4 offset-md-4 col-xs-10 offset-xs-1  box-shadow-2 p-0">
                  <div class="card border-grey border-lighten-3 m-0">
                     <div class="card-header no-border">
                        <div class="card-title text-xs-center">
                           <div class="p-1"><img src="{{ asset('images/logo.jpg') }}" style="width: 35%;border-radius: 100%;" alt="branding logo"></div>
                        </div>
                        <h6 class="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2"><span>Solicitud de pedido</span></h6>
                     </div>
                     <div class="card-body collapse in">
                        <div class="">
                           <div class="card-block">
                              <div id="crearPedido">
                                 <div class="form-body">
                                    <div class="form-group">
                                       <div class="col-md-12">
                                          <label for="timesheetinput1">Productos</label>
                                          <div class="position-relative has-icon-left nombre_parent">
                                             <input type="text" id="productos" class="form-control" placeholder="Productos asociados a la orden">
                                             <div class="form-control-position">
                                                <i class="icon-bag"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Cantidad</label>
                                          <div class="position-relative has-icon-left">
                                             <input type="text" id="cantidad" class="form-control" placeholder="Cantidad total de la orden">
                                             <div class="form-control-position">
                                                <i class="icon-ios-keypad"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Especificaciones</label>
                                          <div class="position-relative has-icon-left">
                                             <input type="text" id="especificaciones" class="form-control" placeholder="Especificaciones">
                                             <div class="form-control-position">
                                                <i class="icon-compose"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Observaciones</label>
                                          <div class="position-relative has-icon-left">
                                             <input type="text" id="observaciones" class="form-control" placeholder="Observaciónes del pedido">
                                             <div class="form-control-position">
                                                <i class="icon-pencil22"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Tipo de pago</label>
                                          <div class="position-relative has-icon-left">
                                             <input type="text" id="tipo_pago" class="form-control" placeholder="El tipo de pago del pedido">
                                             <div class="form-control-position">
                                                <i class="icon-credit-card"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Nombre</label>
                                          <div class="position-relative has-icon-left">
                                             <input type='text' class="form-control" id="nombre" placeholder='Ingresa tu nombre'>
                                             </select>
                                             <div class="form-control-position">
                                                <i class="icon-head"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Telefono</label>
                                          <div class="position-relative has-icon-left">
                                             <input type='text' id='telefono' class="form-control" placeholder='Ingresa tu telefono'>
                                             </select>
                                             <div class="form-control-position">
                                                <i class="icon-head"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="timesheetinput2">Email</label>
                                          <div class="position-relative has-icon-left">
                                             <input type='text' id='correo' class="form-control" placeholder='Ingresa tu Email'>
                                             </select>
                                             <div class="form-control-position">
                                                <i class="icon-head"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <div class="position-relative has-icon-left">
                                             <label>Periodicidad</label>
                                             <div class="input-group">
                                                <label class="display-inline-block custom-control custom-radio ml-1">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Lunes" class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Lunes</span>
                                                </label>
                                                <label class="display-inline-block custom-control custom-radio">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Martes" class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Martes</span>
                                                </label>
                                                <label class="display-inline-block custom-control custom-radio">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Miercoles" class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Miercoles</span>
                                                </label>
                                                <label class="display-inline-block custom-control custom-radio">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Jueves" class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Jueves</span>
                                                </label>
                                                <label class="display-inline-block custom-control custom-radio">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Viernes" class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Viernes</span>
                                                </label>
                                                <label class="display-inline-block custom-control custom-radio">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Sabado" class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Sabado</span>
                                                </label>
                                                <label class="display-inline-block custom-control custom-radio">
                                                <input type="checkbox" name="customer1" id='periodicidad' value="Domingo"  class="custom-control-input">
                                                <span class="custom-control-indicator"></span>
                                                <span class="custom-control-description ml-0">Domingo</span>
                                                </label>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-actions right">
                                          <button onclick="guardarPedidoPublic()" class="btn btn-danger crearCliente_btn">
                                          <i class="icon-check2"></i> Guardar
                                          </button>
                                          <div align="left">
                                             <div class="loading crearCliente_loading" style="width: 40px;height: 40px"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
            </section>
            </div>
         </div>
      </div>

        <script>
            $(document).ready(function(){
                $("html").removeClass("loading")
                $("html").removeClass("loaded")
            })
        </script>
      <script src="{{ asset('js/template.js') }}"></script>
      <script src="{{ asset('js/app.js') }}"></script>
   </body>