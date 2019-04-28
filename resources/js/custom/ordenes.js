


window.guardarOrden=function(){
	var val=0, Data={};
	$("#crearOrdenPedido small").remove()
	$("#crearOrdenPedido input, #crearOrdenPedido select").map(function(){
		$("#crearOrdenPedido #"+this.id).removeClass("border-danger");
		if (this.id!="especificaciones") {
			if (this.value=="") {
				$("#crearOrdenPedido #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
				$("#crearOrdenPedido #"+this.id).addClass("border-danger")
				val++;
			}
		}
		Data[this.id]=this.value;
	})

	if (val==0) {
		$.ajax({
		    type: 'POST',
		    url: url+"/ordenes",
		    data: Data,
		    success: function(result){

		    	if (result=="Exito") {
		    		// $("#clientesLista-B").load(url+"/clientes/listaUpdate", {Data: "Ejemplo"});

		    		swal("¡Listo!", "Orden registrado satisfactoriamente!", "success");
		    		$("#crearOrdenPedido input").map(function(){
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



window.editOrder=function(orden){
	orden=JSON.parse(orden);


	for (var key in orden) {
		$("#editarOrdenPedido #"+key).val(orden[key]);
	}
	$("#editarOrdenPedido").css("display", "block")
	$("#cerrarOrdenUpdate").css("display", "none")

	$("#editarOrden_btn").click();

}

window.updaterOrden=function(){

	var val=0, Data={};
	$("#editarOrdenPedido small").remove()
	$("#editarOrdenPedido input, #editarOrdenPedido select").map(function(){
		$("#editarOrdenPedido #"+this.id).removeClass("border-danger");
		if (this.id!="especificaciones") {
			if (this.value=="") {
				$("#editarOrdenPedido #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
				$("#editarOrdenPedido #"+this.id).addClass("border-danger")
				val++;
			}
		}
		Data[this.id]=this.value;
	})

	if (val==0) {
		$(".editarOrden_btn").hide(200, function(){
			$(".editarOrden_loading").show(200);
		});
		Data._method="POST";
		$.ajax({
		    type: 'PUT',
		    url: url+"/ordenes/"+Data.id,
		    data: Data,
		    success: function(result){

		    	if (result=="Exito") {
		    		 $("#ordenesLista-B").load(url+"/ordenes/listaUpdate", {Data: "Ejemplo"});

		    		swal("¡Listo!", "Orden actualizada satisfactoriamente!", "success");
		    		$("#editarOrdenPedido input").map(function(){
					$(this).val("");
				})
		    	}

		    	$(".editarOrden_loading").hide(200, function(){
					$(".editarOrden_btn").show(200);
				});

			}
		});
	}
}



window.deleteOrder=function(id){
	swal("Espera!", "¿Estas seguro de eliminar esta orden?", "warning")
	.then((value) => {
	  $("#orden_"+id).fadeOut("slow", function(){
	  	$("#orden_"+id).remove();
	  	swal("¡Listo!", "Orden Eliminada satisfactoriamente", "success")
	  });
	  $.ajax({
	    type: 'DELETE',
	    url: url+"/ordenes/"+id,
	    success: function(result){
	    	console.log(result);
	    }

	});

	});
}


window.cerrarOrder=function(id){


	$("#cerrarOrdenUpdate #id").val(id);
	$("#editarOrdenPedido").css("display", "none")
	$("#cerrarOrdenUpdate").css("display", "block")

	$("#editarOrden_btn").click();
}

window.cerrrarOrdenUpdate=function(){


		var val=0, Data={};
	$("#cerrarOrdenUpdate small").remove()
	$("#eeeeeeeeeeaaaaaaaa input, #eeeeeeeeeeaaaaaaaa select").map(function(){
		$("#cerrarOrdenUpdate #"+this.id).removeClass("border-danger");
			if (this.value=="") {
				console.log(this.id)
				console.log(this.value)

				$("#cerrarOrdenUpdate #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
				$("#cerrarOrdenUpdate #"+this.id).addClass("border-danger")
				val++;
			}
		Data[this.id]=this.value;
	})

	if (val==0) {
		$(".editarOrden_btn").hide(200, function(){
			$(".editarOrden_loading").show(200);
		});

		Data._method="POST";
		Data.estado="Cerrada";
		$.ajax({
		    type: 'PUT',
		    url: url+"/ordenes/"+Data.id,
		    data: Data,
		    success: function(result){

		    	if (result=="Exito") {
		    		 $("#ordenesLista-B").load(url+"/ordenes/listaUpdate", {Data: "Ejemplo"});

		    		 $("#ordenesLista-B").load(url+"/ordenes/listaUpdate", {Data: "Ejemplo"});
		    		swal("¡Listo!", "Orden actualizada satisfactoriamente!", "success");
		    		$("#editarOrdenPedido input").map(function(){
					$(this).val("");
				})
		    	}

		    	$(".editarOrden_loading").hide(200, function(){
					$(".editarOrden_btn").show(200);
				});

			}
		});
	}

}
