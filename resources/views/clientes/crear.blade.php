<div class="card-block">
    <div id="crearCliente">
        <div class="form-body">
            <div class="form-group">
                <div class="col-md-6">
                    <label for="timesheetinput1">Nombre</label>
                    <div class="position-relative has-icon-left nombre_parent">
                        <input type="text" id="nombre" class="form-control" placeholder="Nombre del cliente">
                        <div class="form-control-position">
                            <i class="icon-head"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
            <div class="form-group">
                <label for="timesheetinput2">Cedula</label>
                <div class="position-relative has-icon-left">
                    <input type="text" id="cedula" class="form-control" placeholder="Numero de cedula del cliente">
                    <div class="form-control-position">
                        <i class="icon-newspaper"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">            
             <div class="form-group">
                <label for="timesheetinput2">Direccion</label>
                <div class="position-relative has-icon-left">
                    <input type="text" id="direccion" class="form-control" placeholder="Direccion del cliente">
                    <div class="form-control-position">
                        <i class="icon-address-book"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
             <div class="form-group">
                <label for="timesheetinput2">Zona</label>
                <div class="position-relative has-icon-left">
                    <input type="text" id="zona" class="form-control" placeholder="Zona de domicilio del cliente">
                    <div class="form-control-position">
                        <i class="icon-location2"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
             <div class="form-group">
                <label for="timesheetinput2">Telefono</label>
                <div class="position-relative has-icon-left">
                    <input type="text" id="telefono" class="form-control" placeholder="Telefono del cliente">
                    <div class="form-control-position">
                        <i class="icon-phone"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="col-md-6">  
             <div class="form-group">
                <label for="timesheetinput2">Correo</label>
                <div class="position-relative has-icon-left">
                    <input type="email" id="correo" class="form-control" placeholder="Correo del cliente">
                    <div class="form-control-position">
                        <i class="icon-mail2"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
             <div class="form-group">
                <label for="timesheetinput2">Productos</label>
                <div class="position-relative has-icon-left">
                    <input type="text" id="productos" class="form-control" placeholder="Escribe los productos">
                    <div class="form-control-position">
                        <i class="icon-svg"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="timesheetinput2">Tipo de negocio</label>
                <div class="position-relative has-icon-left">
                    <select type="email" id="tipo_negocio" class="form-control" placeholder="Correo del cliente">
                    	<option>Colmado</option>
                    	<option>Pollera</option>
                    	<option>Restaurant</option>
                    </select>
                    <div class="form-control-position">
                        <i class="icon-briefcase4"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
				<label>Tipo de cliente</label>
				<div class="input-group">
					<label class="display-inline-block custom-control custom-radio ml-1">
						<input type="radio" name="tipo_cliente" value="Fisico personal" id="tipo_cliente" class="custom-control-input">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description ml-0">Fisico personal</span>
					</label>
					<label class="display-inline-block custom-control custom-radio">
						<input type="radio" name="tipo_cliente" checked="" id="tipo_cliente" value="Juridico empresa" class="custom-control-input">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description ml-0">Juridico empresa</span>
					</label>
				</div>
			</div>
        </div>

          {{--   <div class="form-group">
                <label for="timesheetinput3">Date</label>
                <div class="position-relative has-icon-left">
                    <input type="date" id="timesheetinput3" class="form-control" name="date">
                    <div class="form-control-position">
                        <i class="icon-calendar5"></i>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label>Rate Per Hour</label>
                <div class="input-group">
                    <span class="input-group-addon">$</span>
                    <input type="text" class="form-control" placeholder="Rate Per Hour" aria-label="Amount (to the nearest dollar)" name="rateperhour">
                    <span class="input-group-addon">.00</span>
                </div>
            </div> --}}

    <div class="col-md-12">
        <div class="form-actions right">
            <button onclick="guardarCliente()" class="btn btn-danger crearCliente_btn">
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