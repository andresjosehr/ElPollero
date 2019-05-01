window.PedidoLlamado=function(){


    $('input:checkbox').change(
        function(){
            var Data={};

            if($(this).is(':checked')){
                var llamado="Si";
            } else{
                var llamado="No";
            }

            $("#span_"+$(this).val()).text(" "+llamado)
            
            Data.llamado=llamado;
            Data.id=$(this).val();
            $.ajax({
                type: 'POST',
                url: url+"/llamadoPedidos",
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: Data,
                success: function(result){
                   
    
                }
            });


        });
    
}