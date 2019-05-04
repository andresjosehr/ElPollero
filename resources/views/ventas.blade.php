@include("general");
<div class="app-content content container-fluid">
   <div class="content-wrapper">
      <div class="content-header row">
         <div class="content-header-left col-md-6 col-xs-12 mb-1">
            <h2 class="content-header-title">Informe de ventas</h2>
         </div>
      </div>
      <div class="content-body">
         <!-- Basic Tables start -->
         <div class="row">
            <div class="col-xs-12">
               <div class="card">
                  <div class="card-header">
                  </div>
                  <script>
                        $(document).ready(function(){
                            $("#profile-tab").click()
                            $("#home-tab").click()
                        })
                    </script>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                     <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Por productos</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Por Clientes</a>
                     </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                     <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div id="accordion" style="padding:20px">
                           @foreach ($Productos as $Producto)
                           <div class="card">
                              <div class="card-header" id="headingOne" style='padding-top:20px'>
                                 <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne_{{$Producto->id}}" aria-expanded="true" aria-controls="collapseOne">
                                    {{$Producto->nombre}}
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseOne_{{$Producto->id}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                 <div class="card-body" style="padding:10px">
                                    <div class="table-responsive">
                                       <table class="table table-hover mb-0">
                                          <thead>
                                             <tr>
                                                <th>Libras vendidas</th>
                                                <th>Unidades vendidas</th>
                                             </tr>
                                          </thead>
                                          <tbody id='tbody'>
                                             <tr id="meta_">
                                                <td class="text-truncate">
                                                   @php $Cant=0; @endphp
                                                   @foreach ($Producto->OrdenesCerradas as $Ordenes)
                                                   @if ($Ordenes->tipo_cantidad=="Libras")
                                                   @php $Cant=$Cant+$Ordenes->cantidad; @endphp
                                                   @endif
                                                   @endforeach
                                                   {{$Cant}}
                                                </td>
                                                <td class="text-truncate">
                                                   @php $Cant=0; @endphp
                                                   @foreach ($Producto->OrdenesCerradas as $Ordenes)
                                                   @if ($Ordenes->tipo_cantidad=="Unidades")
                                                   @php $Cant=$Cant+$Ordenes->cantidad; @endphp
                                                   @endif
                                                   @endforeach
                                                   {{$Cant}}
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           @endforeach
                        </div>
                     </div>
                     <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                         <div id="accordion" style="padding:20px">
                           @foreach ($Clientes as $Cliente)
                           <div class="card">
                              <div class="card-header" id="headingOne" style='padding-top:20px'>
                                 <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOneCli_{{$Cliente->id}}" aria-expanded="true" aria-controls="collapseOne">
                                    {{$Cliente->nombre}}
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseOneCli_{{$Cliente->id}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                 <div class="card-body" style="padding:10px">
                                    <div class="table-responsive">
                                       <table class="table table-hover mb-0">
                                          <thead>
                                             <tr>
                                                <th>Producto</th>
                                                <th>Libras vendidas</th>
                                                <th>Unidades vendidas</th>
                                             </tr>
                                          </thead>
                                          <tbody id='tbody'>
                                            @foreach ($Productos as $Producto)
                                                <tr id="meta_">
                                                <td class="text-truncate">{{$Producto->nombre}}</td>
                                                <td class="text-truncate">
                                                    @php $Cant=0; @endphp
                                                    @foreach ($Cliente->Ordenes as $Orden)
                                                        @if ($Orden->productos==$Producto->nombre && $Orden->tipo_cantidad=='Libras')
                                                            @php $Cant=$Cant+$Orden->cantidad; @endphp
                                                        @endif
                                                    @endforeach
                                                    {{$Cant}}
                                                </td>
                                                <td class="text-truncate">
                                                   @php $Cant=0; @endphp
                                                    @foreach ($Cliente->Ordenes as $Orden)
                                                        @if ($Orden->productos==$Producto->nombre && $Orden->tipo_cantidad=='Unidades')
                                                            @php $Cant=$Cant+$Orden->cantidad; @endphp
                                                        @endif
                                                    @endforeach
                                                    {{$Cant}}
                                                </td>
                                             </tr>
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
            </div>
         </div>
         <!-- Basic Tables end -->
      </div>
   </div>
</div>
@include("footer");