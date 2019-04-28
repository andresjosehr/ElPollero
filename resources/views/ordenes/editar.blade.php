<!-- Large modal -->
<button type="button" id="editarOrden_btn" style="display: none" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
   <div class="modal-content">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <div id="editarOrdenPedido">
               <input type="hidden" id="id">
               <div class="form-body">
                  <div class="form-group">
                     <div class="col-md-6">
                        <label for="timesheetinput1">Productos</label>
                        <div class="position-relative has-icon-left nombre_parent">
                           <input type="text" id="productos" class="form-control" placeholder="Productos asociados a la orden">
                           <div class="form-control-position">
                              <i class="icon-bag"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
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
                        <label for="timesheetinput2">Fecha y hora para entregar</label>
                        <div class="position-relative has-icon-left">
                           <input type="text" id="fecha_hora_entrega" class="form-control" placeholder="Fecha y hora pautada para la entrega del producto">
                           <div class="form-control-position">
                              <i class="icon-calendar"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-12">
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
                     <div class="form-actions right">
                        <button onclick="updaterOrden()" class="btn btn-danger editarOrden_btn">
                        <i class="icon-check2"></i> Guardar
                        </button>
                        <div align="left">
                           <div class="loading editarOrden_loading" style="width: 40px;height: 40px"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="cerrarOrdenUpdate">
               <input type="hidden" id="id">
               <div class="form-body">
                  <div class="form-group">
                     <div class="col-md-6">
                        <label for="timesheetinput1">Fecha y Hora Entregada</label>
                        <div class="position-relative has-icon-left nombre_parent">
                           <input type="text" id="fecha_hora_entregada" class="form-control" placeholder="Fecha y hora en la que se entrego el producto">
                           <div class="form-control-position">
                              <i class="icon-bag"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="form-group">
                        <label for="timesheetinput2">Forma de pago</label>
                        <div class="position-relative has-icon-left">
                           <input type="text" id="forma_pago" class="form-control" placeholder="Indique la forma en la que pago el cliente">
                           <div class="form-control-position">
                              <i class="icon-ios-keypad"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="form-group">
                        <label for="timesheetinput2">Numero de factura</label>
                        <div class="position-relative has-icon-left">
                           <input type="text" id="numero_factura" class="form-control" placeholder="Indique el numero de factura">
                           <div class="form-control-position">
                              <i class="icon-compose"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="form-group">
                        <label for="timesheetinput2">Receptor de la orden</label>
                        <div class="position-relative has-icon-left">
                           <input type="text" id="receptor" class="form-control" placeholder="Indique la persona que recibio la orden">
                           <div class="form-control-position">
                              <i class="icon-calendar"></i>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-12">
                     <div class="form-actions right">
                        <button onclick="cerrrarOrdenUpdate()" class="btn btn-danger editarOrden_btn">
                        <i class="icon-check2"></i> Guardar
                        </button>
                        <div align="left">
                           <div class="loading editarOrden_loading" style="width: 40px;height: 40px"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
            </div>
         </div>
      </div>
   </div>
</div>