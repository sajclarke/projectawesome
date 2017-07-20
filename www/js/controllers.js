angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $firebaseArray) {

  // $scope.parties = [
  //     {
  //       name:'DLP',
  //       leader:'Froonz'
  //     },{
  //       name:'BLP',
  //       leader:'Mottley'
  //     }
  // ];

  var ref = firebase.database().ref().child("politicians");
  // create a synchronized array
  $scope.parties = $firebaseArray(ref);

  console.log($scope.parties);

  $scope.addParty = function(value) {
    $scope.parties.$add({
      name: value,
      party:'BCC Crew'
    });
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
