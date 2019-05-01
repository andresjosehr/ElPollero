

window.RegistroAdmin=function(){
	$("#RegistroAdminForm small").remove();

	var val=0; var Data={};
	$("#RegistroAdminForm input").map(function(e, input){
		$("#"+input.id).removeClass("border-danger");
		if (input.value=="") {
			$("#RegistroAdminForm #"+input.id).addClass("border-danger")
			$("#RegistroAdminForm #"+input.id).after("<small style='color:red'>Debes completar este campo</small>")
			val++; 
		}
		Data[input.id]=input.value;
	})
	if (val!=0) {
		swal("¡Espera!", "Debes completar todos los datos", "warning")
	} else{

		if ($("#RegistroAdminForm #password").val()!=$("#RegistroAdminForm #password2").val()) {
			swal("¡Espera!", "Las contraseñas no coinciden", "warning")
			val++; 
		} else{

			var parts = window.location.pathname.split('/');
			Data.confirmando_registro = parts.pop() || parts.pop();  // handle potential trailing slash

			$.ajax({
		      type: 'POST',
		      url: url+"/usuarios/createAdmin",
			  data: Data,
			  headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		      success: function(result){
		      	if (result=="Exito") {
		      		swal("¡Listo!", "Registro Exitoso, ahora estas siendo redirigido", "success")
		      		window.location.href = "../../";
		      	}
		       }
		      });
		}
	}
}


window.RegistroVendedor=function(){
	$("#RegistroSellerForm small").remove();

	var val=0; var Data={};
	$("#RegistroSellerForm input").map(function(e, input){
		$("#"+input.id).removeClass("border-danger");
		if (input.value=="") {
			$("#RegistroSellerForm #"+input.id).addClass("border-danger")
			$("#RegistroSellerForm #"+input.id).after("<small style='color:red'>Debes completar este campo</small>")
			val++; 
		}
		Data[input.id]=input.value;
	})
	if (val!=0) {
		swal("¡Espera!", "Debes completar todos los datos", "warning")
	} else{

		if ($("#RegistroSellerForm #password").val()!=$("#RegistroSellerForm #password2").val()) {
			swal("¡Espera!", "Las contraseñas no coinciden", "warning")
			val++; 
		} else{

			var parts = window.location.pathname.split('/');
			Data.confirmando_registro = parts.pop() || parts.pop();  // handle potential trailing slash
			Data.rol=2;
			$.ajax({
		      type: 'POST',
		      url: url+"/usuarios/createSeller",
			  data: Data,
			  headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		      success: function(result){
		      	console.log(result)
		      	if (result=="Exito") {
		      		swal("¡Listo!", "Registro Exitoso, ahora estas siendo redirigido", "success")
		      		window.location.href = "../";
		      	} else{
		      		for (var key in result) {
						$("#RegistroSellerForm #"+key).addClass("border-danger")
						$("#RegistroSellerForm #"+key).after("<small style='color:red'>"+result[key]+"</small>")
					}
		      	}
		       }
		      });
		}
	}
}


window.resetearPass=function(){
		$("small").remove();
		$("#email").removeClass("border-danger")
		var val=0;
	if ($("#email").val()=="") {
		$("#email").addClass("border-danger")
		$("#email").after("<small style='color:red'>Debes introducir tu correo</small>")
		val++;
	}

	if (val==0) {

		$(".reset_btn").hide("fast", function(){
			$(".reset_loading").show("fast")
		})
		var Data={};
		Data.email=$("#email").val();

		$.ajax({
		      type: 'POST',
		      url: url+"/usuarios/resetPass",
			  data: Data,
			  headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		      success: function(result){
		      	if (result=="Exito") {
		      		swal("¡Listo!", "Hemos enviado un email a tu correo para el cambio de contraseña", "success")
		      	} else{
		      		for (var key in result) {
						$("#"+key).addClass("border-danger")
						$("#"+key).after("<small style='color:red'>"+result[key]+"</small>")
					}
		      	}


		      	$(".reset_loading").hide("fast", function(){
					$(".reset_btn").show("fast")
				})

		       }
		 });
	}


}

	window.resetearPass2=function(){
		$("small").remove();
		var val=0; var Data={};
			$("#ResetForm input").map(function(e, input){
				$("#"+input.id).removeClass("border-danger");
				if (input.value=="") {
					$("#ResetForm #"+input.id).addClass("border-danger")
					$("#ResetForm #"+input.id).after("<small style='color:red'>Debes completar este campo</small>")
					val++; 
				}
				Data[input.id]=input.value;
			})

			if ($("#ResetForm #password").val()!=$("#ResetForm #password2").val()) {

				$("#ResetForm #password").addClass("border-danger")
				$("#ResetForm #password").after("<small style='color:red'>Las contraseñas no coinciden</small>")

				$("#ResetForm #password2").addClass("border-danger")
				$("#ResetForm #password2").after("<small style='color:red'>Las contraseñas no coinciden</small>")
				val++;
			}
	

	if (val==0) {

		$(".reset_btn").hide("fast", function(){
			$(".reset_loading").show("fast")
		})

		var parts = window.location.pathname.split('/');
		var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash
		$.ajax({
		      type: 'POST',
		      url: url+"/resetear-contrasena/"+urlPath,
			  data: Data,
			  headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		      success: function(result){
		      	if (result=="Exito") {
		      		swal("¡Listo!", "Contraseña Actualizada exitosamente", "success")
		      		window.location.href = "../"
		      	} else{
		      		for (var key in result) {
						$("#"+key).addClass("border-danger")
						$("#"+key).after("<small style='color:red'>"+result[key]+"</small>")
					}
		      	}

		      	$(".reset_loading").hide("fast", function(){
					$(".reset_btn").show("fast")
				})

		       }
		 });
	}



}

