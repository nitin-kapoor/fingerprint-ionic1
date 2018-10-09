angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform) {

  // $ionicPlatform.ready(function() {
   
  // });

  $scope.showAuth = function(){

    if (typeof window.Fingerprint != 'undefined') {
      window.Fingerprint.isAvailable(isAvailableSuccess, isAvailableError);

      function isAvailableSuccess() {
        console.log("Fingerprint available ")
        //Authenticate
        window.Fingerprint.show({
          clientId: "Fingerprint",
          clientSecret: "password",
          localizedReason : "Scan your fingerprint please"
        }, successCallback, errorCallback);
      }

      function isAvailableError(message) {
        console.error(message);
        alert("Touch ID is not enabled on device");
      }
    }

    function successCallback(){
      alert("Authentication successfull");
    }

    function errorCallback(err){
      alert("Authentication invalid " + err);
    }

  };

});
