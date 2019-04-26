


window.InvarAdministrador=function(){


	$(".InivitacionForm small").remove();
	var val=0; var Data={};
	$(".InivitacionForm input").map(function(e, input){
		$("#"+input.id).removeClass("border-danger");
		if (input.value=="") {
			$("#"+input.id).addClass("border-danger")
			$("#"+input.id).after("<small style='color:red'>Debes completar este campo</small>")
			val++; 
		}
		Data[input.id]=input.value;
	})

	if (val==0) {


			$(".inivitarAdministrador_btn").hide(200, function(){
				$(".invitarAdministrador_loading").show(200);
			});
			$.ajax({
		      type: 'POST',
		      url: url+"/usuarios",
		      data: Data,
		      success: function(result){

		      	$(".invitarAdministrador_loading").hide(200, function(){
					$(".inivitarAdministrador_btn").show(200);
				});

				if (!result.id) {
					for (var key in result) {
						$(".InivitacionForm #"+key).addClass("border-danger")
						$(".InivitacionForm #"+key).after("<small style='color:red'>"+result[key]+"</small>")
					}

				} else{

					$(".InivitacionForm input").map(function(e, input){
						$(".InivitacionForm #"+input.id).val("");
					});
					$("#tbody_adminTemp").append('<tr id="usuario_'+result.id+'" style="display: none;">'+
			                                            '<td>'+result.nombre+'</td>'+
			                                            '<td>'+result.email+'</td>'+
			                                            '<td>'+
			                                               '<button type="button" class="btn mr-1 mb-1 btn-primary btn-sm">Reenviar Email</button>'+
			                                               '<button type="button" class="btn mr-1 mb-1 btn-danger btn-sm">Eliminar</button>'+
			                                            '</td>'+
			                                        '</tr>');
					$("#usuario_"+result.id).show("slow");
					swal("Listo!", "Invitación registrada y enviada exitosamente", "success");				}
		      }
		  });
	}
}


window.EliminarAdministrado=function(id){
	swal({
          title: "Espera!",
          text: "¿Estas seguro de eliminar la invitacion de este usuario?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          $("#usuario_"+id).hide("slow", function(){ $(this).remove() });


          $.ajax({
		      type: 'DELETE',
		      url: url+"/usuarios/"+id,
		      success: function(result){
		      	console.log(result);
		       }
		      });

        });
}