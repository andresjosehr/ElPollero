@include("general");
<div class="app-content content container-fluid">
   <div class="content-wrapper">
      <div class="content-header row">
         <div class="content-header-left col-md-6 col-xs-12 mb-1">
            <h2 class="content-header-title">Perfil de usuario</h2>
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
               <div class="col-md-12">
                  <div class="card" style="height: 1070px;">
                     <div class="card-header">
                        <h4 class="card-title" id="basic-layout-form">Información principal</h4>
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
                              <p>En esta seccion puedes consultar y editar tus datos de usuario. Recuerda siempre mantener tus contraseñas en secretos y verificar que tu direccion de correo electronico sea correcta.</p>
                           </div>
                              <div class="form-body">
                                 <h4 class="form-section"><i class="icon-head"></i>Informacion personal</h4>
                                 <div class="row PerfilForm">
                                    <div class="col-md-6">
                                       <div class="form-group">
                                          <label for="projectinput1">Nombres</label>
                                          <input type="text" id="nombre" class="form-control" placeholder="Escriba su nombre" value="{{session()->get("nombre")}}">
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="form-group">
                                          <label for="projectinput2">Email</label>
                                          <input type="email" id="email" class="form-control" placeholder="Esciba su email" value="{{session()->get("email")}}">
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <button type="button" onclick="ActualizarPerfil()" class="btn btn-danger actualizarPerfil_btn">Guardar Cambios</button>
                                          <div align="left">
                                              <div class="loading actualizarPerfil_loading" style="width: 40px;height: 40px"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <h4 class="form-section"><i class="icon-clipboard4"></i>Cambio de Contraseña</h4>
                                 <div class="row PasswordForm">
                                    <div class="col-md-6">
                                       <div class="form-group">
                                          <label for="companyName">Escriba su nueva contraseña</label>
                                          <input type="password" id="password" class="form-control" placeholder="Nueva contraseña">
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                       <div class="form-group">
                                          <label for="companyName">Repita</label>
                                          <input type="password" id="password2" class="form-control" placeholder="Nueva Contraseña">
                                       </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="form-group">
                                          <button type="button" onclick="ActualizarPassword()" class="btn btn-danger actualizarPasswordB_btn">Actualizar Contraseña</button>
                                          <div align="left">
                                              <div class="loading actualizarPassword_loader" style="width: 40px;height: 40px"></div>
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
         </section>
         <!-- // Basic form layout section end -->
      </div>
   </div>
</div>
@include("footer");