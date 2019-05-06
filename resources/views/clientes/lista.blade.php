<script>
    if ($("#clientesLista-B #clientesTable").attr("id")=="clientesTable") {
        $("#clientesLista-A").remove();
    } else{
    }
</script>
<div id="clientesTable" style="display: none; overflow-x: auto;">
<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cedula</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Productos</th>
                <th>Negocios</th>
                <th>Clientes</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($Clientes as $Cliente)
                <tr id="cliente_{{$Cliente->id}}">
                    <td>{{$Cliente->nombre}}</td>
                    <td>@if ($Cliente->cedula==null) Sin datos @else {{$Cliente->cedula}} @endif</td>
                    <td>@if ($Cliente->direccion==null) Sin datos @else {{$Cliente->direccion}} @endif</td>
                    <td>@if ($Cliente->telefono==null) Sin datos @else {{$Cliente->telefono}} @endif</td>
                    <td>@if ($Cliente->correo==null) Sin datos @else {{$Cliente->correo}} @endif</td>
                    <td>@if ($Cliente->productos==null) Sin datos @else {{$Cliente->productos}} @endif</td>
                    <td>@if ($Cliente->tipo_negocio==null) Sin datos @else {{$Cliente->tipo_negocio}} @endif</td>
                    <td>@if ($Cliente->tipo_cliente==null) Sin datos @else {{$Cliente->tipo_cliente}} @endif</td>
                    <td>
                        {{-- <a href="#" onclick=""><i class="icon-truck2 clientesIcon"></i></a> --}}
                        <a onclick="editClient('{{$Cliente}}')"><i class="icon-edit2 clientesIcon"></i></a>
                        <a onclick="deleteClient('{{$Cliente->id}}')"><i class="icon-exclamation clientesIcon"></i></a>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </tfoot>
    </table>
</div>

<script>
    $(document).ready(function() {
        $('#example').DataTable();
        $("#clientesTable").css("display", "block")
    } );
</script>

<style>
    #clientesTable{
        padding: 20px;
    }
    .clientesIcon{
        font-size: 25px;
    }
</style>