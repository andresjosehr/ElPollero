/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./custom/login.js */ "./resources/js/custom/login.js");

__webpack_require__(/*! ./custom/general.js */ "./resources/js/custom/general.js");

__webpack_require__(/*! ./custom/perfil.js */ "./resources/js/custom/perfil.js");

__webpack_require__(/*! ./custom/administradores.js */ "./resources/js/custom/administradores.js");

__webpack_require__(/*! ./custom/registro.js */ "./resources/js/custom/registro.js");

__webpack_require__(/*! ./custom/clientes.js */ "./resources/js/custom/clientes.js");

__webpack_require__(/*! ./custom/ordenes.js */ "./resources/js/custom/ordenes.js");

/***/ }),

/***/ "./resources/js/custom/administradores.js":
/*!************************************************!*\
  !*** ./resources/js/custom/administradores.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.InvarAdministrador = function () {
  $(".InivitacionForm small").remove();
  var val = 0;
  var Data = {};
  $(".InivitacionForm input").map(function (e, input) {
    $("#" + input.id).removeClass("border-danger");

    if (input.value == "") {
      $("#" + input.id).addClass("border-danger");
      $("#" + input.id).after("<small style='color:red'>Debes completar este campo</small>");
      val++;
    }

    Data[input.id] = input.value;
  });

  if (val == 0) {
    $(".inivitarAdministrador_btn").hide(200, function () {
      $(".invitarAdministrador_loading").show(200);
    });
    $.ajax({
      type: 'POST',
      url: url + "/usuarios",
      data: Data,
      success: function success(result) {
        $(".invitarAdministrador_loading").hide(200, function () {
          $(".inivitarAdministrador_btn").show(200);
        });

        if (!result.id) {
          for (var key in result) {
            $(".InivitacionForm #" + key).addClass("border-danger");
            $(".InivitacionForm #" + key).after("<small style='color:red'>" + result[key] + "</small>");
          }
        } else {
          $(".InivitacionForm input").map(function (e, input) {
            $(".InivitacionForm #" + input.id).val("");
          });
          $("#tbody_adminTemp").append('<tr id="usuario_' + result.id + '" style="display: none;">' + '<td>' + result.nombre + '</td>' + '<td>' + result.email + '</td>' + '<td>' + '<button type="button" class="btn mr-1 mb-1 btn-primary btn-sm"><i class="icon-mail2"></i></button>' + '<button type="button" class="btn mr-1 mb-1 btn-danger btn-sm"><i class="icon-cross"></i></button>' + '</td>' + '</tr>');
          $("#usuario_" + result.id).show("slow");
          swal("Listo!", "Invitación registrada y enviada exitosamente", "success");
        }
      }
    });
  }
};

window.EliminarAdministrado = function (id) {
  swal({
    title: "Espera!",
    text: "¿Estas seguro de eliminar la invitacion de este usuario?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    $("#usuario_" + id).hide("slow", function () {
      $(this).remove();
    });
    $.ajax({
      type: 'DELETE',
      url: url + "/usuarios/" + id,
      success: function success(result) {
        console.log(result);
      }
    });
  });
};

/***/ }),

