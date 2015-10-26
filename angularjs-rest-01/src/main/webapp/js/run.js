parking.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function(event, current, previous, rejection) {
    $rootScope.loading = true;
  });
});

parking.run(function ($rootScope) {
  $rootScope.$on("$routeChangeSuccess", function(event, current, previous, rejection) {
    $rootScope.loading = false;
  });
});

parking.run(function ($rootScope, $window) {
  $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
    $window.location.href = "error.html";
  });
});

parking.run(function ($httpBackend) {
  $httpBackend.whenGET("/cars").respond([{id:"1", plate: "AAA9999", color: "Blue", entrance: new Date()}, {id:"2", plate: "AAA9988", color: "Blue", entrance: new Date()}]);
  $httpBackend.whenPOST("/cars").respond("OK!");
  $httpBackend.whenDELETE("/cars/1").respond("OK!");
  $httpBackend.whenGET("/cars2").respond([ {id:"1", plate: "AAA9999", color: "Blue", entrance: new Date()}, {id:"2", plate: "AAA9988", color: "Blue", entrance: new Date()}, 
      {id:"3", plate: "AAA9999", color: "Blue", entrance: new Date()}, {id:"4", plate: "AAA9988", color: "Blue", entrance: new Date()} ]);
  $httpBackend.whenGET("/cars/1").respond({id:"1", plate: "AAA9999", color: "Blue", entrance: new Date()});
  $httpBackend.whenGET("/cars/2").respond({id:"2", plate: "AAA9988", color: "Blue", entrance: new Date()});
  $httpBackend.whenGET(/./).passThrough();
});

parking.run(function ($rootScope) {
  $rootScope.appTitle = "[Packt] Parking";
});

parking.run(function (tickGenerator) {
  tickGenerator.start();
});