angular.module('whatsGood')
.component('itineraryCard', {
  bindings: {
    currentItinerary: '<',
    handleItineraryItemClick: '&',
    currentItem:'<'
  },
  controller: function () {
  },
  template: `
  

  <div layout-gt-sm="column" flex>
  <md-content class="md-padding">
    <md-card style="min-height: 75%" layout-margin flex>
      <md-grid-list md-cols-md="4" md-cols-gt-md="6" md-row-height-gt-md="3:2" md-row-height="3:2" md-gutter="8px" md-gutter-gt-md="12px">
        
        <md-grid-tile md-rowspan-gt-md="3" md-colspan-gt-md="2" md-rowspan="4" md-colspan="4">
       
        <div ng-if="$ctrl.currentItem.type==='Food'">
          <img ng-src="{{$ctrl.currentItem.image[0].url[0]}}"  layout-fill/>
        </div>
        <div ng-if="$ctrl.currentItem.name">
        <img ng-src="{{$ctrl.currentItem.image_url}}" layout-fill/>
        </div>
          </md-grid-tile>
      
      <md-grid-tile md-rowspan="3" md-colspan="4" layout-align="end center" flex style="background: #b9f6ca;">
        <md-grid-tile-header layout-margin layout-align="center center" style="height: 25%">
        <div ng-if="$ctrl.currentItem.type==='Food'">
          <h1 >{{$ctrl.currentItem.title}}</h1>
        </div>
        <div ng-if="$ctrl.currentItem.name">
        <h1 >{{$ctrl.currentItem.name}}</h1>
        </div>
        </md-grid-tile-header>
  
        <section flex>      
          <div layout-gt-sm="column" layout-margin layout-align=" end center"  style="max-height: 50%" >
          <div ng-if="$ctrl.currentItem.type==='Food'">  
            <h1 layout-margin>
            {{$ctrl.currentItem.venue_address[0]}}
            <br>
            {{$ctrl.currentItem.city_name[0]}}
            </h1>
          </div>

          <div ng-if="$ctrl.currentItem.name">  
          <h1 layout-margin>
          {{$ctrl.currentItem.location.display_address[0]}}
          <br>
          {{$ctrl.currentItem.location.display_address[1]}}
          </h1>
          <h1>
          {{$ctrl.currentItem.phone}}
          </h1>
        </div>

          </div>
        </section>
      </md-grid-tile>
      <md-grid-tile md-rowspan-gt-md="3" md-colspan="4" md-colspan-gt-md="6" style="background: #b9f6ca;" flex>
        <div  layout-align=" end center" layout-padding style="max-height:50%">
        <div ng-if="$ctrl.currentItem.type==='Food'">
          <p layout-margin >
            <md-truncate class="md-ellipsis" flex>{{$ctrl.currentItem.description}}</md-truncate>
          </p>
        </div>

        <div ng-if="$ctrl.currentItem.name">
        <p layout-margin >
          {{$ctrl.currentItem.rating}}<br>
          {{$ctrl.currentItem.price}}
        </p>
        </div>
        </div>
      
      </md-grid-tile> 
    </md-grid-list> 
  </md-card>
  </md-content>
  </div>
  




`
});
