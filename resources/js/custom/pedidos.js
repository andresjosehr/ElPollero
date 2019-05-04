

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


    Data.tipo_cantidad=""; var i=0;
    $.each($("#crearPedido #tipo_cantidad:checked"), function(){            
        Data.tipo_cantidad=$(this).val();
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
		    	if (result=="Exito") {
		    		$("#pedidosLista-B").load(url+"/pedidos/listaUpdate", {Data: "Ejemplo"});

		    		swal("¡Listo!", "Pedido registrado satisfactoriamente!", "success");
		    		$("#crearPedido input").map(function(){
                        if (this.id!="productos" && this.id!="periodicidad") {
					        $(this).val("");
                        }
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
            if (key!="tipo_cantidad" && key!="productos") {
                $("#editarPedido #"+key).val(pedido[key]);
            }
        }

        if(key=="tipo_cantidad"){
                $("#editarPedido .Libras").prop('checked', false);
                $("#editarPedido .Unidades").prop('checked', false);

                $("#editarPedido ."+pedido.tipo_cantidad).prop('checked', true);               
        }

        if(key=="productos"){
            $("#editarPedido #productos option").map(function(){
                $(this).removeAttr("selected");
            })
               $("#editarPedido #productos option[value='"+pedido.productos+"']").attr('selected', "selected");               
               $("#editarPedido #productos").val(pedido.productos);
        }
    }

    $("#modalPedido").click();
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

    $.each($("#editarPedido .tipo_cantidad:checked"), function(){            
        Data.tipo_cantidad=$(this).val();
        i++;
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

        $("#crearPedido .crearCliente_btn").hide(200, function(){
            $("#crearPedido .crearCliente_loading").show(200);
        });

        $.ajax({
		    type: 'PUT',
		    url: url+"/pedidos/"+Data.id,
            data: Data,
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    success: function(result){
		    	if (result=="Exito") {
		    		 $("#pedidosLista-B").load(url+"/pedidos/listaUpdate", {Data: "Ejemplo"});

		    		swal("¡Listo!", "Pedido actualizado satisfactoriamente!", "success");
                    var parts = window.location.pathname.split('/');
                    var urlPath = parts.pop() || parts.pop();
                    if (urlPath=="public") {
                        location.reload();
                    }
		    	}

		    	$("#crearPedido .crearCliente_loading").hide(200, function(){
					$("#crearPedido .crearCliente_btn").show(200);
				});

			}
		});
    }
}


window.deletePedido=function(id){
    swal({ title: "Espera!", text: "¿Estas seguro de eliminar este peido?", icon: "warning", buttons: true})
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


        $("#crearPedido .crearCliente_btn").hide(200, function(){
            $("#crearPedido .crearCliente_loading").show(200);
        });
        $.ajax({
		    type: 'POST',
            url: url+"/registrar-pedido-public2",
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
		    data: Data,
		    success: function(result){
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


window.createOrderAtPedido=function(pedido){

    pedido=JSON.parse(pedido);


    $("#crearOrdenAtPedido #productos option").map(function(){
        $(this).removeAttr("selected")
        if ($(this).val()==pedido.productos) {
            $(this).attr("selected", "selected");

            $("#crearOrdenAtPedido #productos").val(pedido.productos);

        }
    })

    $("#crearOrdenAtPedido input[value='Libras']").prop('checked', false);
    $("#crearOrdenAtPedido input[value='Unidades']").prop('checked', false);

    $("#crearOrdenAtPedido input[value='"+pedido.tipo_cantidad+"']").prop('checked', true);

    $("#crearOrdenAtPedido #cantidad").val(pedido.cantidad);
    $("#crearOrdenAtPedido #especificaciones").val(pedido.especificaciones);

    $("#crearOrdenAtPedido #id_cliente").val(pedido.id_cliente);
    $("#crearOrdenAtPedido #id_pedido").val(pedido.id);


    var parts = window.location.pathname.split('/');
    var urlPath = parts.pop() || parts.pop();
    if (urlPath=="public") {
        $("#PEle").click();
    } else{
        $("#ModalCreateOrden_btn").click();
    }
}



window.guardarOrderAtPedido=function(){
    var val=0, Data={};
    $("#crearOrdenAtPedido small").remove()
    $("#crearOrdenAtPedido input, #crearOrdenAtPedido select").map(function(){
        $("#crearOrdenAtPedido #"+this.id).removeClass("border-danger");
        if (this.id!="especificaciones" && this.id!="tipo_cantidad") {
            if (this.value=="") {
                $("#crearOrdenAtPedido #"+this.id).after("<small style='color:red'>Debes completar este campo</small>")
                $("#crearOrdenAtPedido #"+this.id).addClass("border-danger")
                val++;
            }
        }
        if (this.id!="id_pedido") {
            Data[this.id]=this.value;
        }
    })

    Data.tipo_cantidad=""; var i=0;
    $.each($("#crearOrdenAtPedido #tipo_cantidad:checked"), function(){            
        Data.tipo_cantidad=$(this).val();
        i++;
    });

    if (val==0) {

        OrdenCreada($("#crearOrdenAtPedido #id_pedido").val());

        $.ajax({
            type: 'POST',
            url: url+"/ordenes",
                data: Data,
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            success: function(result){

                if (result=="Exito") {

                     $("#ordenesLista-B").load(url+"/ordenes/listaUpdate", {Data: "Ejemplo"});

                    swal("¡Listo!", "Orden registrado satisfactoriamente!", "success");
                    $("#crearOrdenAtPedido input").map(function(){
                        if (this.id!="tipo_cantidad") {
                            $(this).val("");
                        }
                    })
                    location.reload();
                }

                $(".crearCliente_loading").hide(200, function(){
                    $(".crearCliente_btn").show(200);
                });

            }
        });
    }
}

window.OrdenCreada=function(id) {
    $.ajax({
            type: 'POST',
            url: url+"/OrdenCreada/"+id,
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            success: function(result){
            }
        });
}