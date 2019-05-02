

window.guardarPedido=function(){

    $("small").remove()
    var val=0, Data={};
    $("#crearPedido input, #crearPedido select").map(function(){
        $("#crearPedido #"+this.id).removeClass("border-danger")
        if(this.id=="productos" && this.value==""){
            $("#crearPedido #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
            $("#crearPedido #"+this.id).addClass("border-danger")
            val++;
        }
        Data[this.id]=this.value;
    });

    Data.periodicidad=""; var i=0;
    $.each($("#crearPedido #periodicidad:checked"), function(){            
        if(i!=0){
            Data.periodicidad=Data.periodicidad+", "+$(this).val();
        } else{
            Data.periodicidad=$(this).val();
        }

        i++;
    });

    

    if(val==0){

        $("#crearPedido .crearCliente_btn").hide(200, function(){
            $("#crearPedido .crearCliente_loading").show(200);
        });
        $.ajax({
		    type: 'POST',
		    url: url+"/pedidos",
            data: Data,
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){
                console.log(result)
		    	if (result=="Exito") {
		    		$("#pedidosLista-B").load(url+"/pedidos/listaUpdate", {Data: "Ejemplo"});

		    		swal("¡Listo!", "Pedido registrado satisfactoriamente!", "success");
		    		$("#crearPedido input").map(function(){
					$(this).val("");
				})
		    	}

		    	$("#crearPedido .crearCliente_loading").hide(200, function(){
					$("#crearPedido .crearCliente_btn").show(200);
				});

			}
		});
    }
}


window.editPedido=function(pedido){

    pedido=JSON.parse(pedido);

    $("#editarPedido #periodicidad").map(function(){
        $(this).prop('checked', false);
    })

    for (var key in pedido) {
        if(key=="periodicidad"){

            var periodicidad=pedido[key].split(", ")
            periodicidad.map(function(key2, value){
                $("#editarPedido input[value='"+periodicidad[value]+"']").prop('checked', true);               
            })
        }else{
            $("#editarPedido #"+key).val(pedido[key]);
        }
	}

    $("#editarpedido_btn").click();
}






window.updatePedido=function(){

    $("small").remove()
    
    var val=0, Data={};
    $("#editarPedido input, #editarPedido select").map(function(){
        $("#editarPedido #"+this.id).removeClass("border-danger")
        if(this.id=="productos" && this.value==""){
            $("#editarPedido #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
            $("#editarPedido #"+this.id).addClass("border-danger")
            val++;
        }
        Data[this.id]=this.value;
    });

    Data.periodicidad=""; var i=0;
    $.each($("#editarPedido #periodicidad:checked"), function(){            
        if(i!=0){
            Data.periodicidad=Data.periodicidad+", "+$(this).val();
        } else{
            Data.periodicidad=$(this).val();
        }

        i++;
    });

    

    if(val==0){

        Data._method="POST";

        console.log(Data)

        $("#crearPedido .crearCliente_btn").hide(200, function(){
            $("#crearPedido .crearCliente_loading").show(200);
        });

        $.ajax({
		    type: 'PUT',
		    url: url+"/pedidos/"+Data.id,
            data: Data,
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){
                console.log(result)
		    	if (result=="Exito") {
		    		 $("#pedidosLista-B").load(url+"/pedidos/listaUpdate", {Data: "Ejemplo"});

		    		swal("¡Listo!", "Pedido actualizado satisfactoriamente!", "success");
		    	}

		    	$("#crearPedido .crearCliente_loading").hide(200, function(){
					$("#crearPedido .crearCliente_btn").show(200);
				});

			}
		});
    }
}


window.deletePedido=function(id){
    swal("Espera!", "¿Estas seguro de eliminar este peido?", "warning")
	.then((value) => {
	  $("#pedido_"+id).fadeOut("slow", function(){
	  	$("#pedido_"+id).remove();
	  	swal("¡Listo!", "Pedido Eliminado satisfactoriamente", "success")
	  });
	  $.ajax({
	    type: 'DELETE',
        url: url+"/pedidos/"+id,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
	    success: function(result){
	    	console.log(result);
	    }

	});

	});
}

window.guardarPedidoPublic=function(){

    $("small").remove()
    var val=0, Data={};
    $("#crearPedido input[type='text'], #crearPedido input[type='email']").map(function(){
        $("#crearPedido #"+this.id).removeClass("border-danger")
        if($("#crearPedido #"+this.id).val()==""){
            $("#crearPedido #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
            $("#crearPedido #"+this.id).addClass("border-danger")
            val++;
        }
        Data[this.id]=this.value;
    });

    Data.periodicidad=""; var i=0;
    $.each($("#crearPedido #periodicidad:checked"), function(){            
        if(i!=0){
            Data.periodicidad=Data.periodicidad+", "+$(this).val();
        } else{
            Data.periodicidad=$(this).val();
        }

        i++;
    });

    

    if(val==0){

        console.log(Data)

        $("#crearPedido .crearCliente_btn").hide(200, function(){
            $("#crearPedido .crearCliente_loading").show(200);
        });
        $.ajax({
		    type: 'POST',
            url: url+"/registrar-pedido-public2",
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    data: Data,
		    success: function(result){
                console.log(result)
		    	if (result=="Exito") {


		    		swal("¡Listo!", "Pedido registrado satisfactoriamente!", "success");
		    		$("#crearPedido input[type='text'], #crearPedido input[type='email']").map(function(){
                        $(this).val("");
                    })
		    	}

		    	$("#crearPedido .crearCliente_loading").hide(200, function(){
					$("#crearPedido .crearCliente_btn").show(200);
				});

			}
		});
    }

}
