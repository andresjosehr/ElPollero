<div class="card-block">
<div id="crearPedido">
   <div class="form-body">
      <div class="form-group">
         <div class="col-md-6">
            <label for="timesheetinput1">Producto</label>
            <div class="position-relative has-icon-left nombre_parent">
               <select id="productos" class="form-control">
                @foreach ($Productos as $Producto)
                  <option value="{{$Producto->nombre}}">{{$Producto->nombre}}</option>
                @endforeach
               </select>
               <div class="form-control-position">
                  <i class="icon-bag"></i>
               </div>
            </div>
         </div>
      </div>
      <div class="col-md-2">
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
      <div style="display: flex;padding-top: 15px;">
      <div class="col-md-2">
         <div class="form-group">
            <div class="position-relative has-icon-left">
                <label> </label>
                <div class="input-group">
                   <label class="display-inline-block custom-control custom-radio ml-1">
                   <input type="radio" name="customer1" id='tipo_cantidad' checked="checked" value="Libras" class="custom-control-input">
                   <span class="custom-control-indicator"></span>
                   <span class="custom-control-description ml-0">Libras</span>
                   </label>
                </div>
             </div>
         </div>
      </div>
      <div class="col-md-2">
         <div class="form-group">
            <div class="position-relative has-icon-left">
                <label> </label>
                <div class="input-group" style="margin-left: 22px">
                   <label class="display-inline-block custom-control custom-radio ml-1">
                   <input type="radio" name="customer1" id='tipo_cantidad' value="Unidades" class="custom-control-input">
                   <span class="custom-control-indicator"></span>
                   <span class="custom-control-description ml-0">Unidades</span>
                   </label>
                </div>
             </div>
         </div>
      </div>
      </div>

      

      <div class="col-md-6">
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
      <div class="col-md-6">
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
      <div class="col-md-6">
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
      <div class="col-md-6">
         <div class="form-group">
            <label for="timesheetinput2">Cliente</label>
            <div class="position-relative has-icon-left">
               <select id="id_cliente" class="form-control" placeholder="Zona de domicilio del cliente">
                  @foreach ($Clientes as $Cliente)
                  <option value="{{$Cliente->id}}">{{$Cliente->nombre}}</option>
                  @endforeach
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
            <button onclick="guardarPedido()" class="btn btn-danger crearCliente_btn">
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
<style>
   .nombre_parent{
   margin-bottom: -7px
   }
</style>