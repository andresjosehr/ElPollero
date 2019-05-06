


<div id="accordion">
  <div class="card">
    <div class="card-header" style="background: #ff444459" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" id="OredenesAbiertas" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Ordenes Abiertas
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
       <script>
        if ($("#ordenesLista-B #ordenesTable").attr("id")=="ordenesTable") {
            $("#ordenesLista-A").remove();
        } else{
        }
</script>
<div id="ordenesTable" style="display: none;  overflow-x: auto;">
<table id="example3" class="display" style="width:100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Fecha de Entrega</th>
                <th>Especificaciones</th>
                <th>Cliente</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($Ordenes as $Orden)
                @if ($Orden->estado=="Abierta")
                    <tr id="orden_{{$Orden->id}}">
                        <td>{{$Orden->id}}</td>
                        <td>{{$Orden->productos}}</td>
                        <td>{{$Orden->cantidad}} {{$Orden->tipo_cantidad}}</td>
                        <td>{{$Orden->fecha_hora_entrega}}</td>
                        <td>@if ($Orden->especificaciones==null) Sin datos @else {{$Orden->especificaciones}} @endif</td>
                        <td>{{$Orden->Clientes->nombre}}</td>
                        <td>
                            <a onclick="cerrarOrder('{{$Orden->id}}')"><i class="icon-cash clientesIcon"></i></a>
                            <a onclick="editOrder('{{$Orden}}')"><i class="icon-edit2 clientesIcon"></i></a>
                            <a onclick="deleteOrder('{{$Orden->id}}')"><i class="icon-exclamation clientesIcon"></i></a>
                        </td>
                    </tr>
                @endif
            @endforeach
        </tfoot>
    </table>
</div>

<script>
    $(document).ready(function() {
        $('#example3').DataTable();
        $("#ordenesTable").css("display", "block")
    } );
</script>

<style>
    #ordenesTable{
        padding: 20px;
    }
    .clientesIcon{
        font-size: 25px;
    }
</style>




      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" style="background: #ff444459" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Lista para despacho
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        

<script>
        if ($("#ordenesLista-B #ordenesTable").attr("id")=="ordenesCerradasTable") {
            $("#ordenesLista-A").remove();
        } else{
        }
</script>
<div id="ordenesCerradasTable" style="display: none; overflow-x: auto;">
<table id="example2" class="display" style="width:100%">
        <thead>
            <tr>
                <th>#</th>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Fecha de Entrega</th>
                <th>Especificaciones</th>
                <th>Fecha Entregada</th>
                <th>Pago</th>
                <th>Factura #</th>
                <th>Receptor</th>
                <th>Cliente</th>
                <th>Satisfaccion</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($Ordenes as $Orden)
                @if ($Orden->estado=="Cerrada")
                    <tr id="orden_{{$Orden->id}}">
                        <td>{{$Orden->id}}</td>
                        <td>{{$Orden->productos}}</td>
                        <td>{{$Orden->cantidad}} {{$Orden->tipo_cantidad}}</td>
                        <td>{{$Orden->fecha_hora_entrega}}</td>
                        <td>@if ($Orden->especificaciones==null) Sin datos @else {{$Orden->especificaciones}} @endif</td>
                        <td>{{$Orden->fecha_hora_entregada}}</td>
                        <td>{{$Orden->forma_pago}}</td>
                        <td>{{$Orden->numero_factura}}</td>
                        <td>{{$Orden->receptor}}</td>
                        <td>{{$Orden->Clientes->nombre}}</td>
                        <td>@if ($Orden->satisfaccion==null) Sin datos @else {{$Orden->satisfaccion}} @endif</td>
                        <td>
                            <a onclick="deleteOrder('{{$Orden->id}}')"><i class="icon-exclamation clientesIcon"></i></a>
                        </td>
                    </tr>
                @endif
            @endforeach
    </table>
</div>

<script>
    $(document).ready(function() {
        $('#example2').DataTable();
        $("#ordenesCerradasTable").css("display", "block")
        $("#OredenesAbiertas").click()
        $('.bd-example-modal-lg').modal('hide')
        $(".modal-backdrop").css("display", "none")
        $("body").css("overflow", "auto")
    } );
</script>

<style>
    #ordenesCerradasTable, #accordion{
        padding: 20px;
    }
    .clientesIcon{
        font-size: 25px;
    }
</style>
      </div>
    </div>
  </div>
</div>
</div>

@include("ordenes.editar")




