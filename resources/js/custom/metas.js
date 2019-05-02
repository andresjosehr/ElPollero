



window.createMeta=function(id){

    var idRow=makeid(10);

    $("#tbody_"+id).append("<tr id='"+idRow+"'>"+
                                '<input type="hidden" id="id_usuario" value="'+id+'">'+
                                '<td class="text-truncate"><input type="text" id="tipo" class="form-control" placeholder="Categoria de la meta" name="lname"></td>'+
                                '<td class="text-truncate"><input type="text" id="periodo" class="form-control" placeholder="Periodo de la meta" name="lname"></td>'+
                                '<td class="text-truncate"><input type="text" id="Cantidad" class="form-control" placeholder="Cantidad" name="lname"></td>'+
                                '<td class="text-truncate"><button class="btn btn-primary btn-block" onclick="StoreMeta('+"'"+idRow+"'" +')">Guardar</button></td>'+
                            "<tr>");
    
}


window.StoreMeta=function(id){

    $("small").remove();
    
    var val=0; Data={};

    $("#"+id+" input").map(function(){
        $("#"+this.id).removeClass("border-danger")
        $("#"+id+" #"+this.id).removeClass("border-danger")
        if(this.value==""){
            $("#"+id+" #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
            $("#"+id+" #"+this.id).addClass("border-danger")
            val++;
        }
        Data[this.id]=this.value;
    })

    if(val==0){
        


		$.ajax({
		    type: 'POST',
		    url: url+"/metas/createMeta",
				data: Data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){

                    $( "#"+id+" td" ).last().addClass("acc_btn");
                    $( ".acc_btn" ).empty();
                    $( ".acc_btn" ).parent().attr("id", "meta_"+result.id)
                    $( "#meta_"+result.id+" input[type='hidden']" ).attr("id", "id")
                    $( "#meta_"+result.id+" input[type='hidden']" ).attr("value", result.id)
	    		
                    $( ".acc_btn" ).append('<button class="btn btn-primary" onclick="GuardarMeta('+ "'"+'meta_'+result.id+"'"+')">Guardar</button>'+
                                            '<button class="btn btn-danger" onclick="deleteMeta('+ "'"+result.id+"'"+')">Eliminar</button>');
                    swal("¡Listo!", "Meta registrada exitosamente", "success");
            }

		});
    }


}



window.GuardarMeta=function(id){
    $("small").remove();
    var val=0; Data={};
    $("#"+id+" input").map(function(){
        $("#"+id+" #"+this.id).removeClass("border-danger")
        if(this.value==""){
            $("#"+id+" #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
            $("#"+id+" #"+this.id).addClass("border-danger")
            val++;
        }
        Data[this.id]=this.value;
    })


    if(val==0){

        Data._method="POST";
		$.ajax({
		    type: 'PUT',
		    url: url+"/metas/"+Data.id,
				data: Data,
				headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){

		    	if (result=="Exito") {		    		

		    		swal("¡Listo!", "Orden actualizada satisfactoriamente!", "success");
		    	}

			}
		});

    }
}

window.makeid=function(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }



 window.deleteMeta=function(id){

    swal("Espera!", "¿Estas seguro de eliminar esta meta?", "warning")
	.then((value) => {
	  $("#meta_"+id).fadeOut("slow", function(){
	  	$("#meta_"+id).remove();
	  	swal("¡Listo!", "Meta Eliminada satisfactoriamente", "success")
	  });
	  $.ajax({
	    type: 'DELETE',
			url: url+"/metas/"+id,
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	console.log(result);
	    }

	});

	});

 }