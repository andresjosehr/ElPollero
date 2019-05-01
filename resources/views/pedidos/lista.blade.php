<script>
    if ($("#pedidosLista-B #pedidosListaTable").attr("id")=="pedidosListaTable") {
        $("#pedidosLista-A").remove();
    } else{
    }
</script>

<div id="pedidosListaTable" style="display: none; overflow-x: auto;">
<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Periodicidad</th>
                <th>Tipo de Pago</th>
                <th>Especificaciones</th>
                <th>Observaciones</th>
                <th>Cliente</th>
                <th>Acciones</th>

            </tr>
        </thead>
        <tbody>
            @foreach ($Pedidos as $Pedido)
                <tr id="pedido_{{$Pedido->id}}">
                    <td>{{$Pedido->productos}}</td>
                    <td>@if ($Pedido->cantidad==null) Sin datos @else {{$Pedido->cantidad}} @endif</td>
                    <td>@if ($Pedido->periodicidad==null) Sin datos @else {{$Pedido->periodicidad}} @endif</td>
                    <td>@if ($Pedido->tipo_pago==null) Sin datos @else {{$Pedido->tipo_pago}} @endif</td>
                    <td>@if ($Pedido->especificaciones==null) Sin datos @else {{$Pedido->especificaciones}} @endif</td>
                    <td>@if ($Pedido->observaciones==null) Sin datos @else {{$Pedido->observaciones}} @endif</td>
                    <td>{{$Pedido->clientes->nombre}}</td>
                    <td>
                        <!-- <a href="#" onclick=""><i class="icon-truck2 clientesIcon"></i></a> -->
                        <a href="#" onclick="editPedido('{{$Pedido}}')"><i class="icon-edit2 clientesIcon"></i></a>
                        <a href="#" onclick="deletePedido('{{$Pedido->id}}')"><i class="icon-exclamation clientesIcon"></i></a>
                    </td>
                </tr>
            @endforeach
        </tfoot>
    </table>
</div>

<script>
    $(document).ready(function() {
        $('#example').DataTable();
        $("#pedidosListaTable").css("display", "block")
    } );
</script>

<style>
    #pedidosListaTable{
        padding: 20px;
    }
    .clientesIcon{
        font-size: 25px;
    }
</style>