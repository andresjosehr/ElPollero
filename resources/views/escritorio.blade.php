@include("general");
<div class="app-content content container-fluid">
   <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
         <!-- stats -->
         <h2 style='padding: 20px;'>Información rapida</h2>
         <div class="row">
            <div class="col-xl-4 col-lg-6 col-xs-12">
               <div class="card">
                  <div class="card-body">
                     <div class="card-block">
                        <div class="media">
                           <div class="media-body text-xs-left">
                              <h3 class="pink">{{count($Pedidos)}}</h3>
                              <span>Pedidos para mañana</span>
                           </div>
                           <div class="media-right media-middle">
                              <i class="icon-bag2 pink font-large-2 float-xs-right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-xs-12">
               <div class="card">
                  <div class="card-body">
                     <div class="card-block">
                        <div class="media">
                           <div class="media-body text-xs-left">
                              <h3 class="teal">{{count($OrdenesHoyAbiertas)}}</h3>
                              <span>Ordenes para hoy</span>
                           </div>
                           <div class="media-right media-middle">
                              <i class="icon-bag2 pink font-large-2 float-xs-right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-xs-12">
               <div class="card">
                  <div class="card-body">
                     <div class="card-block">
                        <div class="media">
                           <div class="media-body text-xs-left">
                              <h3 class="deep-orange">{{count($OrdenesHoyCerradas)}}</h3>
                              <span>Ordenes cerradas hoy</span>
                           </div>
                           <div class="media-right media-middle">
                              <i class="icon-bag2 pink font-large-2 float-xs-rightt"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!--/ stats -->
         @if(session()->get("rol")=="2")
         <!-- stats -->
         <h2 style='padding: 20px;'>Metas de venta</h2>
         <div class="row">
            @foreach ($Metas as $Meta)
            <div class="col-xl-3 col-lg-6 col-xs-12">
               <div class="card">
                  <div class="card-body">
                     <div class="card-block">
                        <div class="media">
                           <div class="media-body text-xs-left">
                              <h3 class="pink">{{$Meta->Cantidad}}</h3>
                              <span>{{$Meta->tipo}}</span>
                           </div>
                           <div class="media-right media-middle">
                                 <h3 class="pink">{{$Meta->periodo}}</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            @endforeach
         </div>
         <!--/ stats -->
         @endif
         <!--/ project charts -->
         <div class="row">
            <div class="col-xl-12 col-lg-12">
               <div class="card">
                  <div class="card-body">
                     <h2 style='padding: 20px;'>Lista de pedidos pendientes para mañana</h2>
                     <script>
                        if ($("#pedidosLista-B #pedidosListaTable").attr("id")=="pedidosListaTable") {
                            $("#pedidosLista-A").remove();
                        } else{
                        }
                     </script>
                     <div id="pedidosListaTable" style="display: none; overflow-x: auto;">
                        <table id="example" class="display" style="width:100%">
                           <thead>
                              <tr>
                                 <th>Productos</th>
                                 <th>Cantidad</th>
                                 <th>Tipo de Pago</th>
                                 <th>Especificaciones</th>
                                 <th>Observaciones</th>
                                 <th>Cliente</th>
                                 <th>¿Llamado?</th>
                                 <th>Acciones</th>
                              </tr>
                           </thead>
                           <tbody>
                              @foreach ($Pedidos as $Pedido)
                              <tr id="pedido_{{$Pedido->id}}">
                                 <td>{{$Pedido->productos}}</td>
                                 <td>@if ($Pedido->cantidad==null) Sin datos @else {{$Pedido->cantidad}} @endif</td>
                                 <td>@if ($Pedido->tipo_pago==null) Sin datos @else {{$Pedido->tipo_pago}} @endif</td>
                                 <td>@if ($Pedido->especificaciones==null) Sin datos @else {{$Pedido->especificaciones}} @endif</td>
                                 <td>@if ($Pedido->observaciones==null) Sin datos @else {{$Pedido->observaciones}} @endif</td>
                                 <td>{{$Pedido->clientes->nombre}}</td>
                                 <td>
                                    <label class="display-inline-block custom-control custom-radio">
										<input type="checkbox" name="customer1" value='{{$Pedido->id}}' @if($Pedido->llamado=="Si") checked="checked" @endif class="custom-control-input">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description ml-0" id='span_{{$Pedido->id}}'> @if($Pedido->llamado=="Si") Si @else No @endif </span>
									</label>
                                 </td>
                                 <td>
                                    <!-- <a href="#" onclick=""><i class="icon-truck2 clientesIcon"></i></a> -->
                                    <a href="#" onclick="editPedido('{{$Pedido}}')"><i class="icon-edit2 clientesIcon"></i></a>
                                    <a href="#" onclick="deletePedido('{{$Pedido->id}}')"><i class="icon-exclamation clientesIcon"></i></a>
                                 </td>
                              </tr>
                              @endforeach
                              </tfoot>
                        </table>
                     </div>
                     <script>
                        $(document).ready(function() {
                            $('#example').DataTable();
                            $("#pedidosListaTable").css("display", "block")
                        } );
                     </script>
                     <style>
                        #pedidosListaTable{
                        padding: 20px;
                        }
                        .clientesIcon{
                        font-size: 25px;
                        }
                     </style>
                  </div>
               </div>
            </div>
         <!--/ project charts -->

         <!--/ project charts -->
         <div class="row">
            <div class="col-xl-12 col-lg-12">
               <div class="card">
                  <div class="card-body">
                     <h2 style='padding: 20px;'>Ordenes del dia de hoy</h2>
                     <div id="ordenesLista-A">
                           
                       </div>
                       <div id="ordenesLista-B">
                       </div>
                  </div>
               </div>
            </div>
         <!--/ project charts -->
      </div>
   </div>
</div>
<script>
$(document).ready(function(){
       

    $("#ordenesLista-A").load(url+"/ordenes/ordenesEscritorio",{Data: "Ejemplo"});
});
</script>
@include("darSeguimiento");
@include("footer");