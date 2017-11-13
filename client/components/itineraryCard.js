angular.module('whatsGood')
  .component('itineraryCard', {
    bindings: {
      currentItinerary: '<',
      handleItineraryItemClick: '&',
      currentItem: '<'
    },
    controller: function () {
      this.$onChanges = () => {
        if (this.currentItem.name) {
          console.log('here is the rating: ', this.currentItem.rating);
          this.yelpRating = this.currentItem.rating * 1;
        }
      };

      this.getGoogleMaps = () => {
        if (this.currentItem.name) {
          console.log(this.currentItem.venue_address[0], this.currentItem.city_name[0]);
          this.currentAddress = '' + this.currentItem.venue_address[0] + ' ' + this.currentItem.city_name[0];
          this.currentAddress = encodeURI(this.currentAddress);
        } else if (this.currentItem.type === 'Food') {
          this.currentAddress = '' + this.currentItem.location.display_address[0] + ' ' + this.currentItem.location.display_address[1];
          this.currentAddress = encodeURI(this.currentAddress);
          console.log(this.currentItem.location.display_address[0], this.currentItem.location.display_address[1]);
          
        }
        console.log(this.currentItem);

        const googleUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCZtYg990qy5PMQfxVwJJalq8EH6VW6z4w&q=${this.currentAddress}`;

      };
    },
    template: `
  

  <div layout-gt-sm="column" flex>
    <md-content layout-padding layout-margin style="overflow:hidden;">
      <md-card flex="95">
        <md-grid-list md-cols-sm="4" md-cols-gt-sm="6" md-row-height-gt-sm="1.5:1" md-row-height-gt-md="2:1" md-row-height="1:1" md-gutter="8px" md-gutter-gt-sm="12px">
          
          <md-grid-tile md-rowspan-gt-sm="3" md-colspan-gt-sm="2" md-rowspan-sm="1" md-colspan-sm="1">
        
            <div ng-if="!$ctrl.currentItem.name">
              <img ng-src="{{$ctrl.currentItem.image[0].url[0]}}" layout-fill/>
            </div>
            <div ng-if="$ctrl.currentItem.name">
              <img ng-src="{{$ctrl.currentItem.image_url}}" layout-fill/>
            </div>
          </md-grid-tile>
        
          <md-grid-tile md-rowspan-gt-sm="3" md-colspan-gt-sm="4" md-rowspan="2" md-colspan="3" layout-align="end center" flex style="">
            <md-grid-tile-header layout-margin layout-align="center center">
              <div ng-if="!$ctrl.currentItem.name">
                <h1 >{{$ctrl.currentItem.title[0]}}</h1>
              </div>
              <div ng-if="$ctrl.currentItem.name">
                <h1 >{{$ctrl.currentItem.name}}</h1>
              </div>
            </md-grid-tile-header>
    
            <section flex>
              <div layout-gt-sm="column" layout-align="end center" style="text-align:center;">
                <br>
                <div ng-if="!$ctrl.currentItem.name">
                  <h1 layout-margin>
                  {{$ctrl.currentItem.venue_address[0]}}
                  <br>
                  {{$ctrl.currentItem.city_name[0]}}
                  </h1>
                </div>

                <div ng-if="$ctrl.currentItem.name">
                  <br>
                  <h1 layout-margin>
                  {{$ctrl.currentItem.location.display_address[0]}}
                  <br>
                  {{$ctrl.currentItem.location.display_address[1]}}
                  </h1>
                  <h1>
                  {{$ctrl.currentItem.phone}}
                  </h1>
                  <h1>{{$ctrl.currentItem.price}}</h1>                  
                </div>
              </div>
            </section>
          </md-grid-tile>
          <md-grid-tile md-rowspan-gt-sm="3" md-colspan="4" md-colspan-gt-sm="6" style="" flex>
            <div  layout-align="center center" >
              <div ng-if="!$ctrl.currentItem.name">
                <p layout-margin >
                  <md-truncate class="md-ellipsis" flex>{{$ctrl.currentItem.description[0]}}</md-truncate>
                </p>
              </div>

              <div ng-if="$ctrl.currentItem.name" layout="row" layout-align="space-around center">
                <p ng-if="$ctrl.yelpRating >= 1" style="font-size:8em; overflow:hidden; color:#673AB7;">&#11088;</p>
                <p ng-if="$ctrl.yelpRating >= 2" style="font-size:8em; overflow:hidden; color:#673AB7;">&#11088;</p>
                <p ng-if="$ctrl.yelpRating >= 3" style="font-size:8em; overflow:hidden; color:#673AB7;">&#11088;</p>
                <p ng-if="$ctrl.yelpRating >= 4" style="font-size:8em; overflow:hidden; color:#673AB7;">&#11088;</p>
                <p ng-if="$ctrl.yelpRating >= 5" style="font-size:8em; overflow:hidden; color:#673AB7;">&#11088;</p>
              </div>

            </div>
          </md-grid-tile> 
        </md-grid-list> 
      </md-card>
    </md-content>
  </div>
  




`
  });
