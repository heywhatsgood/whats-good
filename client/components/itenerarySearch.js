angular.module('whatsGood')
  .component('itinerarySearch', {
    bindings: {
      handleItinerarySearch: '&',
      // location: '<',
      // keyword: '<',
      // userState: '<'
      eventResults: '<',
      foodResults: '<'
    },
    controller: function ($http) {

      // View Controller
      this.view = "search"

      // Search form controller
      this.location = {
        state: 'California'
      };
      // this.keyword = '';
      this.type = '';
      this.userState = 'Event';
      this.states = [{activity: 'Event'}, {activity: 'Food'}]
      this.getSelected = function(){
        return this.userState
      }
      let form = this;

      // Search results
      this.eventResults = [];
      this.foodResults = [];

      // Search routing
      // this.getSearch = () => {
      //   console.log(
      //     form.location,
      //     form.keyword,
      //     form.userState
      //   );
      //   $http({
      //     method: 'POST',
      //     url: '/search',
      //     data: {
      //       location: form.location,
      //       search: form.keyword,
      //       type: form.userState,
      //     }
      //   }).then((result) => {
      //     if (form.userState === 'Food'){
      //       form.foodResults = result.data.businesses
      //       console.log(form.foodResults)
      //     }
      //     if (form.userState === 'Event'){
      //       form.eventResults = result.data
      //       console.log(form.eventResults)
      //     }
      //   })
      // }


        //Post to /search function to get api call
    },
    template: `
      <div>

        <!-- Testing Material Angular JS -->

        <div class="md-padding" ng-cloak layout="column"  layout-align="space-around center">
        
          <md-card>
            <md-card-title>
              <md-card-title-text>
                <span class="md-headline"><center>So, What's Good, (...in)</center></span>
                <span class="md-subhead"></span>
              </md-card-title-text>
            </md-card-title>
        
            <md-card-content>
              <div layout="row">
                <md-input-container>
                  <label>Keyword</label>
                  <input ng-model="$ctrl.keyword">
                </md-input-container>
        
                <md-input-container>
                  <label>Location</label>
                  <input ng-model="$ctrl.location.city">
                </md-input-container>
        
                <md-input-container>
                  <label>{{$ctrl.userState}}</label>
                  <md-select ng-model="$ctrl.userState" md-selected-text="$ctrl.getSelected()">
                    <md-option ng-repeat="state in $ctrl.states">
                      {{state.activity}}
                    </md-option>
                  </md-select>
                </md-input-container>

                <md-input-container>
                  <md-button class="md-raised" ng-click="$ctrl.handleItinerarySearch({form: {
                    location: $ctrl.location,
                    keyword: $ctrl.keyword,
                    userState: $ctrl.userState
                  }})" style="margin-top: -10px">wass good?</md-button> 
                </md-input-container>

              </div>
            </md-card-content>
          </md-card>

        <!-- End testing =============== -->
      </div>

      <div ng-if="$ctrl.userState === 'Event'">
        <md-content>
        <md-list flex>
          <md-list-item class="md-3-line" ng-repeat="item in $ctrl.eventResults" ng-click="null">
            <img ng-src="{{item.image[0].url[0]}}" onerror="this.src='https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png'" class="md-avatar"/>
            <div class="md-list-item-text" layout="column">
              <h3>{{ item.title[0] }}</h3>
              <h4>{{ item.description[0] || 'Add this event to see more details!'}}</h4>
              <p>{{ item.venue_name[0]}}, {{item.venue_address[0]}}, {{item.city_name[0]}}, {{item.postal_code[0]}}</p>
            </div>
          </md-list-item>
        </md-list>
      </div>

      <div ng-if="$ctrl.userState === 'Food'">
      <md-content>
      <md-list flex>
        <md-list-item class="md-3-line" ng-repeat="item in $ctrl.foodResults" ng-click="null">
          <img ng-src="{{item.image_url}}" class="md-avatar"/>
          <div class="md-list-item-text" layout="column">
            <h3>{{item.name}}</h3>
            <h4>Rating: {{item.rating}}, Price: {{item.price}}. {{item.categories[0].title}}, {{item.categories[1].title}}, {{item.categories[2].title}}.</h4>
            <p>{{item.location.display_address[0]}}, {{item.location.display_address[1]}}</p>
          </div>
        </md-list-item>
      </md-list>
    </div>
    `
  });