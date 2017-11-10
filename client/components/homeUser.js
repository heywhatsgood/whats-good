angular.module('whatsGood')
  .component('homeUser', {
    bindings: {
    },
    controller: function () {
      this.itineraryList=[]
    },
    template: `
      <div layout="column" flex>
        <md-content layout="row" flex flex-gt-sm="60">
          <md-list flex>
            <md-list-item ng-repeat="list in $ctrl.itineraryList">
              <!-- <img ng-src="{{some default image}}"> -->
              <div class="list item" layout="column">
                <h3>{{$ctrl.itinerary.itineraryName}}</h3>
                <!-- <h3>{{$ctrl.itinerary.location?}}</h3>-->
              </div>
            </md-list-item>          
          </md-list>
        </md-content>
      </div>
`
  });
