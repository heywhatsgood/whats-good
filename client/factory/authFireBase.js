angular.module('whatsGood')
  .factory('Auth', ['$firebaseAuth', 
    function($firebaseAuth) {
      return $firebaseAuth();
    }
  ]);
