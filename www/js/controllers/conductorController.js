app.controller('ConductorCtrl', function($scope,$location,$ionicPopup,ConductorService,EmpresaService,$ionicLoading, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform) {
  $scope.notifications = [];
  
  $scope.$on('$ionicView.enter',function(){
    $scope.mostrarAdvertencia = false;
  });
    
    $ionicLoading.show();
    
    $scope.conductor = {};
    $scope.listaEmpesas = [];

  EmpresaService.getAll().then(
    function(respuesta){
        $ionicLoading.hide();
      $scope.listaEmpesas = respuesta.data;
    },function(error){
        $ionicLoading.hide()
      console.log(error);
    });

  $scope.volver = function(){
    $location.path("/login");
  }

  $scope.registarConductor = function(){
      var config = null;
      if (ionic.Platform.isAndroid()) {
          config = {
              "senderID": "AIzaSyAZB5qS20uH0-W_btPvbLRx_D2qFHnNCt8" 
           };
      }else if (ionic.Platform.isIOS()) {
          config = {
              "badge": "true",
              "sound": "true",
              "alert": "true"
          }
      }
      
      $cordovaPush.register(config).then(function (result) {
            console.log("Register success " + result);

            $cordovaToast.showShortCenter('Registered for push notifications');
            $scope.registerDisabled=true;
            // ** NOTE: Android regid result comes back in the pushNotificationReceived, only iOS returned here
            if (ionic.Platform.isIOS()) {
                $scope.reg_id = result;
            }else{
                $scope.reg_id = result;
            }
        }, function (err) {
            console.log("Register error " + err)
        });
        
        
    $scope.conductor.rol = "CONDUCTOR";
    $scope.conductor.reg_id = $scope.reg_id;
    if($scope.conductor.contrasena == $scope.conductor.confirmarContrasena ){
      ConductorService.registrar($scope.conductor).then(
        function(respuesta){
          if(respuesta.statusText == "OK"){
            mostarAlert("Registro Exitoso", "El conductor se ha registrado satisfatoriamente");
            $location.path("/login");
          }
        }, function(error){
          mostarAlert("Fallo en el Registro", "No se ha podido realizar el registro intente mas tarde");
        });
    }else{
      $scope.mostrarAdvertencia = true;
    }
  }

  function mostarAlert(titulo,contenido){
    var alertPopup = $ionicPopup.alert({
      title: titulo,
      template: contenido
    });
    alertPopup.then(function (res) {
    });
  }
  
  function handleAndroid(notification) {
        // ** NOTE: ** You could add code for when app is in foreground or not, or coming from coldstart here too
        //             via the console fields as shown.
        console.log("In foreground " + notification.foreground  + " Coldstart " + notification.coldstart);
        if (notification.event == "registered") {
            $scope.regId = notification.regid;
        }
        else if (notification.event == "message") {
            $cordovaDialogs.alert(notification.message, "Push Notification Received");
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.message));
            })
        }
        else if (notification.event == "error")
            $cordovaDialogs.alert(notification.msg, "Push notification error event");
        else $cordovaDialogs.alert(notification.event, "Push notification handler - Unprocessed Event");
    }
    
    // IOS Notification Received Handler
    function handleIOS(notification) {
        // The app was already open but we'll still show the alert and sound the tone received this way. If you didn't check
        // for foreground here it would make a sound twice, once when received in background and upon opening it from clicking
        // the notification when this code runs (weird).
        if (notification.foreground == "1") {
            // Play custom audio if a sound specified.
            if (notification.sound) {
                var mediaSrc = $cordovaMedia.newMedia(notification.sound);
                mediaSrc.promise.then($cordovaMedia.play(mediaSrc.media));
            }

            if (notification.body && notification.messageFrom) {
                $cordovaDialogs.alert(notification.body, notification.messageFrom);
            }
            else $cordovaDialogs.alert(notification.alert, "Push Notification Received");

            if (notification.badge) {
                $cordovaPush.setBadgeNumber(notification.badge).then(function (result) {
                    console.log("Set badge success " + result)
                }, function (err) {
                    console.log("Set badge error " + err)
                });
            }
        }
        // Otherwise it was received in the background and reopened from the push notification. Badge is automatically cleared
        // in this case. You probably wouldn't be displaying anything at this point, this is here to show that you can process
        // the data in this situation.
        else {
            if (notification.body && notification.messageFrom) {
                $cordovaDialogs.alert(notification.body, "(RECEIVED WHEN APP IN BACKGROUND) " + notification.messageFrom);
            }
            else $cordovaDialogs.alert(notification.alert, "(RECEIVED WHEN APP IN BACKGROUND) Push Notification Received");
        }
    }
})
