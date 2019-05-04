<!-- Large modal -->
<button type="button" id="editarOrden_btn" style="display: none" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
   <div class="modal-content">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Gestion de orden</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <div id="editarOrdenPedido" class="editarOrdenPedidoEditar">
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
                  <div class="cantidad" style="display: flex;padding-top: 15px;">
      <div class="col-md-2">
         <div class="form-group">
            <div class="position-relative has-icon-left">
                <label> </label>
                <div class="input-group">
                   <label class="display-inline-block custom-control custom-radio ml-1">
                   <input type="radio" name="customer1" id='tipo_cantidad' value="Libras" class="custom-control-input Libras tipo_cantidad" placeholder="Libras">
                   <span class="custom-control-indicator"></span>
                   <span class="custom-control-description ml-0">Lib</span>
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
                   <input type="radio" name="customer1" id='tipo_cantidad' value="Unidades" class="custom-control-input Unidades tipo_cantidad" placeholder="Unidades">
                   <span class="custom-control-indicator"></span>
                   <span class="custom-control-description ml-0">Uni</span>
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
                        <label for="timesheetinput2">Fecha y hora para entregar</label>
                        <div class="position-relative has-icon-left">
                           <input type="text" class="datetimepicker" id="fecha_hora_entrega">
                           <div class="form-control-position">
                              <i class="icon-calendar"></i>
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
            <div id="cerrarOrdenUpdate" class='cerrarOrdenUpdateDefin'>
               <input type="hidden" id="id">
               <div class="form-body">
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
                  <div class="col-md-12">
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
                     <div class="form-group">
                        <label for="timesheetinput2">Fecha y hora en que se entrego la orden</label>
                        <div class="position-relative has-icon-left">
                           <input type="text" class="datetimepicker" id="fecha_hora_entregada">
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
<script>
   var url = '{{Request::root()}}';
   
   $.ajaxSetup({
     headers: {
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
     }
   });
</script>

</style>
<script>
   $('#editarOrdenPedido .datetimepicker').datetimepicker({
      inline:true,
      step: 30,
      formatTime:"h:i a",
      onChangeDateTime:  function (ct,$i) {

         var Fechita= new Date(ct);
         var Fecha=moment(Fechita).format('YYYY-MM-DD h:mm a');

        $('#editarOrdenPedido #fecha_hora_entrega').val(Fecha);

     }
   });


   $('#cerrarOrdenUpdate .datetimepicker').datetimepicker({
      inline:true,
      step: 30,
      formatTime:"h:i a",
      onChangeDateTime:  function (ct,$i) {

         var Fechita= new Date(ct);
         var Fecha=moment(Fechita).format('YYYY-MM-DD h:mm a');

        $('#cerrarOrdenUpdate #fecha_hora_entregada').val(Fecha);

     }
   });
</script>