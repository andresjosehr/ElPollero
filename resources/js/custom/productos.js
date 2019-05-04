

window.createProducto=function(){
	var idRow=makeid(10);

    $("#producto_tbody").append("<tr id='"+idRow+"'>"+
                                '<td class="text-truncate"><input type="text" id="nombre" class="form-control" placeholder="Escriba el nombre del producto" name="lname"></td>'+
                                '<td class="text-truncate"><button class="btn btn-primary btn-block" onclick="StoreProducto('+"'"+idRow+"'" +')">Guardar</button></td>'+
                            "<tr>");
}


window.StoreProducto=function(id){

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
		url: url+"/Productos",
		data: Data,
		headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	swal("Listo", "Producto registrado correctamente", "success");
	    	$("#"+id).attr("id", "producto_"+result.id);

	    	$("#producto_"+result.id+" .btn-primary").css("display", "none");
	    	$("#producto_"+result.id+" .btn-primary").parent().append('<button class="btn btn-primary" onclick="GuardarProducto('+"'"+result.id+"'"+')">Guardar</button>'+
                                                   						'<button class="btn btn-danger" onclick="deleteProducto('+"'"+result.id+"'"+')">Eliminar</button>');
	    	
	    }

	});
	}
}


window.GuardarProducto=function(id){

	var val=0;
	$("#producto_"+id+" #nombre").removeClass("border-danger");
	$("#producto_"+id+" small").remove();
	if ($("#producto_"+id+" #nombre").val()=="") {
		$("#producto_"+id+" #nombre").addClass("border-danger");
		$("#producto_"+id+" #nombre").after("<small style='color:red'>Debes completar este campo</small>")
		val++;
	}

	if (val==0) {

		var Data={};
		Data.nombre=$("#producto_"+id+" #nombre").val();
		Data._method="POST";
		swal("Listo!", "El producto se ha actualizado de manera exitosa", "success");
		$.ajax({
		    type: 'PUT',
			url: url+"/Productos/"+id,
			data: Data,
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){
		    	// console.log(result);
		    }

		});
	}

}


window.deleteProducto=function(id){
	swal({
		title: "Espera!", text: "¿Estas seguro de eliminar este producto?", icon: "warning", buttons: true})
	.then((value) => {
		if (value) {
	  $("#producto_"+id).fadeOut("slow", function(){
	  	$("#producto_"+id).remove();
	  	swal("¡Listo!", "Producto Eliminado satisfactoriamente", "success")
	  });
	  $.ajax({
	    type: 'DELETE',
			url: url+"/Productos/"+id,
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	console.log(result);
	    }

	});
	  }

	});
}