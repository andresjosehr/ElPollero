@include("general");

<div class="app-content content container-fluid">
    <div class="content-wrapper">
        <div class="content-header row">
            <div class="content-header-left col-md-6 col-xs-12 mb-1">
                <h2 class="content-header-title">Seccion de email</h2>
            </div>
        </div>
        <div class="content-body">
            <!-- Basic Tables start -->
            <div class="row">
                <div class="col-xs-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">¡Envia emails a tus clientes!</h4>
                            <a class="heading-elements-toggle"><i class="icon-ellipsis font-medium-3"></i></a>
                            <div class="heading-elements">
                                
                            </div>
                        </div>

                        <div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<textarea id="editor">
				
				</textarea>
			</div>
		</div>
	</div>

   
<div id="clientesTable" style="display: none; overflow-x: auto;">
<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Destinatarios:</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($Clientes as $Cliente)
                <tr id="cliente_{{$Cliente->id}}">
                    <td>{{$Cliente->nombre}}</td>
                    <td>
                        <label class="display-inline-block custom-control custom-radio">
                            <input type="checkbox" name="customer1" value='{{$Cliente->correo}}' class="custom-control-input">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description ml-0" id='span_{{$Cliente->id}}'>Enviar</span>
                        </label>
                    </td>
                </tr>
            @endforeach
        </tfoot>
    </table>
</div>
<div class="col md 12">
    <button class="btn btn-primary btn-block crearMail_btn" onclick='enviarEmail()'>Enivar Email</button>
</div>
<div align="center">
    <div class="loading crearMail_loading" style="width: 40px;height: 40px"></div>
</div>

<style>
    
    /* neo theme for codemirror */

/* Color scheme */

.cm-s-neo.CodeMirror {
  background-color:#ffffff;
  color:#2e383c;
  line-height:1.4375;
}
.cm-s-neo .cm-comment {color:#75787b}
.cm-s-neo .cm-keyword, .cm-s-neo .cm-property {color:#1d75b3}
.cm-s-neo .cm-atom,.cm-s-neo .cm-number {color:#75438a}
.cm-s-neo .cm-node,.cm-s-neo .cm-tag {color:#9c3328}
.cm-s-neo .cm-string {color:#b35e14}
.cm-s-neo .cm-variable,.cm-s-neo .cm-qualifier {color:#047d65}


/* Editor styling */

.cm-s-neo pre {
  padding:0;
}

.cm-s-neo .CodeMirror-gutters {
  border:none;
  border-right:10px solid transparent;
  background-color:transparent;
}

.cm-s-neo .CodeMirror-linenumber {
  padding:0;
  color:#e0e2e5;
}

.cm-s-neo .CodeMirror-guttermarker { color: #1d75b3; }
.cm-s-neo .CodeMirror-guttermarker-subtle { color: #e0e2e5; }

    </style>

<script>

$(document).ready(function() {
    $('#example').DataTable();
    $("#clientesTable").css("display", "block")
    $("html").removeClass("loading")
    $("html").addClass("loaded")
    
    setTimeout(initSample(), 5000);

});
</script>

<style>
    #clientesTable{
        padding: 20px;
    }
    .clientesIcon{
        font-size: 25px;
    }
</style>
                    </div>
                </div>
            </div>
            <!-- Basic Tables end -->
        </div>
    </div>
</div>

@include("footer");


