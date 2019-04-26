@include("general");
<div class="app-content content container-fluid">
   <div class="content-wrapper">
      <div class="content-header row">
         <div class="content-header-left col-md-6 col-xs-12 mb-1">
            <h2 class="content-header-title">Administrador</h2>
         </div>
         <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
            <div class="breadcrumb-wrapper col-xs-12">
            </div>
         </div>
      </div>
      <div class="content-body">
         <!-- Basic form layout section start -->
         <section id="basic-form-layouts">
            <div class="row match-height">
               <div class="col-md-6">
                  <div class="card" style="height: 1070px;">
                     <div class="card-header">
                        <h4 class="card-title" id="basic-layout-form">Inivitar administrador</h4>
                        <a class="heading-elements-toggle"><i class="icon-ellipsis font-medium-3"></i></a>
                        <div class="heading-elements">
                           <ul class="list-inline mb-0">
                              <li><a data-action="collapse"><i class="icon-minus4"></i></a></li>
                              <li><a data-action="reload"><i class="icon-reload"></i></a></li>
                              <li><a data-action="expand"><i class="icon-expand2"></i></a></li>
                              <li><a data-action="close"><i class="icon-cross2"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="card-body collapse in">
                        <div class="card-block">
                           <div class="card-text">
                              <p>Ingresa los datos del nuevo administrador y enviaremos un correo de invitación al nuevo usuario para habilitar su registro en el sistema</p>
                           </div>
                              <div class="form-body">
                                 <h4 class="form-section"><i class="icon-mail4"></i> Panel de invitacion</h4>
                                 <div class="row InivitacionForm">
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="projectinput1">Nombres</label>
                                          <input type="text" id="nombre" class="form-control" placeholder="Escriba su nombre">
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <label for="projectinput2">Email</label>
                                          <input type="email" id="email" class="form-control" placeholder="Esciba su email">
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <button type="button" onclick="InvarAdministrador()" class="btn btn-danger inivitarAdministrador_btn">Enviar invitación</button>
                                          <div align="left">
                                              <div class="loading invitarAdministrador_loading" style="width: 40px;height: 40px"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <h4 class="card-title" id="basic-layout-form" style="margin-top: 30px">Lista de administradores Registrados</h4>
                              <div style="height: 630px;overflow-y: auto;">
                              <div class="table-responsive" style="height: 88%;overflow-y: auto;">
                                <table class="table">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody_adminTemp">
                                       @foreach ($UsuariosRegistrados as $UsuarioRegistrado)
                                          <tr>
                                            <td>{{$UsuarioRegistrado->nombre}}</td>
                                            <td>{{$UsuarioRegistrado->email}}</td>
                                        </tr>
                                       @endforeach
                                    </tbody>
                                </table>    
                            </div>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="card" style="height: 1070px;">
                     <div class="card-header">
                        <h4 class="card-title" id="basic-layout-form">Lista de administradores en proceso de registro</h4>
                        <a class="heading-elements-toggle"><i class="icon-ellipsis font-medium-3"></i></a>
                        <div class="heading-elements">
                           <ul class="list-inline mb-0">
                              <li><a data-action="collapse"><i class="icon-minus4"></i></a></li>
                              <li><a data-action="reload"><i class="icon-reload"></i></a></li>
                              <li><a data-action="expand"><i class="icon-expand2"></i></a></li>
                              <li><a data-action="close"><i class="icon-cross2"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="card-body collapse in" style="height: 88%;overflow-y: auto;">
                        <div class="card-block">
                           <div class="card-text">
                              <p>Puedes consultar y gestionar informacion de los administradores registrados</p>
                           </div>
                              <div class="table-responsive">
                                <table class="table">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody_adminTemp">
                                       @foreach ($UsuariosInvitados as $UsuarioInvitado)
                                          <tr id="usuario_{{$UsuarioInvitado->id}}">
                                            <td>{{$UsuarioInvitado->nombre}}</td>
                                            <td>{{$UsuarioInvitado->email}}</td>
                                            <td>
                                               <button type="button" class="btn mr-1 mb-1 btn-primary btn-sm"><i class="icon-mail2"></i></button>
                                               <button type="button" onclick="EliminarAdministrado('{{$UsuarioInvitado->id}}')" class="btn mr-1 mb-1 btn-danger btn-sm"><i class="icon-cross"></i></button>
                                            </td>
                                        </tr>
                                       @endforeach
                                    </tbody>
                                </table>    
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- // Basic form layout section end -->
      </div>
   </div>
</div>
@include("footer");