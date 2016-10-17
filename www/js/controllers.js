angular.module('starter.controllers', [])
.controller('MapCtrl', function($scope, $ionicLoading, $http) {
  $scope.myWelcome = 'aaa';
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

  };
})

.controller('DashCtrl', function($scope, Api) {
  $scope.data = null;
  Api.getApiData()
  .then(function(result) {
    $scope.data = result.data;
  });

  Api.getApiDataTest()
  .then(function(result) {
    $scope.linhas = result;
  });


  Api.getApiDataTest()
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});