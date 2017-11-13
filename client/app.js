angular.module('whatsGood', ['ngMaterial', 'firebase', 'ngCookies'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('blue-grey')
      .accentPalette('deep-purple')
      .dark();
    // $mdThemingProvider.enableBrowserColor({
    //   theme: 'altTheme', // Default is 'default'
    //   palette: 'accent', // Default is 'primary', any basic material palette and extended palettes are available
    //   hue: '200' // Default is '800'
    // });
    $mdThemingProvider.setDefaultTheme('altTheme');
  })
  .component('myApp', {
    bindings: {
    },
    controller: function($mdDialog, $http, $mdSidenav, $cookies) {
      const ctrl = this;

      this.currentNavItem = 'home';
      this.isValidUser = true;
      this.user = {};
      //currentItinerary is array of selected items from 'search' page
      this.currentItinerary = {
        items: [],
        itineraryName: 'Name Me Please'
      };
      //this.allItineraries is all user itinerary names and Ids
      
      this.topRated=[];

      //collapse this
      this.openLoginDialog = (event, loginType) => {
        var loginController = function($mdDialog, $http, Auth, $cookies) {
          const lCtrl = this;
          this.loginType = loginType;
          this.email = '';
          this.displayName = '';
          this.passwordError = '';
          this.firebaseId = '';
          this.user = {};
          this.showProgress = false;

          lCtrl.handleSocialLogin = (website) => {
            lCtrl.showProgress = true;
            Auth.$signInWithPopup(website)
              .then(function(result) {
                console.log('Signed in ' + website + ' user as:', result.user);
                lCtrl.user.firebaseId = result.user.uid;
                lCtrl.user.accountInfo = result.user;
                lCtrl.user.displayName = result.user.displayName;
                $http({
                  method: 'POST',
                  url: '/login',
                  data: lCtrl.user
                }).then(function(userData) {
                  //server should send back list data
                  //userData = {user, wasCreated}
                  console.log('server confirmed ' + website + ' login', userData);
                  lCtrl.answer(userData.data);
                  lCtrl.showProgress = false;
                }, function(err) {
                  console.log(website + ' auth on localhost failed', err);
                });
                lCtrl.answer(lCtrl.user);
              }).catch(function(error) {
                console.error('Authentication failed:', error);
              });
          };

          lCtrl.handleFacebookLogin = () => {
            lCtrl.showProgress = true;            
            lCtrl.handleSocialLogin('facebook');
          };

          lCtrl.handleGoogleLogin = () => {
            lCtrl.showProgress = true;            
            lCtrl.handleSocialLogin('google');            
          };

          lCtrl.createUser = (callback) => {
            Auth.$createUserWithEmailAndPassword(lCtrl.email, lCtrl.password)
              .then(function(firebaseUser) {
                console.log('user created ', firebaseUser);
                callback(true);
              }).catch(function(error) {
                console.log('error creating', error);
                callback(false);
              });
          };
          lCtrl.loginUser = (callback) => {
            Auth.$signInWithEmailAndPassword(lCtrl.email, lCtrl.password)
              .then(function(firebaseUser) {
                lCtrl.user.firebaseId = firebaseUser.uid;
                lCtrl.user.accountInfo = firebaseUser;
                lCtrl.user.displayName = lCtrl.displayName;
                console.log('user logged in ', lCtrl.user.displayName);
                callback(lCtrl.user);
              }).catch(function(error) {
                callback(false);
                console.log('login error ', error);
              });
          };

          lCtrl.handleLoginButton = (displayName, password) => {
            if (lCtrl.loginType === 'signup') {
              //create new user and switch back to login
              lCtrl.createUser(function(isCreated) {
                if (isCreated) {
                  lCtrl.password = '';
                  lCtrl.loginType = 'login';
                } else {
                  //user creation failed

                }
              });
            } else {
              //log in new user
              lCtrl.loginUser(function(signedInUser) {
                if (signedInUser) {
                  lCtrl.showProgress = true;
                  console.log('passing signin data to mdialog hide', signedInUser);
                  $http({
                    method: 'POST',
                    url: '/login',
                    data: signedInUser
                  }).then(function(userData) {
                    //server should send back list data
                    //userData = {user, wasCreated}
                    console.log('server confirmed login', userData);
                    lCtrl.answer(userData.data);
                    lCtrl.showProgress = false;                    
                  }, function(err) {
                    console.log('user auth on localhost failed', err);
                  });
                } else {
                  //user login failed

                }
              });

            }
          };

          lCtrl.hide = function () {
            console.log('hide');
            $mdDialog.hide();
          };

          lCtrl.cancel = function () {
            console.log('cancel');

            $mdDialog.cancel();
          };

          lCtrl.answer = function (userData) {
            console.log('Succesfully signed in: ', userData);
            //store user cookie
            var user = {
              displayName: userData.displayName,
              firebaseId: userData.firebaseId,
            };
            $cookies.putObject('myWhatsGoodUser', user);
            $mdDialog.hide(userData);
          };
        };

        //shows the dialog directive with the above controller
        $mdDialog.show({
          controller: loginController,
          controllerAs: 'login',
          template: `
            <md-dialog flex="40" flex-gt-md="30" aria-label="User Login">
              <form name="loginForm" ng-cloak>
                <md-toolbar>
                  <div class="md-toolbar-tools">
                    <h2 ng-if="login.loginType === 'login'">Please Login</h2>
                    <h2 ng-if="login.loginType === 'signup'">Sign Up!</h2>
                    <span flex></span>
                    <md-button class="md-icon-button" ng-click="login.cancel()">
                      <md-icon aria-label="Close dialog">&#xE14C</md-icon>
                    </md-button>
                  </div>
                </md-toolbar>

                <md-dialog-content>
                  <md-content layout="column" layout-align="center center">
                    <md-input-container>
                      <label>Email</label>
                      <input flex="100" md-autofocus type="email" ng-model="login.email" name="email" required>
                    </md-input-container>
                    <md-input-container>
                      <label>Display Name</label>
                      <input flex="100" ng-model="login.displayName" name="displayName" required>
                    </md-input-container>
                    <md-input-container>
                      <label>Password</label>
                      <input flex="100" type="password" ng-model="login.password" name="password" required>
                    </md-input-container>
                    <md-input-container ng-if="login.loginType === 'signup'">
                      <label>Password</label>
                      <input flex="100" type="password" ng-model="login.password2" name="password2" required>
                    </md-input-container>
                  </md-content>
                </md-dialog-content>
                <md-progress-linear class="md-accent" ng-if="login.showProgress" md-mode="indeterminate"></md-progress-linear>
                <md-dialog-actions layout="row">
                  <div layout="column" flex="100">
                    <div layout="row" layout-align="space-around center">                
                      <md-button ng-click="login.handleLoginButton(login.displayName, login.password)">
                        Login
                      </md-button>
                      <md-button ng-if="login.loginType === 'login'" ng-click="login.loginType='signup'">
                        Sign-Up
                      </md-button>
                      <md-button ng-click="login.cancel()">
                        Cancel
                      </md-button>
                    </div>
                    <div layout="row" layout-align="center center">
                      <md-button class="md-icon-button logo" ng-click="login.handleSocialLogin('google')" aria-label="googleSubmit">
                        <img class="logo-image" style="width:100%; height:100%;" src="./images/social-svg/google.png">
                      </md-button>
                      <md-button class="md-icon-button logo" ng-click="login.handleSocialLogin('github')" aria-label="githubSubmit">
                        <img class="logo-image" style="width:100%; height:100%;" src="./images/social-svg/github.png">
                      </md-button>
                      <md-button class="md-icon-button logo" ng-click="login.handleSocialLogin('facebook')" aria-label="facebookSubmit">
                        <img class="logo-image" style="width:100%; height:100%;" src="./images/social-svg/facebook.png">
                      </md-button>
                    </div>
                  </div>
                </md-dialog-actions>
              </form>
            </md-dialog>
          `,
          targetEvent: event,
          parent: angular.element(document.body),
          clickOutsideToClose: true,
        })
          .then(function (user) {
            console.log('answered', user);
            ctrl.user = user;
            ctrl.displayName = user.displayName;
            ctrl.isValidUser = true;
            ctrl.allItineraries = user.allItineraries;
          }, function () {
            console.log('canceled');
          });
      };

      this.saveUserItinerary = () => {
        const userCookie = $cookies.getObject('myWhatsGoodUser');
        ctrl.currentItinerary.firebaseId = userCookie.firebaseId;
        console.log(ctrl.currentItinerary, userCookie.firebaseId);
        // ctrl.currentItinerary.itineraryName = ctrl.
        // ctrl.currentItinerary = {items:[item{type:'',...}], itineraryName}
        $http({
          method: 'POST',
          url: '/itinerary',
          data: ctrl.currentItinerary
        })
          .then(function(response) {
            console.log('saved user itinerary');
          }, function(error) {
            console.log('error posting user itin', error);
          });
      };

      this.getAllUserItineraries = () => {
        $http({
          method: 'GET',
          url: '/itineraries',
          params: ctrl.user
        })
          .then(function(response) {
            console.log('got', ctrl.user, ' itinerary', response);
            ctrl.allItineraries = response.data;
          }, function(error) {
            console.log('error posting user itin', error);
          });
      };

      this.handleSearchItemClick = ({item}) => {
        console.log('clicked', item);
        ctrl.currentItinerary.items.push(item);
      };

      this.handleItinerarySearch = ({form}) => {
        console.log('made it', form)
        console.log(
          form.location,
          form.keyword,
          form.userState
        );
        $http({
          method: 'POST',
          url: '/search',
          data: {
            location: form.location,
            search: form.keyword,
            type: form.userState,
          }
        }).then((result) => {
          if (form.userState === 'Food') {
            ctrl.foodResults = result.data.businesses
            console.log(ctrl.foodResults)
          }
          if (form.userState === 'Event') {
            ctrl.eventResults = result.data
            console.log(ctrl.eventResults)
          }
        })
      };

      this.handleItineraryChange = () => {
        console.log(this.selectedItinerary);
        $http({
          method: 'GET',
          url: '/itinerary',
          params: {id: ctrl.selectedItinerary}
        })
          .then(function(response) {
            console.log('got', ctrl.user, ' itinerary', response);
            //set currentItinerary object to the one from the server
            ctrl.currentItinerary = response.data[0]; // would be dope af if this 'just works'
          }, function(error) {
            console.log('error posting user itin', error);
          });
      };

      this.topRatedRestaurants = () => {
        $http({
          method: 'POST',
          url: '/search',
          data: {
            location: {
              city: 'santa monica'
            },
            search: 'restaurants',
            type: 'Food',
          }
        }).then((result)=>{
          ctrl.topRated = result.data.businesses;
          console.log('at top rated restaurants', ctrl.topRated)
          
        }, (err)=>{
          console.log('toprated restaurants', err)
        })

      }

      this.logout = () => {
        this.isValidUser = false;
        this.user = {};
        this.password = '';
        $cookies.remove('myWhatsGoodUser');
      };

      this.$onInit = () => {
        //init firebase server
        ctrl.topRatedRestaurants();
        var config = {
          apiKey: 'AIzaSyDG1EUoj_7D2F7gUCqEdnu8TsxX4FNXOJw',
          authDomain: 'whats-good-21ec5.firebaseapp.com',
          databaseURL: 'https://whats-good-21ec5.firebaseio.com',
          projectId: 'whats-good-21ec5',
          storageBucket: 'whats-good-21ec5.appspot.com',
          messagingSenderId: '602796983600'
        };
        firebase.initializeApp(config);

        const userCookie = $cookies.getObject('myWhatsGoodUser');
        console.log('loaded user cookie', userCookie);
        if (userCookie) {
          $http({
            method: 'GET',
            url: '/login',
            params: userCookie
          }).then(function(userExists) {
            //server should send back list data
            console.log(userExists.data);
            if (userExists.data) {
              ctrl.isValidUser = true;
              ctrl.displayName = userCookie.displayName;
              ctrl.user = userCookie;
              ctrl.allItineraries = userExists.data.allItineraries;
              ctrl.selectedItinerary = '' + ctrl.allItineraries[0].id;
              console.log('logged in ', ctrl.user);
            } else {
              console.log('user doesn\'t exist on server');
              $cookies.remove('myWhatsGoodUser');
            }
            
          }, function(err) {
            console.log('user auth on localhost failed', err);
          });
        }
      };

      this.goto = (page) => {
        console.log(page);
        ctrl.currentNavItem = page;
      };
    },
    template: `
    <div layout="row">
      <div layout="column" layout-fill>
        <md-toolbar>
          <div class="md-toolbar-tools">
            <span class="md-flex">What's Good?</span>
          </div>
        </md-toolbar>

        <!-- collapse divs here -->
        <md-nav-bar md-selected-nav-item="$ctrl.currentNavItem" nav-bar-aria-label="navigation links">
          <md-nav-item md-nav-click="$ctrl.goto('home')" name="home">
            Home
          </md-nav-item>
          <md-nav-item md-nav-click="$ctrl.goto('search')" name="search">
            Search
          </md-nav-item>
          <md-nav-item md-nav-click="$ctrl.goto('itinerary')" name="itinerary">
            Itinerary
          </md-nav-item>
          <span flex></span>
          <div ng-if="!$ctrl.isValidUser">
            <md-button md-no-ink class="md-primary" ng-click="$ctrl.openLoginDialog($event, 'login')">
              Login
            </md-button>
            <md-button md-no-ink class="md-primary" ng-click="$ctrl.openLoginDialog($event, 'signup')">
              Sign Up
            </md-button>
          </div>
          <div ng-if="$ctrl.isValidUser">
            <md-button md-no-ink class="md-primary" ng-click="$ctrl.goto('home')" name="userProfile">
              Hello, {{$ctrl.displayName}}
            </md-button>
            <md-button class="md-icon-button" ng-click="$ctrl.goto('home')" aria-label="More">
              <md-icon style="color:#673AB7;font:bold;">&#xE853;</md-icon>
            </md-button>
            <md-button class="md-icon-button" ng-click="$ctrl.logout()" aria-label="More">
              <md-icon style="color:#673AB7;font:bold;">&#xE879;</md-icon>
            </md-button>
          </div>
        </md-nav-bar>

          <!-- itinerary sidebar -->
        <section layout="row" flex>
          <md-sidenav
            class="md-sidenav-left"
            md-component-id="left"
            md-is-locked-open="$mdMedia('gt-sm')"
            md-whiteframe="4"
            ng-if="$ctrl.currentNavItem !== 'home'">

            <md-toolbar>
              <div style="position:relative;">
                <img flex="100" ng-src="https://i.pinimg.com/originals/1f/62/f0/1f62f042f2381d36e09a58949e94562f.jpg">
                <div style="position:absolute; bottom:0px; left:0px; height:auto; width:100%; text-align:center; font-size:1em; padding: 10px 0px; background-color:rgba(0,0,0,0.6)">
                  <input ng-if="$ctrl.currentNavItem === 'search'" style="background-color:rgba(0,0,0,0); border:none; color:white; width:95%; text-align:center" ng-model="$ctrl.currentItinerary.itineraryName">
                  <select ng-if="$ctrl.currentNavItem === 'itinerary'" ng-change="$ctrl.handleItineraryChange()" ng-model="$ctrl.selectedItinerary" style="background-color:rgba(0,0,0,0); border:none; color:white; width:95%; text-align:center">
                    <option ng-repeat="itinerary in $ctrl.allItineraries" value="{{itinerary.id}}" style="background-color:black;">
                      {{itinerary.itineraryName}}
                    </option>
                  </select>
                </div>
              </div>
            </md-toolbar>
            <md-content layout-padding>
              <!-- ng-if for each nav page -->
              <div>
                <div ng-repeat="item in $ctrl.currentItinerary.items">
                <!-- ng-if item.type = event -->
                  <div ng-if="item.type='Event'">
                    <h4>{{item.title[0]}}</h4>
                    <h5>{{item.city_name[0]}}</h5>
                  </div>
                  <div ng-if="item.type='Food'">
                    <h4>{{item.name}}</h4>
                    <p>{{item.location.address1}} {{item.location.zip_code}}</p>
                  </div>
                  <md-divider ng-if="!$last"></md-divider>
                </div>
              </div>
            </md-content>
            <span flex></span>
            <md-content layout="row" layout-align="space-around center">
              <div ng-if="$ctrl.currentNavItem === 'search'">
                <md-button ng-click="$ctrl.saveUserItinerary()">Save</md-button>
                <md-button ng-click="$ctrl.currentItinerary={items:[], itineraryName: 'Name Me Please'}">Reset</md-button> 
              </div>
              <div ng-if="$ctrl.currentNavItem === 'itinerary'">
                <md-button>Share</md-button>
                <md-button>Delete</md-button> 
              </div>
            </md-content>
          </md-sidenav>

          <!-- start of app content -->
          <md-content flex>
            <div ng-if="$ctrl.currentNavItem === 'home' && $ctrl.isValidUser === false">
              <md-content layout="column" flex>
                <!-- Home for anon user-->
                <home-anon />

              </md-content>
            </div>
            <div ng-if="$ctrl.currentNavItem === 'home' && $ctrl.isValidUser === true">
              <md-content layout="column" flex>
                <!-- Home for valid user-->
                <home-user 
                top-rated="$ctrl.topRated"
                />

              </md-content>
            </div>
            <div ng-if="$ctrl.currentNavItem === 'search'">
              <md-content layout="column" flex>
                <!-- search field -->
                <itinerary-search
                  handle-itinerary-search="$ctrl.handleItinerarySearch({form: form})"
                  event-results= "$ctrl.eventResults"
                  food-results= "$ctrl.foodResults"
                  handle-search-item-click="$ctrl.handleSearchItemClick({item: item})"
                ></itinerary-search>

              </md-content>
            </div>
            <div ng-if="$ctrl.currentNavItem === 'itinerary'">
              <md-content layout="column" flex>
                <!-- itinerary area-->
                <itinerary 
                  is-valid-user = "$ctrl.isValidUser"
                  get-all-user-itineraries = "$ctrl.getAllUserItineraries()"
                  current-itinerary = "$ctrl.currentItinerary"
                  all-itineraries = "$ctrl.allItineraries"
                />

              </md-content>
            </div>
          </md-content>
        </section>
      </div>
    </div>
`
  });
