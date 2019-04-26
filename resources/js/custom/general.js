window.onload=function(){
      $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


	var parts = window.location.pathname.split('/');
	var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash

	if (urlPath=="public") {
		$(".escritorio_sidebar").addClass("active");
	}
	if (urlPath=="perfil") {
		$(".perfil_sidebar").addClass("active");
	}
}