angular.module('whatsGood')
  .component('homeUser', {
    bindings: {
    },
    controller: function () {
    },
    template: `
   
      
    <div flex layout ="column" layout-margin layout-padding >
      <div layout-gt-md="column" layout="row" layout-align="start end">
      LOCATION HERE
      </div>  
        <div layout="row" layout-md="column">
          <div layout="column" layout-md="row" layout-margin layout-align="end center" style="max-height:75%;">
            <h1 class="md-title"> Username:BLUEBLE </h1>
            <p>SomeDesc:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula, lectus vel tincidunt auctor, orci nisl fringilla sem, sed ultricies massa nibh non sapien. Maecenas pulvinar ex quis tellus mollis, eu imperdiet nisi consequat. Proin rutrum felis vel elit volutpat, id aliquam enim cursus. Morbi vitae erat et nisl tincidunt scelerisque. </p>
          </div>
        </div>
        <md-divider></md-divider>
      <div layout="column" layout-align="start center ">
      <h1 >TRENDING</h1>
      </div>
        <div layout-gt-md="row" layout="column" layout-align="center none" >
            <md-card flex flex-gt-md="30" style="min-height:50%;">
        
            <md-card-content>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">NAME OF PLACE</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="https://media-cdn.tripadvisor.com/media/photo-o/06/45/0e/fe/fino-cocktail-bar-restaurant.jpg" class="md-card-image" flex="90"/>
            <md-list-item class="md-3-line">
            <!--  <img ng-src="https://media-cdn.tripadvisor.com/media/photo-o/06/45/0e/fe/fino-cocktail-bar-restaurant.jpg" class="md-card-image" flex="30"/> -->
              <div class="md-list-item-text" layout="column">
              
                <h1>Rating: RATING HERE</h1>
                <h1>Pricing: PRICING HERE</h1>
                <p>ADDRESS</p>
              </div>
            </md-list-item>
          </md-card-content>
              <span flex></span>
              <md-card-actions layout="row" layout-align="end center">
                <md-button>Action 1</md-button>
                <md-button>Action 2</md-button>
              </md-card-actions>
            </md-card>

            <md-card layout-align="center center" flex flex-gt-md="30" style="min-height:50%;">
            <md-card-content>
              <img ng-src="https://media-cdn.tripadvisor.com/media/photo-o/06/45/0e/fe/fino-cocktail-bar-restaurant.jpg" class="md-card-image" flex="70" layout-align="start center"/>
              <md-list-item class="md-3-line">
              <!--  <img ng-src="https://media-cdn.tripadvisor.com/media/photo-o/06/45/0e/fe/fino-cocktail-bar-restaurant.jpg" class="md-card-image" flex="30"/> -->
                <div class="md-list-item-text" layout="column">
                <h1 layout-margin> NAME OF PLACE</h1>
                  <h1>Rating: RATING HERE</h1>
                  <h1>Pricing: PRICING HERE</h1>
                  <p>ADDRESS</p>
                </div>
              </md-list-item>
            </md-card-content>
            <span flex></span>
            <md-card-actions layout="row" layout-align="end center">
              <md-button>Action 1</md-button>
              <md-button>Action 2</md-button>
            </md-card-actions>
          </md-card>

            <md-card layout-align="center center"flex flex-gt-md="30" style="min-height:50%;">
            <md-card-content>
            <img ng-src="https://media-cdn.tripadvisor.com/media/photo-o/06/45/0e/fe/fino-cocktail-bar-restaurant.jpg" class="md-card-image" flex="70" layout-align="center"/>
            <md-list-item class="md-3-line">
            <!--  <img ng-src="https://media-cdn.tripadvisor.com/media/photo-o/06/45/0e/fe/fino-cocktail-bar-restaurant.jpg" class="md-card-image" flex="30"/> -->
              <div class="md-list-item-text" layout="column">
              <h1 layout-margin> NAME OF PLACE</h1>
                <h2>Rating: RATING HERE</h2>
                <h3>Pricing: PRICING HERE</h3>
                <h5>ADDRESS</h5>
              </div>
            </md-list-item>
          </md-card-content>
            <span flex></span>
            <md-card-actions layout="row" layout-align="end center">
              <md-button>Action 1</md-button>
              <md-button>Action 2</md-button>
            </md-card-actions>
          </md-card>
          </div>
        
     


      </div>
`
  });