/***/ "./resources/js/custom/clientes.js":
/*!*****************************************!*\
  !*** ./resources/js/custom/clientes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.guardarCliente = function () {
  $("small").remove();
  $("#crearCliente #nombre").removeClass("border-danger");
  $("#crearCliente #nombre").parent().css("margin-botton", "-7px");
  var Data = {};
  $("#crearCliente input, #crearCliente select").map(function () {
    Data[this.id] = this.value;
  });
  Data.tipo_cliente = $("#crearCliente #tipo_cliente:checked").val();
  var val = 0;

  if ($("#crearCliente #nombre").val() == "") {
    $("#crearCliente #nombre").after("<small style='color:red'>Debes completar este campo</small>");
    $("#crearCliente #nombre").addClass("border-danger");
    val++;
  }

  if (val == 0) {
    $(".crearCliente_btn").hide(200, function () {
      $(".crearCliente_loading").show(200);
    });
    $.ajax({
      type: 'POST',
      url: url + "/clientes",
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          $("#clientesLista-B").load(url + "/clientes/listaUpdate", {
            Data: "Ejemplo"
          });
          swal("¡Listo!", "Cliente registrado satisfactoriamente!", "success");
          $("#crearCliente input").map(function () {
            $(this).val("");
          });
        }

        $(".crearCliente_loading").hide(200, function () {
          $(".crearCliente_btn").show(200);
        });
      }
    });
  }
};

window.deleteClient = function (id) {
  swal("Espera!", "¿Estas seguro de eliminar este cliente? Todos los registro asociados a este cliente tambien seran eliminados", "warning").then(function (value) {
    $("#cliente_" + id).fadeOut("slow", function () {
      $("#cliente_" + id).remove();
      swal("¡Listo!", "Cliente Eliminado satisfactoriamente", "success");
    });
    $.ajax({
      type: 'DELETE',
      url: url + "/clientes/" + id,
      success: function success(result) {
        console.log(result);
      }
    });
  });
};

window.editClient = function (cliente) {
  cliente = JSON.parse(cliente);

  for (var key in cliente) {
    $("#editarCliente #" + key + "[type='text'], #editarCliente #" + key + "[type='email'], #editarCliente #" + key + "[type='select'], #editarCliente #" + key + "[type='hidden']").val(cliente[key]);

    if (key == "tipo_cliente") {
      $("#editarCliente input[value='Fisico personal']").removeAttr('checked');
      $("#editarCliente input[value='Juridico empresa']").removeAttr('checked');
      $("#editarCliente input[value='" + cliente[key] + "']").attr("checked", "checked");
    }
  }

  $("#editarCliente_btn").click();
};

window.updateCliente = function () {
  $("small").remove();
  $("#editarCliente #nombre").removeClass("border-danger");
  $("#editarCliente #nombre").parent().css("margin-botton", "-7px");
  var Data = {};
  $("#editarCliente input, #editarCliente select").map(function () {
    Data[this.id] = this.value;
  });
  Data.tipo_cliente = $("#editarCliente #tipo_cliente:checked").val();
  var val = 0;

  if ($("#editarCliente #nombre").val() == "") {
    $("#editarCliente #nombre").after("<small style='color:red'>Debes completar este campo</small>");
    $("#editarCliente #nombre").addClass("border-danger");
    val++;
  }

  if (val == 0) {
    $(".crearCliente_btn").hide(200, function () {
      $(".crearCliente_loading").show(200);
    });
    Data._method = "post";
    console.log(Data);
    $.ajax({
      type: 'PATCH',
      url: url + "/clientes/" + Data.id,
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          $("#clientesLista-B").load(url + "/clientes/listaUpdate", {
            Data: "Ejemplo"
          });
          swal("¡Listo!", "Cliente actualizado satisfactoriamente!", "success");
        }

        $(".crearCliente_loading").hide(200, function () {
          $(".crearCliente_btn").show(200);
        });
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/custom/general.js":
/*!****************************************!*\
  !*** ./resources/js/custom/general.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop(); // handle potential trailing slash

  if (urlPath == "public") {
    $(".escritorio_sidebar").addClass("active");
  }

  if (urlPath == "perfil") {
    $(".perfil_sidebar").addClass("active");
  }
};

/***/ }),

