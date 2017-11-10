angular.module('whatsGood')
  .component('homeUser', {
    bindings: {
    },
    controller: function () {
      this.itineraryList=[]
    },
    template: `
   
      
    <div flex layout ="column" layout-margin layout-padding >
        

        <div layout="row" layout-md="column">
          <div flex-gt-md="20" >
            <md-card flex>
              <img ng-src="https://free.clipartof.com/171-Dark-Blue-Avatar-Character-Free-Vector-Clipart-Illustration.jpg" class="md-card-image"/>
            </md-card> 

          </div>

          <div layout="column" layout-md="row" layout-margin layout-padding layout-align="end center">
            <h1 class="md-title"> BLUEBLE </h1>
          

            <div layout-margin layout-padding layout-align="end center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula, lectus vel tincidunt auctor, orci nisl fringilla sem, sed ultricies massa nibh non sapien. Maecenas pulvinar ex quis tellus mollis, eu imperdiet nisi consequat. Proin rutrum felis vel elit volutpat, id aliquam enim cursus. Morbi vitae erat et nisl tincidunt scelerisque. </p>
            </div>
          </div>
        </div>
        <md-divider></md-divider>

        
        
      
         
        



      <!--  <md-content layout="row" flex flex-gt-sm="60">
          <md-list flex>
            <md-list-item ng-repeat="list in $ctrl.itineraryList">
              <!-- <img ng-src="{{some default image}}">
              <div class="list item" layout="column">
                <h3>{{$ctrl.itinerary.itineraryName}}</h3>
                <!-- <h3>{{$ctrl.itinerary.location?}}</h3>
              </div>
            </md-list-item>          
          </md-list>
        </md-content> -->
      </div>
`
  });
