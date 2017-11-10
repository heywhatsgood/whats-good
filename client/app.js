angular.module('whatsGood', ['ngMaterial', 'firebase'])
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
    controller: function($mdDialog, $http, $mdSidenav) {
      const ctrl = this;

      this.currentNavItem = 'home';
      this.isValidUser = false;
      this.user = {};
      this.password = '';

      //collapse this
      this.openLoginModal = (event, loginType) => {
        var loginController = function($mdDialog, $http, Auth) {
          const lCtrl = this;
          this.loginType = loginType;
          this.email = '';
          this.displayName = '';
          this.passwordError = '';
          this.uid = '';
          this.user = {};

          lCtrl.createUser = (callback) => {
            Auth.$createUserWithEmailAndPassword(lCtrl.email, lCtrl.password)
              .then(function(firebaseUser) {
                // lCtrl.uid = firebaseUser.uid;
                // lCtrl.user = firebaseUser;
                console.log('user created ', lCtrl.uid);
                callback(true);
              }).catch(function(error) {
                console.log('error creating', error);
                callback(false);
              });
          };
          lCtrl.loginUser = (callback) => {
            Auth.$signInWithEmailAndPassword(lCtrl.email, lCtrl.password)
              .then(function(firebaseUser) {
                lCtrl.uid = firebaseUser.uid;
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
                  console.log('passing signin data to mdialog hide', signedInUser);
                  lCtrl.answer(signedInUser);
                } else {
                  //user createion failed

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

          lCtrl.answer = function (user) {
            console.log('Succesfully signed in: ', user.displayName);
            $mdDialog.hide(user);
          };
        };

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

                <md-dialog-actions layout="row">
                  <md-button ng-click="login.handleLoginButton(login.displayName, login.password)">
                    Login
                  </md-button>
                  <span flex></span>
                  <md-button ng-if="login.loginType === 'login'" ng-click="login.loginType='signup'">
                    Sign-Up
                  </md-button>
                  <md-button ng-click="login.cancel()">
                    Cancel
                  </md-button>
                </md-dialog-actions>
              </form>
            </md-dialog>
          `,
          targetEvent: event,
          parent: angular.element(document.body),
          clickOutsideToClose: true,
        })
          .then(function (user) {
            console.log('answered', user.displayName);
            ctrl.user = user;
            ctrl.displayName = user.displayName;
            ctrl.isValidUser = true;
          }, function () {
            console.log('canceled');
          });
      };

      this.logout = () => {
        this.isValidUser = false;
        this.user = {};
        this.password = '';
      };

      this.$onInit = () => {
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
            <md-button md-no-ink class="md-primary" ng-click="$ctrl.openLoginModal($event, 'login')">
              Login
            </md-button>
            <md-button md-no-ink class="md-primary" ng-click="$ctrl.openLoginModal($event, 'signup')">
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
            md-is-locked-open="$mdMedia('gt-md')"
            md-whiteframe="4">

            <md-toolbar class="md-theme-indigo">
              <div style="position:relative;">
                <img flex="100" ng-src="https://i.pinimg.com/originals/1f/62/f0/1f62f042f2381d36e09a58949e94562f.jpg">
                <div style="position:absolute; bottom:0px; left:0px; height:auto; width:100%; text-align:center; font-size:1em; padding: 10px 0px; background-color:rgba(0,0,0,0.6)">
                  Santa Monica Trip with the boys
                </div>
              </div>
            </md-toolbar>
            <md-content layout-padding>
              <p>
                List Item 1
              </p>
              <p>
                List Item 2
              </p>
              <p>
                List Item 3
              </p>
              <p>
                List Item 4
              </p>
              <p>
                List Item 5
              </p>
            </md-content>
            <span flex></span>
            <md-button>Action 1</md-button>
            <md-button>Action 2</md-button>
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
                <home-user />

              </md-content>
            </div>
            <div ng-if="$ctrl.currentNavItem === 'search'">
              <md-content layout="column" flex>
                <!-- search field -->
                <itinerary-search />

              </md-content>
            </div>
            <div ng-if="$ctrl.currentNavItem === 'itinerary'">
              <md-content layout="column" flex>
                <!-- itinerary area-->
                <itinerary />

              </md-content>
            </div>
          </md-content>
        </section>
      </div>
    </div>
`
  });
