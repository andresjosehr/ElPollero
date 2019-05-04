
            <div class="row">
                <div class="col-xs-12">
                    <div class="card">
                        <div class="card-header">
                           
                        </div>
                       <div class="table-responsive">
                           <table class="table table-hover mb-0">
                               <thead>
                                   <tr>
                                       <th>Nombre</th>
                                       <th>Accion</th>
                                   </tr>
                               </thead>
                               <tbody id='negocio_tbody'>
                                   @foreach ($Negocios as $Negocio)
                                   <tr id="negocio_{{$Negocio->id}}">
                                   <input type="hidden" id="id" value="{{$Negocio->id}}">
                                           <td class="text-truncate"><input type="text" id="nombre" value='{{$Negocio->nombre}}' class="form-control" placeholder="Last Name" name="lname"></td>
                                           <td class="text-truncate">
                                                   <button class="btn btn-primary" onclick="GuardarNegocio('{{$Negocio->id}}')">Guardar</button>
                                                   <button class="btn btn-danger" onclick="deleteNegocio('{{$Negocio->id}}')">Eliminar</button>
                                           </td>                                                        
                                       </tr>
                                   @endforeach
                               </tbody>
                           </table>
                           <button class="btn btn-block btn-primary" onclick="createNegocio()">Añadir tipo de negocio</button>
                       </div>
                          
                    </div>
                </div>
            </div>



