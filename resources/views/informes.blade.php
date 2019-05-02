@include("general");

<div class="app-content content container-fluid">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-xs-12 mb-1">
                    <h2 class="content-header-title">Clientes</h2>
            </div>
        </div>
        <div class="content-body">
            <!-- Basic Tables start -->
            <div class="row">
                <div class="col-xs-12">
                    <div class="card">
                        <div class="card-header">
                           
                        </div>
                        <div id="accordion" style="padding:20px">
                           @foreach ($Usuarios as $Usuario)
                            <div class="card">
                              <div class="card-header" id="headingOne" style='padding-top:20px'>
                                <h5 class="mb-0">
                                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne_{{$Usuario->id}}" aria-expanded="true" aria-controls="collapseOne">
                                    {{$Usuario->nombre}}
                                  </button>
                                </h5>
                              </div>
                          
                              <div id="collapseOne_{{$Usuario->id}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body" style="padding:10px">
                                        <h2 class="content-header-title">Clientes Registrados</h2>
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Email</th>
                                                    <th>Telefono</th>
                                                </tr>
                                            </thead>
                                            <tbody id='tbody_'>
                                                @foreach ($Clientes as $Cliente)
                                                    @if($Cliente->id==$Usuario->id)
                                                        @foreach ($Cliente->clientes as $ClienteDefinitivo)
                                                        <tr>
                                                            <td class="text-truncate">{{$ClienteDefinitivo->nombre}}</td>
                                                            <td class="text-truncate">{{$ClienteDefinitivo->correo}}</td>
                                                            <td class="text-truncate">{{$ClienteDefinitivo->telefono}}</td>
                                                        </tr>
                                                        @endforeach
                                                    @endif
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                    <h2 class="content-header-title">Pedidos Registrados</h2>
                                    <div class="table-responsive" style="margin-top:20px">
                                            <table class="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Producto</th>
                                                        <th>Cantidad</th>
                                                        <th>Periodicidad</th>
                                                        <th>Observaciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody id='tbody_'>
                                                        @foreach ($Pedidos as $Pedido)
                                                        @if($Pedido->id_usuario==$Usuario->id)
                                                            @foreach ($Pedido->pedidos as $PedidoDefinitivo)
                                                            <tr>
                                                                <td class="text-truncate">{{$PedidoDefinitivo->productos}}</td>
                                                                <td class="text-truncate">{{$PedidoDefinitivo->cantidad}}</td>
                                                                <td class="text-truncate">{{$PedidoDefinitivo->periodicidad}}</td>
                                                                <td class="text-truncate">{{$PedidoDefinitivo->observaciones}}</td>
                                                            </tr>
                                                            @endforeach
                                                        @endif
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                        <h2 class="content-header-title">Ordenes Registradas</h2>
                                        <div class="table-responsive" style="margin-top:20px">
                                                <table class="table table-hover mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Productos</th>
                                                            <th>Cantidad</th>
                                                            <th>Fecha Entrega</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id='tbody_'>
                                                            @foreach ($Ordenes as $Orden)
                                                            @if($Orden->id_usuario==$Usuario->id)
                                                                @foreach ($Orden->ordenes as $OrdenDefinitiva)
                                                                @if($OrdenDefinitiva->estado=="Abierta")
                                                                <tr>
                                                                    <td class="text-truncate">{{$OrdenDefinitiva->productos}}</td>
                                                                    <td class="text-truncate">{{$OrdenDefinitiva->cantidad}}</td>
                                                                    <td class="text-truncate">{{$OrdenDefinitiva->fecha_hora_entrega}}</td>
                                                                </tr>
                                                                @endif
                                                                @endforeach
                                                            @endif
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                            </div>
                                            <h2 class="content-header-title">Ordenes Cerradas</h2>
                                            <div class="table-responsive" style="margin-top:20px">
                                                    <table class="table table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Productos</th>
                                                                <th>Cantidad</th>
                                                                <th>Fecha entregado</th>
                                                                <th>Fecha cerrado</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id='tbody_'>
                                                                @foreach ($Ordenes as $Orden)
                                                                @if($Orden->id_usuario==$Usuario->id)
                                                                    @foreach ($Orden->ordenes as $OrdenDefinitiva)
                                                                    @if($OrdenDefinitiva->estado=="Cerrada")
                                                                    <tr>
                                                                        <td class="text-truncate">{{$OrdenDefinitiva->productos}}</td>
                                                                        <td class="text-truncate">{{$OrdenDefinitiva->cantidad}}</td>
                                                                        <td class="text-truncate">{{$OrdenDefinitiva->fecha_hora_entregada}}</td>
                                                                        <td class="text-truncate">{{$OrdenDefinitiva->update_cerrada_at}}</td>
                                                                    </tr>
                                                                    @endif
                                                                    @endforeach
                                                                @endif
                                                            @endforeach
                                                        </tbody>
                                                    </table>
                                                </div>
                                </div>
                              </div>
                            </div>
                            @endforeach
                          </div>
                          
                    </div>
                </div>
            </div>
            <!-- Basic Tables end -->
        </div>
    </div>
</div>

<style>
    .card-body h2{
        font-size: 1.5rem;
        margin-top: 30px;
    }
</style>

@include("footer");


