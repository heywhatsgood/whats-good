angular.module('whatsGood')
  .component('homeUser', {
    bindings: {
      topRated: '<',
      homeCity: '<',
    },
    controller: function () {
      this.$onInit = () => {
        console.log('loaded topRated', this.topRated);
      }
    },
    template: `
   
      
    <div flex layout ="column" layout-margin layout-padding >
      <div layout="row" flex layout-align="space-between center">
        <div layout="row">
          <h1>TRENDING</h1>
        </div>
        <div layout="row">
          <h1>Home: {{$ctrl.homeCity}}</h1>
        </div>
      </div>  
      <md-divider></md-divider>
      <div layout="column" layout-align="start center ">
        <div layout-gt-sm="row" layout="column" layout-align="center none" >
          <md-card flex flex-gt-sm="20" style="height:55vh;" ng-repeat="topCard in $ctrl.topRated | limitTo:5">
            <md-card-content flex>
              <h1 style="min-height:10vh; text-align:center; padding:0 10px" md-truncate flex layout-align="center center">{{topCard.name}}</h1>
            <img ng-src="{{topCard.image_url}}" class="md-card-image" style="max-height:20vh; height:auto; width:100%; overflow:hidden"/>
            <span flex></span>            
            <md-list-item class="md-3-line">
              <div class="md-list-item-text" layout="column">
              
                <h3 style="font-size:1.3em; font-weight:bold;padding:15px 0 0 0">Rating: {{topCard.rating}}<br>
                Pricing: {{topCard.price}}</h3>
                <h3>
                  {{topCard.location.display_address[0]}},</br>
                  {{topCard.location.display_address[1]}}
                </h3>
                <h3>Contact: {{topCard.phone}}</h3>
              </div>
            </md-list-item>
          </md-card-content>
              <span flex></span>
            </md-card>
            
<!--
            <md-card flex flex-gt-sm="20" style="max-height:60vh;">
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[1].name}}</span>
            </md-card-title-text>
        </md-card-title>

            <img ng-src="{{$ctrl.topRated[1].image_url}}" class="md-card-image" style="max-height:15vh; height:auto; width:100%; overflow:hidden"/>
            <md-list-item class="md-3-line">
            
              <div class="md-list-item-text" layout="column">
              
                <h1>Rating: {{$ctrl.topRated[1].rating}}<br>
                Pricing: {{$ctrl.topRated[1].price}}</h2>
                <h3>
                  {{$ctrl.topRated[1].location.display_address[0]}}, <br>
                  {{$ctrl.topRated[1].location.display_address[1]}}
                </h3>
                <h3>Contact: {{$ctrl.topRated[1].phone}}</h3>
              </div>
            </md-list-item>
          </md-card-content>
              <span flex></span>
              <md-card-actions layout="row" layout-align="end center">
                <md-button>Action 1</md-button>
                <md-button>Action 2</md-button>
              </md-card-actions>
            </md-card>

            <md-card flex flex-gt-sm="20" style="max-height:60vh;">
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[2].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[2].image_url}}" class="md-card-image" style="max-height:15vh; height:auto; width:100%; overflow:hidden"/>
            <md-list-item class="md-3-line">
            
              <div class="md-list-item-text" layout="column">
              
                <h1>Rating: {{$ctrl.topRated[2].rating}}<br>
                Pricing: {{$ctrl.topRated[2].price}}</h2>
                <h3>
                  {{$ctrl.topRated[2].location.display_address[0]}},<br>
                  {{$ctrl.topRated[2].location.display_address[1]}}
                </h3>
                <h3>Contact: {{$ctrl.topRated[2].phone}}</h3>
              </div>
            </md-list-item>
          </md-card-content>
              <span flex></span>
              <md-card-actions layout="row" layout-align="end center">
                <md-button>Action 1</md-button>
                <md-button>Action 2</md-button>
              </md-card-actions>
            </md-card>

            <md-card flex flex-gt-sm="20" style="max-height:60vh;">
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[3].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[3].image_url}}" class="md-card-image" style="max-height:15vh; height:auto; width:100%; overflow:hidden"/>
            <md-list-item class="md-3-line">
            
              <div class="md-list-item-text" layout="column">
              
                <h1>Rating: {{$ctrl.topRated[3].rating}}<br>
                Pricing: {{$ctrl.topRated[3].price}}</h2>
                <h3>
                  {{$ctrl.topRated[3].location.display_address[0]}},<br>
                  {{$ctrl.topRated[3].location.display_address[1]}}
                </h3>
                <h3>Contact: {{$ctrl.topRated[3].phone}}</h3>
              </div>
            </md-list-item>
          </md-card-content>
              <span flex></span>
              <md-card-actions layout="row" layout-align="end center">
                <md-button>Action 1</md-button>
                <md-button>Action 2</md-button>
              </md-card-actions>
            </md-card>

            <md-card flex flex-gt-sm="20" style="max-height:60vh;">
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[4].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[4].image_url}}" class="md-card-image" style="max-height:15vh; height:auto; width:100%; overflow:hidden"/>
            <md-list-item class="md-3-line">
            
              <div class="md-list-item-text" layout="column">
              
                <h1>Rating: {{$ctrl.topRated[4].rating}}<br>
                Pricing: {{$ctrl.topRated[4].price}}</h2>
                <h3>
                  {{$ctrl.topRated[4].location.display_address[0]}},<br>
                  {{$ctrl.topRated[4].location.display_address[1]}}
                </h3>
                <h3>Contact: {{$ctrl.topRated[4].phone}}</h3>
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
      -->
`
  });
