@include("general");

<div class="app-content content container-fluid">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-xs-12 mb-1">
                <h2 class="content-header-title">Metas</h2>
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
                           
                            <div class="card">
                                @if (count($Metas)==0)
                                    <h2 align="center">No hay vendedores registrados en estos momentos</h2>
                                @endif
                                @foreach ($Metas as $Cliente)
                              <div class="card-header" id="headingOne" style='padding-top:20px'>
                                <h5 class="mb-0">
                                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne_{{$Cliente->id}}" aria-expanded="true" aria-controls="collapseOne">
                                    {{$Cliente->nombre}}
                                  </button>
                                </h5>
                              </div>
                          
                              <div id="collapseOne_{{$Cliente->id}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body" style="padding:10px">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Categoria</th>
                                                    <th>Periodo</th>
                                                    <th>Cantidad</th>
                                                    <th>Accion</th>
                                                </tr>
                                            </thead>
                                            <tbody id='tbody_{{$Cliente->id}}'>
                                                @foreach ($Cliente->metas as $Meta)
                                                <tr id="meta_{{$Meta->id}}">
                                                <input type="hidden" id="id" value="{{$Meta->id}}">
                                                        <td class="text-truncate"><input type="text" id="tipo" value='{{$Meta->tipo}}' class="form-control" placeholder="Last Name" name="lname"></td>
                                                        <td class="text-truncate"><input type="text" id="periodo" value='{{$Meta->periodo}}' class="form-control" placeholder="Last Name" name="lname"></td>
                                                        <td class="text-truncate"><input type="text" id="Cantidad" value='{{$Meta->Cantidad}}' class="form-control" placeholder="Last Name" name="lname"></td>                                                        
                                                        <td class="text-truncate">
                                                                <button class="btn btn-primary" onclick="GuardarMeta('meta_{{$Meta->id}}')">Guardar</button>
                                                                <button class="btn btn-danger" onclick="deleteMeta('{{$Meta->id}}')">Eliminar</button>
                                                        </td>                                                        
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                        <button onclick="createMeta('{{$Cliente->id}}')" class="btn btn-block btn-primary">Añadir meta</button>
                                    </div>
                                </div>
                              </div>
                              @endforeach
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


