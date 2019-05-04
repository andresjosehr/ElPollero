<!-- Large modal -->
<a href="#ModalCreateOrden" data-toggle="modal" id='ModalCreateOrden_btn'></a>
<div id="ModalCreateOrden" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-lg">
      <div class="modal-content">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Crear orden a partir de pedido</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div id="crearOrdenAtPedido">
                <input type="hidden" id="id_cliente">
                <input type="hidden" id="id_pedido">
                  <div class="form-body">
                     <div class="form-group">
                        <div class="col-md-6">
                           <label for="timesheetinput1">Productos</label>
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
                                    <input type="radio" name="customer1" id='tipo_cantidad' value="Libras" class="custom-control-input">
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
                           <label for="timesheetinput2">Fecha y hora para entregar</label>
                           <div class="position-relative has-icon-left">
                              <input type="datetime-local" id="fecha_hora_entrega" class="form-control" placeholder="Fecha y hora pautada para la entrega del producto">
                              <div class="form-control-position">
                                 <i class="icon-calendar"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12">
                        <div class="form-actions right">
                           <button onclick="guardarOrderAtPedido()" class="btn btn-danger crearCliente_btn">
                           <i class="icon-check2"></i> Guardar
                           </button>
                           <div align="left">
                              <div class="loading crearCliente_loading" style="width: 40px;height: 40px"></div>
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
</div>