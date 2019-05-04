

window.createNegocio=function(){
	var idRow=makeid(10);

    $("#negocio_tbody").append("<tr id='"+idRow+"'>"+
                                '<td class="text-truncate"><input type="text" id="nombre" class="form-control" placeholder="Escriba el tipo de negocio" name="lname"></td>'+
                                '<td class="text-truncate"><button class="btn btn-primary btn-block" onclick="StoreNegocio('+"'"+idRow+"'" +')">Guardar</button></td>'+
                            "<tr>");
}


window.StoreNegocio=function(id){

	var val=0;
	$("#"+id+" #nombre").removeClass("border-danger");
	$("#"+id+" small").remove();
	if ($("#"+id+" #nombre").val()=="") {
		$("#"+id+" #nombre").addClass("border-danger");
		$("#"+id+" #nombre").after("<small style='color:red'>Debes completar este campo</small>")
		val++;
	}

	if (val==0) {
		var Data={};
		Data.nombre=$("#"+id+" #nombre").val();

		$.ajax({
	    type: 'POST',
		url: url+"/TipoNegocios",
		data: Data,
		headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	swal("Listo", "Tipo de negocio registrado correctamente", "success");
	    	$("#"+id).attr("id", "negocio_"+result.id);

	    	$("#negocio_"+result.id+" .btn-primary").css("display", "none");
	    	$("#negocio_"+result.id+" .btn-primary").parent().append('<button class="btn btn-primary" onclick="GuardarNegocio('+"'"+result.id+"'"+')">Guardar</button>'+
                                                   						'<button class="btn btn-danger" onclick="deleteNegocio('+"'"+result.id+"'"+')">Eliminar</button>');
	    	
	    }

	});
	}
}


window.GuardarNegocio=function(id){

	var val=0;
	$("#negocio_"+id+" #nombre").removeClass("border-danger");
	$("#negocio_"+id+" small").remove();
	if ($("#negocio_"+id+" #nombre").val()=="") {
		$("#negocio_"+id+" #nombre").addClass("border-danger");
		$("#negocio_"+id+" #nombre").after("<small style='color:red'>Debes completar este campo</small>")
		val++;
	}

	if (val==0) {

		var Data={};
		Data.nombre=$("#negocio_"+id+" #nombre").val();
		Data._method="POST";
		swal("Listo!", "El tipo de negocio se ha actualizado de manera exitosa", "success");
		$.ajax({
		    type: 'PUT',
			url: url+"/TipoNegocios/"+id,
			data: Data,
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){
		    	// console.log(result);
		    }

		});
	}

}


window.deleteNegocio=function(id){
	swal({
		title: "Espera!", text: "¿Estas seguro de eliminar este tipo de negocio?", icon: "warning", buttons: true})
	.then((value) => {
		if (value) {
	  $("#negocio_"+id).fadeOut("slow", function(){
	  	$("#negocio_"+id).remove();
	  	swal("¡Listo!", "Cliente Eliminado satisfactoriamente", "success")
	  });
	  $.ajax({
	    type: 'DELETE',
			url: url+"/TipoNegocios/"+id,
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	console.log(result);
	    }

	});
	  }

	});
}