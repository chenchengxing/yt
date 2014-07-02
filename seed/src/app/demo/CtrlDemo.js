define([
       'app'
       ], function ( app ) {
  app.registerController( 'CtrlDemo', [ '$scope', function ( $scope ) {
    // Org.get( { ip: 'xx.xx.xx.xx' }, function ( response ) {
    //   console.log( response );
    //   if ( response.code === 200 ) {
    //     $scope.orgs = response.data;
    //   }
    // });

    $scope.name = "Demo Name";
    $scope.test = "test";
    if ( true ) {
      var i = 0;
    }
    $scope[ 'test' ] = "hehe";
    $scope.tabs = [
      { title: "Dynamic Title 1", content: "Dynamic content 1" },
      { title: "Dynamic Title 2", content: "Dynamic content 2", disabled: true }
    ];

    $scope.alertMe = function() {
      setTimeout(function() {
        alert("You've selected the alert tab!");
      });
    };

    $scope.navType = 'pills';
  }]);
});