angular.module('whatsGood')
  .component('itinerarySearch', {
    bindings: {
    },
    controller: function () {

      // View Controller
      this.view = "search"

      // Search form controller
      this.location = '';
      this.keyword = '';
      this.type = '';
      this.userState = 'Event';
      this.states = [{activity: 'Event'}, {activity: 'Food'}]
      this.getSelected = function(){
        return this.userState
      }
      let form = this;

      // Search results
      this.searchResults = [];

      // Search routing
      this.getSearch = () => {
        $http({
          method: 'POST',
          url: '/search',
          data: {
            location: form.location,
            keyword: form.keyword,
            type: form.type,
          }
        }).then((result) => {
          console.log(result.data)
          this.searchResults = result.data
        })
      }
        //Post to /search function to get api call
    },
    template: `
      <div>
        

        <!-- Testing Material Angular JS -->

        <div class="md-padding" ng-cloak layout="column"  layout-align="space-around center">
        
          <md-card>
            <md-card-title>
              <md-card-title-text>
                <span class="md-headline">So, What's Good, (...in)</span>
                <span class="md-subhead"></span>
              </md-card-title-text>
            </md-card-title>
        
            <md-card-content>
              <div layout="row">
                <md-input-container>
                  <label>Keyword</label>
                  <input>
                </md-input-container>
        
                <md-input-container>
                  <label>Location</label>
                  <input>
                </md-input-container>
        
                <md-input-container>
                  <label>{{$ctrl.userState}}</label>
                  <md-select ng-model="$ctrl.userState" md-selected-text="$ctrl.getSelected()">
                    <md-option ng-repeat="state in $ctrl.states">
                      {{state.activity}}
                    </md-option>
                  </md-select>
                </md-input-container>
              </div>
            </md-card-content>
          </md-card>

        <!-- End testing =============== -->
      </div>

      <div ng-if="$ctrl.results.length === 0"> 
        <!-- Make the if > 0 when ready -->
        <div ng-repeat="listing in $ctrl.searchResults">
          {{listing.name}}
        </div>
      </div>
`
  });

  //city
  //state
  //date
  //type

//  var data = req.body;
  //data = {
  //type: 'activity' || 'food'
  //location: {city, state, date}
  //search: '';
  //}
