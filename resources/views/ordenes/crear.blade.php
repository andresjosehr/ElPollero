<div class="card-block">
    <div id="crearOrdenPedido">
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
            <button onclick="guardarOrden()" class="btn btn-danger crearCliente_btn">
                <i class="icon-check2"></i> Guardar
            </button>
             <div align="left">
                <div class="loading crearCliente_loading" style="width: 40px;height: 40px"></div>
            </div>
        </div>
    </div>
</div>

</div>

<style>
    .nombre_parent{
        margin-bottom: -7px;
    }
</style>