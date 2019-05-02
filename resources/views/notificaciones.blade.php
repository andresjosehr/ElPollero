
        <li class="dropdown-menu-header">
          <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span><span class="notification-tag tag tag-default tag-danger float-xs-right m-0">{{count($Notificaciones)}} Nuevas</span></h6>
        </li>
        <div id="notificaciones"></div>
        @foreach ($Notificaciones as $Notificacion)
        <li class="list-group scrollable-container"><a href="javascript:void(0)" class="list-group-item">
            <div class="media">
              <div class="media-left valign-middle"><i class="icon-cart3 icon-bg-circle bg-cyan"></i></div>
              <div class="media-body">
                <h6 class="media-heading">Nueva notificacion!</h6>
                <p class="notification-text font-small-3 text-muted">{{$Notificacion->notificacion}}</p><small>
              </div>
        @endforeach
        </li>
        <li class="dropdown-menu-footer" style="display:none;"><a href="javascript:void(0)" class="dropdown-item text-muted text-xs-center">Read all notifications</a></li>


      <script>
      $(".noti_number").text("{{count($Notificaciones)}}")

      
      @if(count($NotificacionesNoVistas)==0)
        $(".noti_number").remove();
      @endif
      </script>