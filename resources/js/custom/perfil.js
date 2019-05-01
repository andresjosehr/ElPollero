


window.ActualizarPerfil=function(){


	$(".PerfilForm small").remove();
	var val=0; var Data={};
	$(".PerfilForm input").map(function(e, input){
		$("#"+input.id).removeClass("border-danger");
		if (input.value=="") {
			$("#"+input.id).addClass("border-danger")
			$("#"+input.id).after("<small style='color:red'>Debes completar este campo</small>")
			val++; 
		}
		Data[input.id]=input.value;
	})

	if (val==0) {

		$(".actualizarPerfil_btn").hide(200, function(){
			$(".actualizarPerfil_loading").show(200);
		});
		Data["_method"]="POST";
			$.ajax({
		      type: 'PATCH',
		      url: url+"/usuarios/0",
					data: Data,
					headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		      success: function(result){

		      	$(".actualizarPerfil_loading").hide(200, function(){
					$(".actualizarPerfil_btn").show(200);
				});

				if (result!="Exito") {
					for (var key in result) {
						$(".PerfilForm #"+key).addClass("border-danger")
						$(".PerfilForm #"+key).after("<small style='color:red'>"+result[key]+"</small>")
					}

				} else{
					swal("Listo!", "Datos actualizados exitosamente", "success");				}
		      }
		  });
	}
}


window.ActualizarPassword=function(){

	$(".PasswordForm small").remove();
	var val=0; var Data={};
	$(".PasswordForm input").map(function(e, input){
		$(".PasswordForm #"+input.id).removeClass("border-danger");
		if (input.value=="") {
			$(".PasswordForm #"+input.id).addClass("border-danger")
			$(".PasswordForm #"+input.id).after("<small style='color:red'>Debes completar este campo</small>")
			val++; 
		}
		Data[input.id]=input.value;
	});

	if (Data.password!=Data.password2 && val==0) {

		$(".PasswordForm #password").addClass("border-danger")
		$(".PasswordForm #password2").addClass("border-danger")
		$(".PasswordForm #password").after("<small style='color:red'>Las contraseñas no coinciden</small>")
		$(".PasswordForm #password2").after("<small style='color:red'>Las contraseñas no coinciden</small>")

		val++

	}

	if (val==0) {

		$(".actualizarPasswordB_btn").hide(200, function(){
			$(".actualizarPassword_loader").show(200);
		});
		Data["_method"]="POST";
		Data["pass"]=true;
			$.ajax({
		      type: 'PATCH',
		      url: url+"/usuarios/0",
					data: Data,
					headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		      success: function(result){

		      	$(".actualizarPassword_loader").hide(200, function(){
					$(".actualizarPasswordB_btn").show(200);
				});

				console.log(result);

				 if (result!="Exito") {
				 	swal("Error", "Error interno, contacte al administrador del sistema", "error")

				 } else{
				 	$(".PasswordForm input").map(function(e, input){
						$(".PasswordForm #"+input.id).val("");
					});
				 	swal("Listo!", "Datos actualizados exitosamente", "success");
				 	}
		       }
		  });
	}

}