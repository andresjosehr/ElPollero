

window.initSample=function(){

    var parts = window.location.pathname.split('/');
	var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash

	if (urlPath=="email-clientes") {

    /**
* Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

window.initSample = ( function() {
var wysiwygareaAvailable = isWysiwygareaAvailable(),
    isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

return function() {
    var editorElement = CKEDITOR.document.getById( 'editor' );

    // :(((
    if ( isBBCodeBuiltIn ) {
        editorElement.setHtml(
            'Hello world!\n\n' +
            'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
        );
    }

    // Depending on the wysiwygarea plugin availability initialize classic or inline editor.
    if ( wysiwygareaAvailable ) {
        CKEDITOR.replace( 'editor' );
    } else {
        editorElement.setAttribute( 'contenteditable', 'true' );
        CKEDITOR.inline( 'editor' );

        // TODO we can consider displaying some info box that
        // without wysiwygarea the classic editor may not work.
    }
};

function isWysiwygareaAvailable() {
    // If in development mode, then the wysiwygarea must be available.
    // Split REV into two strings so builder does not replace it :D.
    if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
        return true;
    }

    return !!CKEDITOR.plugins.get( 'wysiwygarea' );
}

})();

}

initSample()
}

window.enviarEmail=function(){

    
        var Data={};
        var i=0;
        $("input:checkbox").map(function(){
            if($(this).is(':checked')){
                Data[i] = $(this).val();
                i++;
            } 
        });

        Data.content=CKEDITOR.instances.editor.getData()
        if(i==0){
            swal("Espera!", "Debes seleccionar al menos un destinatario", "warning")
        } else{
            if(Data.content==""){
                swal("Espera!", "Tu email debe tener un mensaje", "warning")
            } else{
                $(".crearMail_btn").hide("slow", function(){
                    $(".crearMail_loading").show("slow")
                })
                $.ajax({
                    type: 'POST',
                    url: url+"/email-clientes",
                    data: Data,
                    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                    success: function(result){
                        console.log(result)
                       if(result=="Exito")
                       $(".crearMail_loading").hide("slow", function(){
                            $(".crearMail_btn").show("slow")
                        })
                        swal("Listo!", "Los email han sido enviados exitosamente", "success");
                    }
                });

            }

        }

        
        
    
    
}


$(document).ready(function(){
    $("html").removeClass("loading")
    $("html").removeClass("loaded")
})