
window.login_ingreso=function(){
	var val=0; var Data={};
	$("#LoginForm input").map(function(e, input){
		if (input.value=="") {
			swal("¡Espera!", "Debes completar los datos de acceso antes de ingresar", "warning");
			val++; 
		}
		Data[input.id]=input.value;
	})

	if (val==0) {

		$(".btn_login").hide(200, function(){
			$(".login_loading").show(200);
		});

	$.ajax({
	      type: 'POST',
	      url: url+"/login",
				data: Data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	      success: function(result){

	      	$(".login_loading").hide(200, function(){
				$(".btn_login").show(200);
			});

	      	if (result=="Invalido") {
	      		swal("¡Error!", "Credenciales Invalidas", "error");
	      	}
	      	if (result=="Error") {
	      		swal("¡Error!", "Debe escribir credenciales validas", "error");
	      	}

	      	if (result=="Exito") {
	      		swal("¡Listo!", "Ingreso exitoso, ahora esta siendo redirigido al panel de control", "success");
	      		window.location.href = "../";
	      	}
	      }
	  });

	}

}