/***/ "./resources/js/custom/login.js":
/*!**************************************!*\
  !*** ./resources/js/custom/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.login_ingreso = function () {
  var val = 0;
  var Data = {};
  $("#LoginForm input").map(function (e, input) {
    if (input.value == "") {
      swal("¡Espera!", "Debes completar los datos de acceso antes de ingresar", "warning");
      val++;
    }

    Data[input.id] = input.value;
  });

  if (val == 0) {
    $(".btn_login").hide(200, function () {
      $(".login_loading").show(200);
    });
    $.ajax({
      type: 'POST',
      url: url + "/login",
      data: Data,
      success: function success(result) {
        $(".login_loading").hide(200, function () {
          $(".btn_login").show(200);
        });

        if (result == "Invalido") {
          swal("¡Error!", "Credenciales Invalidas", "error");
        }

        if (result == "Error") {
          swal("¡Error!", "Debe escribir credenciales validas", "error");
        }

        if (result == "Exito") {
          swal("¡Listo!", "Ingreso exitoso, ahora esta siendo redirigido al panel de control", "success");
          window.location.href = "../";
        }
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/custom/ordenes.js":
/*!****************************************!*\
  !*** ./resources/js/custom/ordenes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.guardarOrden = function () {
  var val = 0,
      Data = {};
  $("#crearOrdenPedido small").remove();
  $("#crearOrdenPedido input, #crearOrdenPedido select").map(function () {
    $("#crearOrdenPedido #" + this.id).removeClass("border-danger");

    if (this.id != "especificaciones") {
      if (this.value == "") {
        $("#crearOrdenPedido #" + this.id).after("<small style='color:red'>Debes completar este campo</small>");
        $("#crearOrdenPedido #" + this.id).addClass("border-danger");
        val++;
      }
    }

    Data[this.id] = this.value;
  });

  if (val == 0) {
    $.ajax({
      type: 'POST',
      url: url + "/ordenes",
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          // $("#clientesLista-B").load(url+"/clientes/listaUpdate", {Data: "Ejemplo"});
          swal("¡Listo!", "Orden registrado satisfactoriamente!", "success");
          $("#crearOrdenPedido input").map(function () {
            $(this).val("");
          });
        }

        $(".crearCliente_loading").hide(200, function () {
          $(".crearCliente_btn").show(200);
        });
      }
    });
  }
};

window.editOrder = function (orden) {
  orden = JSON.parse(orden);

  for (var key in orden) {
    $("#editarOrdenPedido #" + key).val(orden[key]);
  }

  $("#editarOrdenPedido").css("display", "block");
  $("#cerrarOrdenUpdate").css("display", "none");
  $("#editarOrden_btn").click();
};

window.updaterOrden = function () {
  var val = 0,
      Data = {};
  $("#editarOrdenPedido small").remove();
  $("#editarOrdenPedido input, #editarOrdenPedido select").map(function () {
    $("#editarOrdenPedido #" + this.id).removeClass("border-danger");

    if (this.id != "especificaciones") {
      if (this.value == "") {
        $("#editarOrdenPedido #" + this.id).after("<small style='color:red'>Debes completar este campo</small>");
        $("#editarOrdenPedido #" + this.id).addClass("border-danger");
        val++;
      }
    }

    Data[this.id] = this.value;
  });

  if (val == 0) {
    $(".editarOrden_btn").hide(200, function () {
      $(".editarOrden_loading").show(200);
    });
    Data._method = "POST";
    $.ajax({
      type: 'PUT',
      url: url + "/ordenes/" + Data.id,
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          $("#ordenesLista-B").load(url + "/ordenes/listaUpdate", {
            Data: "Ejemplo"
          });
          swal("¡Listo!", "Orden actualizada satisfactoriamente!", "success");
          $("#editarOrdenPedido input").map(function () {
            $(this).val("");
          });
        }

        $(".editarOrden_loading").hide(200, function () {
          $(".editarOrden_btn").show(200);
        });
      }
    });
  }
};

window.deleteOrder = function (id) {
  swal("Espera!", "¿Estas seguro de eliminar esta orden?", "warning").then(function (value) {
    $("#orden_" + id).fadeOut("slow", function () {
      $("#orden_" + id).remove();
      swal("¡Listo!", "Orden Eliminada satisfactoriamente", "success");
    });
    $.ajax({
      type: 'DELETE',
      url: url + "/ordenes/" + id,
      success: function success(result) {
        console.log(result);
      }
    });
  });
};

window.cerrarOrder = function (id) {
  $("#cerrarOrdenUpdate #id").val(id);
  $("#editarOrdenPedido").css("display", "none");
  $("#cerrarOrdenUpdate").css("display", "block");
  $("#editarOrden_btn").click();
};

window.cerrrarOrdenUpdate = function () {
  var val = 0,
      Data = {};
  $("#cerrarOrdenUpdate small").remove();
  $("#eeeeeeeeeeaaaaaaaa input, #eeeeeeeeeeaaaaaaaa select").map(function () {
    $("#cerrarOrdenUpdate #" + this.id).removeClass("border-danger");

    if (this.value == "") {
      console.log(this.id);
      console.log(this.value);
      $("#cerrarOrdenUpdate #" + this.id).after("<small style='color:red'>Debes completar este campo</small>");
      $("#cerrarOrdenUpdate #" + this.id).addClass("border-danger");
      val++;
    }

    Data[this.id] = this.value;
  });

  if (val == 0) {
    $(".editarOrden_btn").hide(200, function () {
      $(".editarOrden_loading").show(200);
    });
    Data._method = "POST";
    Data.estado = "Cerrada";
    $.ajax({
      type: 'PUT',
      url: url + "/ordenes/" + Data.id,
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          $("#ordenesLista-B").load(url + "/ordenes/listaUpdate", {
            Data: "Ejemplo"
          });
          $("#ordenesLista-B").load(url + "/ordenes/listaUpdate", {
            Data: "Ejemplo"
          });
          swal("¡Listo!", "Orden actualizada satisfactoriamente!", "success");
          $("#editarOrdenPedido input").map(function () {
            $(this).val("");
          });
        }

        $(".editarOrden_loading").hide(200, function () {
          $(".editarOrden_btn").show(200);
        });
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/custom/perfil.js":
/*!***************************************!*\
  !*** ./resources/js/custom/perfil.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.ActualizarPerfil = function () {
  $(".PerfilForm small").remove();
  var val = 0;
  var Data = {};
  $(".PerfilForm input").map(function (e, input) {
    $("#" + input.id).removeClass("border-danger");

    if (input.value == "") {
      $("#" + input.id).addClass("border-danger");
      $("#" + input.id).after("<small style='color:red'>Debes completar este campo</small>");
      val++;
    }

    Data[input.id] = input.value;
  });

  if (val == 0) {
    $(".actualizarPerfil_btn").hide(200, function () {
      $(".actualizarPerfil_loading").show(200);
    });
    Data["_method"] = "POST";
    $.ajax({
      type: 'PATCH',
      url: url + "/usuarios/0",
      data: Data,
      success: function success(result) {
        $(".actualizarPerfil_loading").hide(200, function () {
          $(".actualizarPerfil_btn").show(200);
        });

        if (result != "Exito") {
          for (var key in result) {
            $(".PerfilForm #" + key).addClass("border-danger");
            $(".PerfilForm #" + key).after("<small style='color:red'>" + result[key] + "</small>");
          }
        } else {
          swal("Listo!", "Datos actualizados exitosamente", "success");
        }
      }
    });
  }
};

window.ActualizarPassword = function () {
  $(".PasswordForm small").remove();
  var val = 0;
  var Data = {};
  $(".PasswordForm input").map(function (e, input) {
    $(".PasswordForm #" + input.id).removeClass("border-danger");

    if (input.value == "") {
      $(".PasswordForm #" + input.id).addClass("border-danger");
      $(".PasswordForm #" + input.id).after("<small style='color:red'>Debes completar este campo</small>");
      val++;
    }

    Data[input.id] = input.value;
  });

  if (Data.password != Data.password2 && val == 0) {
    $(".PasswordForm #password").addClass("border-danger");
    $(".PasswordForm #password2").addClass("border-danger");
    $(".PasswordForm #password").after("<small style='color:red'>Las contraseñas no coinciden</small>");
    $(".PasswordForm #password2").after("<small style='color:red'>Las contraseñas no coinciden</small>");
    val++;
  }

  if (val == 0) {
    $(".actualizarPasswordB_btn").hide(200, function () {
      $(".actualizarPassword_loader").show(200);
    });
    Data["_method"] = "POST";
    Data["pass"] = true;
    $.ajax({
      type: 'PATCH',
      url: url + "/usuarios/0",
      data: Data,
      success: function success(result) {
        $(".actualizarPassword_loader").hide(200, function () {
          $(".actualizarPasswordB_btn").show(200);
        });
        console.log(result);

        if (result != "Exito") {
          swal("Error", "Error interno, contacte al administrador del sistema", "error");
        } else {
          $(".PasswordForm input").map(function (e, input) {
            $(".PasswordForm #" + input.id).val("");
          });
          swal("Listo!", "Datos actualizados exitosamente", "success");
        }
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/custom/registro.js":
/*!*****************************************!*\
  !*** ./resources/js/custom/registro.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.RegistroAdmin = function () {
  $("#RegistroAdminForm small").remove();
  var val = 0;
  var Data = {};
  $("#RegistroAdminForm input").map(function (e, input) {
    $("#" + input.id).removeClass("border-danger");

    if (input.value == "") {
      $("#RegistroAdminForm #" + input.id).addClass("border-danger");
      $("#RegistroAdminForm #" + input.id).after("<small style='color:red'>Debes completar este campo</small>");
      val++;
    }

    Data[input.id] = input.value;
  });

  if (val != 0) {
    swal("¡Espera!", "Debes completar todos los datos", "warning");
  } else {
    if ($("#RegistroAdminForm #password").val() != $("#RegistroAdminForm #password2").val()) {
      swal("¡Espera!", "Las contraseñas no coinciden", "warning");
      val++;
    } else {
      var parts = window.location.pathname.split('/');
      Data.confirmando_registro = parts.pop() || parts.pop(); // handle potential trailing slash

      $.ajax({
        type: 'POST',
        url: url + "/usuarios/createAdmin",
        data: Data,
        success: function success(result) {
          if (result == "Exito") {
            swal("¡Listo!", "Registro Exitoso, ahora estas siendo redirigido", "success");
            window.location.href = "../../";
          }
        }
      });
    }
  }
};

window.RegistroVendedor = function () {
  $("#RegistroSellerForm small").remove();
  var val = 0;
  var Data = {};
  $("#RegistroSellerForm input").map(function (e, input) {
    $("#" + input.id).removeClass("border-danger");

    if (input.value == "") {
      $("#RegistroSellerForm #" + input.id).addClass("border-danger");
      $("#RegistroSellerForm #" + input.id).after("<small style='color:red'>Debes completar este campo</small>");
      val++;
    }

    Data[input.id] = input.value;
  });

  if (val != 0) {
    swal("¡Espera!", "Debes completar todos los datos", "warning");
  } else {
    if ($("#RegistroSellerForm #password").val() != $("#RegistroSellerForm #password2").val()) {
      swal("¡Espera!", "Las contraseñas no coinciden", "warning");
      val++;
    } else {
      var parts = window.location.pathname.split('/');
      Data.confirmando_registro = parts.pop() || parts.pop(); // handle potential trailing slash

      Data.rol = 2;
      $.ajax({
        type: 'POST',
        url: url + "/usuarios/createSeller",
        data: Data,
        success: function success(result) {
          console.log(result);

          if (result == "Exito") {
            swal("¡Listo!", "Registro Exitoso, ahora estas siendo redirigido", "success");
            window.location.href = "../";
          } else {
            for (var key in result) {
              $("#RegistroSellerForm #" + key).addClass("border-danger");
              $("#RegistroSellerForm #" + key).after("<small style='color:red'>" + result[key] + "</small>");
            }
          }
        }
      });
    }
  }
};

window.resetearPass = function () {
  $("small").remove();
  $("#email").removeClass("border-danger");
  var val = 0;

  if ($("#email").val() == "") {
    $("#email").addClass("border-danger");
    $("#email").after("<small style='color:red'>Debes introducir tu correo</small>");
    val++;
  }

  if (val == 0) {
    $(".reset_btn").hide("fast", function () {
      $(".reset_loading").show("fast");
    });
    var Data = {};
    Data.email = $("#email").val();
    $.ajax({
      type: 'POST',
      url: url + "/usuarios/resetPass",
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          swal("¡Listo!", "Hemos enviado un email a tu correo para el cambio de contraseña", "success");
        } else {
          for (var key in result) {
            $("#" + key).addClass("border-danger");
            $("#" + key).after("<small style='color:red'>" + result[key] + "</small>");
          }
        }

        $(".reset_loading").hide("fast", function () {
          $(".reset_btn").show("fast");
        });
      }
    });
  }
};

window.resetearPass2 = function () {
  $("small").remove();
  var val = 0;
  var Data = {};
  $("#ResetForm input").map(function (e, input) {
    $("#" + input.id).removeClass("border-danger");

    if (input.value == "") {
      $("#ResetForm #" + input.id).addClass("border-danger");
      $("#ResetForm #" + input.id).after("<small style='color:red'>Debes completar este campo</small>");
      val++;
    }

    Data[input.id] = input.value;
  });

  if ($("#ResetForm #password").val() != $("#ResetForm #password2").val()) {
    $("#ResetForm #password").addClass("border-danger");
    $("#ResetForm #password").after("<small style='color:red'>Las contraseñas no coinciden</small>");
    $("#ResetForm #password2").addClass("border-danger");
    $("#ResetForm #password2").after("<small style='color:red'>Las contraseñas no coinciden</small>");
    val++;
  }

  if (val == 0) {
    $(".reset_btn").hide("fast", function () {
      $(".reset_loading").show("fast");
    });
    var parts = window.location.pathname.split('/');
    var urlPath = parts.pop() || parts.pop(); // handle potential trailing slash

    $.ajax({
      type: 'POST',
      url: url + "/resetear-contrasena/" + urlPath,
      data: Data,
      success: function success(result) {
        if (result == "Exito") {
          swal("¡Listo!", "Contraseña Actualizada exitosamente", "success");
          window.location.href = "../";
        } else {
          for (var key in result) {
            $("#" + key).addClass("border-danger");
            $("#" + key).after("<small style='color:red'>" + result[key] + "</small>");
          }
        }

        $(".reset_loading").hide("fast", function () {
          $(".reset_btn").show("fast");
        });
      }
    });
  }
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\Workana\ElPollero\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\Workana\ElPollero\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });