angular.module('whatsGood')
  .component('homeUser', {
    bindings: {
      topRated: '<'
    },
    controller: function () {
      this.$onInit = () => {
        console.log('loaded topRated', this.topRated);
      }
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
        <h1>TRENDING</h1>
      </div>
        <div layout-gt-md="row" layout="column" layout-align="center none" >
            <md-card flex flex-gt-md="20" >
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[0].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[0].image_url}}" class="md-card-image" style="height:300px; width:335px; overflow:hidden"/>
            <md-list-item class="md-3-line">
            
              <div class="md-list-item-text" layout="column">
              
                <h1>Rating: {{$ctrl.topRated[0].rating}}<br>
                Pricing: {{$ctrl.topRated[0].price}}</h2>
                <h3>
                  {{$ctrl.topRated[0].location.display_address[0]}},</br>
                  {{$ctrl.topRated[0].location.display_address[1]}}
                </h3>
                <h3>Contact: {{$ctrl.topRated[0].phone}}</h3>
              </div>
            </md-list-item>
          </md-card-content>
              <span flex></span>
              <md-card-actions layout="row" layout-align="end center">
                <md-button>Action 1</md-button>
                <md-button>Action 2</md-button>
              </md-card-actions>
            </md-card>

            <md-card flex flex-gt-md="20" >
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[1].name}}</span>
            </md-card-title-text>
        </md-card-title>

            <img ng-src="{{$ctrl.topRated[1].image_url}}" class="md-card-image" style="height:300px; width:335px; overflow:hidden"/>
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

            <md-card flex flex-gt-md="20" >
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[2].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[2].image_url}}" class="md-card-image" style="height:300px; width:335px; overflow:hidden"/>
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

            <md-card flex flex-gt-md="20" >
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[3].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[3].image_url}}" class="md-card-image" style="height:300px; width:335px; overflow:hidden"/>
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

            <md-card flex flex-gt-md="20" >
            <md-card-content flex>
            <md-card-title>
            <md-card-title-text>
                <span class="md-headline">{{$ctrl.topRated[4].name}}</span>
            </md-card-title-text>
        </md-card-title>
            <img ng-src="{{$ctrl.topRated[4].image_url}}" class="md-card-image" style="height:300px; width:335px; overflow:hidden"/>
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
`
  });
