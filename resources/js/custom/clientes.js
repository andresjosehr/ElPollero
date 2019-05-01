

window.guardarCliente=function(){

	$("small").remove()
	$("#crearCliente #nombre").removeClass("border-danger");
	$("#crearCliente #nombre").parent().css("margin-botton", "-7px");

	var Data={};
	$("#crearCliente input, #crearCliente select").map(function(){
		Data[this.id]=this.value;
	})
	Data.tipo_cliente = $("#crearCliente #tipo_cliente:checked").val();

				var val=0;
				if ($("#crearCliente #nombre").val()=="") {
					$("#crearCliente #nombre").after("<small style='color:red'>Debes completar este campo</small>")
					$("#crearCliente #nombre").addClass("border-danger")
					val++;
				}

				if (val==0) {
					$(".crearCliente_btn").hide(200, function(){
						$(".crearCliente_loading").show(200);
					});


					$.ajax({
				      type: 'POST',
				      url: url+"/clientes",
							data: Data,
							headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				      success: function(result){

				      	if (result=="Exito") {
				      		$("#clientesLista-B").load(url+"/clientes/listaUpdate", {Data: "Ejemplo"});
				      		swal("¡Listo!", "Cliente registrado satisfactoriamente!", "success");
				      		$("#crearCliente input").map(function(){
								$(this).val("");
							})
				      	}

				      	$(".crearCliente_loading").hide(200, function(){
							$(".crearCliente_btn").show(200);
						});

						}
				  });
			}
}



window.deleteClient=function(id){
	swal("Espera!", "¿Estas seguro de eliminar este cliente? Todos los registro asociados a este cliente tambien seran eliminados", "warning")
	.then((value) => {
	  $("#cliente_"+id).fadeOut("slow", function(){
	  	$("#cliente_"+id).remove();
	  	swal("¡Listo!", "Cliente Eliminado satisfactoriamente", "success")
	  });
	  $.ajax({
	    type: 'DELETE',
			url: url+"/clientes/"+id,
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	console.log(result);
	    }

	});

	});
}

window.editClient=function(cliente){


	cliente=JSON.parse(cliente);

	for (var key in cliente) {
		$("#editarCliente #"+key+"[type='text'], #editarCliente #"+key+"[type='email'], #editarCliente #"+key+"[type='select'], #editarCliente #"+key+"[type='hidden']").val(cliente[key]);
		
		if (key=="tipo_cliente") {
			$("#editarCliente input[value='Fisico personal']").removeAttr('checked');
			$("#editarCliente input[value='Juridico empresa']").removeAttr('checked');

			$("#editarCliente input[value='"+cliente[key]+"']").attr("checked", "checked");
		}
	}

	$("#editarCliente_btn").click();
}







window.updateCliente=function(){

	$("small").remove()
	$("#editarCliente #nombre").removeClass("border-danger");
	$("#editarCliente #nombre").parent().css("margin-botton", "-7px");

	var Data={};
	$("#editarCliente input, #editarCliente select").map(function(){
		Data[this.id]=this.value;
	})
	Data.tipo_cliente = $("#editarCliente #tipo_cliente:checked").val();


				var val=0;
				if ($("#editarCliente #nombre").val()=="") {
					$("#editarCliente #nombre").after("<small style='color:red'>Debes completar este campo</small>")
					$("#editarCliente #nombre").addClass("border-danger")
					val++;
				}

				if (val==0) {
					$(".crearCliente_btn").hide(200, function(){
						$(".crearCliente_loading").show(200);
					});

					Data._method="post";

					console.log(Data)
					$.ajax({
				      type: 'PATCH',
				      url: url+"/clientes/"+Data.id,
							data: Data,
							headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
				      success: function(result){

				      	if (result=="Exito") {
				      		$("#clientesLista-B").load(url+"/clientes/listaUpdate", {Data: "Ejemplo"});

				      		swal("¡Listo!", "Cliente actualizado satisfactoriamente!", "success");
				      	}

				      	$(".crearCliente_loading").hide(200, function(){
							$(".crearCliente_btn").show(200);
						});

						}
				  });
			}
}