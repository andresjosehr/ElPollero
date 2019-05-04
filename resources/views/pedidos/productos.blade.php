
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
                               <tbody id='producto_tbody'>
                                   @foreach ($Productos as $Producto)
                                   <tr id="producto_{{$Producto->id}}">
                                   <input type="hidden" id="id" value="{{$Producto->id}}">
                                           <td class="text-truncate"><input type="text" id="nombre" value='{{$Producto->nombre}}' class="form-control" placeholder="Last Name" name="lname"></td>
                                           <td class="text-truncate">
                                                   <button class="btn btn-primary" onclick="GuardarProducto('{{$Producto->id}}')">Guardar</button>
                                                   <button class="btn btn-danger" onclick="deleteProducto('{{$Producto->id}}')">Eliminar</button>
                                           </td>                                                        
                                       </tr>
                                   @endforeach
                               </tbody>
                           </table>
                           <button class="btn btn-block btn-primary" onclick="createProducto()">Añadir Producto</button>
                       </div>
                          
                    </div>
                </div>
            </div>



