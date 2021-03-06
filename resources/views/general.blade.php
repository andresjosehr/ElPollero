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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.css">

  </head>
  <body data-open="click" data-menu="vertical-menu" data-col="2-columns" class="vertical-layout vertical-menu 2-columns  fixed-navbar">

    <!-- navbar-fixed-top-->
    <nav class="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-semi-dark navbar-shadow">
      <div class="navbar-wrapper">
        <div class="navbar-header">
          <ul class="nav navbar-nav">
            <li class="nav-item mobile-menu hidden-md-up float-xs-left"><a class="nav-link nav-menu-main menu-toggle hidden-xs"><i class="icon-menu5 font-large-1"></i></a></li>
            <li class="nav-item"><a href="index.html" class="navbar-brand nav-link"><img style="width: 100%;border-radius: 100%;" alt="branding logo" src="{{ asset('images/logo.jpg') }}" data-expand="{{ asset('images/logo.jpg') }}" data-collapse="{{ asset('images/logo.jpg') }}" class="brand-logo"></a></li>
            <li class="nav-item hidden-md-up float-xs-right"><a data-toggle="collapse" data-target="#navbar-mobile" class="nav-link open-navbar-container"><i class="icon-ellipsis pe-2x icon-icon-rotate-right-right"></i></a></li>
          </ul>
        </div>
        <div class="navbar-container content container-fluid">
          <div id="navbar-mobile" class="collapse navbar-toggleable-sm">
            <ul class="nav navbar-nav">
            </ul>
            <ul class="nav navbar-nav float-xs-right">
                <div aria-labelledby="dropdown-flag" class="dropdown-menu"><a href="#" class="dropdown-item"><i class="flag-icon flag-icon-gb"></i> English</a><a href="#" class="dropdown-item"><i class="flag-icon flag-icon-fr"></i> French</a><a href="#" class="dropdown-item"><i class="flag-icon flag-icon-cn"></i> Chinese</a><a href="#" class="dropdown-item"><i class="flag-icon flag-icon-de"></i> German</a></div>
              </li>
              {{-- <div id="notificaciones"></div> --}}




              <li class="dropdown dropdown-notification nav-item"><a href="#" onclick="verNotificacion()" data-toggle="dropdown" class="nav-link nav-link-label"><i class="ficon icon-bell4"></i><span class="tag tag-pill tag-default tag-danger tag-default tag-up noti_number">     </span></a>
                <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right" id='notificaciones'>
                  {{-- <li class="dropdown-menu-header">
                    <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span><span class="notification-tag tag tag-default tag-danger float-xs-right m-0">{{count($Notificaciones)}} Nuevas</span></h6>
                  </li>
                  <div id="notificaciones"></div>
                  @foreach ($Notificaciones as $Notificacion)
                  <li class="list-group scrollable-container"><a href="javascript:void(0)" class="list-group-item">
                      <div class="media">
                        <div class="media-left valign-middle"><i class="icon-cart3 icon-bg-circle bg-cyan"></i></div>
                        <div class="media-body">
                          <h6 class="media-heading">Nueva notificacion!</h6>
                          <p class="notification-text font-small-3 text-muted">{{$Notificacion->notificacion}}</p><small>
                        </div>
                  @endforeach
                  </li>
                  <li class="dropdown-menu-footer" style="display:none;"><a href="javascript:void(0)" class="dropdown-item text-muted text-xs-center">Read all notifications</a></li> --}}
                </ul>
              </li>





              <li class="dropdown dropdown-user nav-item"><a href="#" data-toggle="dropdown" class="dropdown-toggle nav-link dropdown-user-link" style='padding-top: 24px;
'><span class="user-name">{{session()->get("nombre")}}</span></a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="dropdown-divider"></div><a href="CerrarSesion" class="dropdown-item"><i class="icon-power3"></i> Cerrar Sesion</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- ////////////////////////////////////////////////////////////////////////////-->


    <!-- main menu-->
    <div data-scroll-to-active="true" class="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
      <!-- main menu header-->
      <div class="main-menu-header" style="margin-top: 131px;">
        {{-- <input type="text" placeholder="Search" class="menu-search form-control round"/> --}}
      </div>
      <!-- / main menu header-->
      <!-- main menu content-->
      <div class="main-menu-content">
        <ul id="main-menu-navigation" data-menu="menu-navigation" class="navigation navigation-main">
          <li class="nav-item escritorio_sidebar"><a href="{{Request::root()}}"><i class="icon-home3"></i><span data-i18n="nav.dash.main" class="menu-title">Escritorio</span></a>
          </li>
          <li class="nav-item perfil_sidebar"><a href="perfil"><i class="icon-head"></i><span data-i18n="nav.dash.main" class="menu-title">Perfil</span></a>
          </li>
          @if (session()->get("rol")==1)
            <li class="nav-item administradores_sidebar"><a href="usuarios"><i class="icon-user-tie"></i><span data-i18n="nav.dash.main" class="menu-title">Administradores</span></a>
          </li>
          @endif
           <li class="nav-item clientes_sidebar"><a href="clientes"><i class="icon-accessibility"></i><span data-i18n="nav.dash.main" class="menu-title">Clientes</span></a>
          </li>
          <li class="nav-item clientes_sidebar"><a href="ordenes"><i class="icon-cube"></i><span data-i18n="nav.dash.main" class="menu-title">Ordenes de pedidos</span></a>
          </li>
          <li class="nav-item clientes_sidebar"><a href="pedidos"><i class="icon-list"></i><span data-i18n="nav.dash.main" class="menu-title">Pedidos de clientes</span></a>
          </li>
          <li class="nav-item clientes_sidebar"><a href="email-clientes"><i class="icon-mail2"></i><span data-i18n="nav.dash.main" class="menu-title">Envios de email</span></a>
          </li>
          @if (session()->get("rol")==1)
          <li class="nav-item clientes_sidebar"><a href="metas"><i class="icon-flag2"></i><span data-i18n="nav.dash.main" class="menu-title">Metas de Vendedores</span></a>
          </li>
          <li class="nav-item clientes_sidebar"><a href="informes"><i class="icon-libreoffice"></i><span data-i18n="nav.dash.main" class="menu-title">Informe de vendedores</span></a>
          </li>
          <li class="nav-item clientes_sidebar"><a href="ventas"><i class="icon-stats-dots"></i><span data-i18n="nav.dash.main" class="menu-title">Informe de ventas</span></a>
          </li>
          @endif
        </ul>
      </div>
      
      <script>
        $(document).ready(function(){
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

          $("#notificaciones").load(url+"/notificaciones",{Data: "Ejemplo"});
        })        
      </script>

      <!-- /main menu content-->
      <!-- main menu footer-->
      <!-- include includes/menu-footer-->
      <!-- main menu footer-->
    </div>
    <style>

       .main-menu-content::-webkit-scrollbar {
                    width: 8px;     /* Tamaño del scroll en vertical */
                    height: 8px;    /* Tamaño del scroll en horizontal */
                }

                .main-menu-content::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 4px;
                }

                /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
                .main-menu-content::-webkit-scrollbar-thumb:hover {
                    background: #b3b3b3;
                    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
                }

                /* Cambiamos el fondo cuando esté en active */
                .main-menu-content::-webkit-scrollbar-thumb:active {
                    background-color: #999999;
                }
      .main-menu-content{
        overflow: auto;
        height: 60% !important;
      }
      @media screen and (max-width:1000px) {
        .navbar-brand img{
          width: 31px !important;
        }
      }
    </style>


    <!-- / main menu-->













