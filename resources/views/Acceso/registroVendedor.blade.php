@include("Acceso.general")


<div class="app-content content container-fluid">
      <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body"><section class="flexbox-container">
    <div class="col-md-4 offset-md-4 col-xs-10 offset-xs-1 box-shadow-2 p-0">
		<div class="card border-grey border-lighten-3 px-2 py-2 m-0">
			<div class="card-header no-border">
				<div class="card-title text-xs-center">
					<img src="{{ asset('images/logo.jpg') }}" style="width: 35%;border-radius: 100%;" alt="branding logo">
				</div>
				<h6 class="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2"><span>Panel de Registro Vendedor</span></h6>
			</div>
			<div class="card-body collapse in" id="RegistroSellerForm">	
				<div class="card-block">
					<div class="form-horizontal form-simple">
						<fieldset class="form-group position-relative has-icon-left mb-1">
							<input type="text" class="form-control form-control-lg input-lg" id="nombre" placeholder="Nombre" required="">
							<div class="form-control-position">
							    <i class="icon-head"></i>
							</div>
						</fieldset>
						<fieldset class="form-group position-relative has-icon-left mb-1">
							<input type="text" class="form-control form-control-lg input-lg" id="email" placeholder="Email" required="">
							<div class="form-control-position">
							    <i class="icon-head"></i>
							</div>
						</fieldset>
						<fieldset class="form-group position-relative has-icon-left">
							<input type="password" class="form-control form-control-lg input-lg" id="password" placeholder="Contraseña" required="">
							<div class="form-control-position">
							    <i class="icon-key3"></i>
							</div>
						</fieldset>
						<fieldset class="form-group position-relative has-icon-left">
							<input type="password" class="form-control form-control-lg input-lg" id="password2" placeholder="Repita su Contraseña" required="">
							<div class="form-control-position">
							    <i class="icon-key3"></i>
							</div>
						</fieldset>
						<button onclick="RegistroVendedor()" class="btn btn-primary btn-lg btn-block"><i class="icon-unlock2"></i> Registrarme</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
      </div>
    </div>



@include("Acceso.footer")