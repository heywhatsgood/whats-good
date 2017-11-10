angular.module('whatsGood')
.component('itineraryCard', {
  bindings: {
  },
  controller: function () {
    this.item ={
      imagePath: 'https://i.pinimg.com/originals/36/de/cf/36decffaf32edd893921e36d932c0843.jpg',
      name: 'Yuum',
      address: '12345 Somewhere St, Some City, SomeState, 67890', 
      description: 'Integer neque leo, faucibus vitae eros at, mollis placerat libero. Vivamus iaculis diam velit, at egestas lorem sodales ac. Maecenas sit amet pharetra purus. Aenean in tortor ultrices, placerat augue vitae, faucibus nisl. Suspendisse potenti. Phasellus porttitor pretium nisl non rhoncus. In sit amet leo semper dolor hendrerit condimentum sit amet id diam. Praesent et nisl eget diam placerat dignissim. Praesent a felis diam. Ut euismod, dolor vitae tempor faucibus, enim purus fermentum nibh, in elementum dolor erat vel felis. In in maximus dui, ac molestie dolor. Nullam dapibus leo eu elementum vehicula. Vivamus ultricies dui vitae commodo sollicitudin.'
    }
  },
  template: `
  

  <div layout-gt-sm="column" flex>
  <md-content class="md-padding">
    <md-card style="min-height: 75%" layout-margin flex>
      <md-grid-list md-cols-sm ="2" md-cols-md="4" md-cols-gt-md="6" md-row-height-gt-md="3:2" md-row-height="3:2" md-gutter="8px" md-gutter-gt-md="12px">
        
        <md-grid-tile md-rowspan-gt-md="3" md-colspan-gt-md="2" md-rowspan="4" md-colspan="4">
          <img ng-src='https://i.pinimg.com/originals/36/de/cf/36decffaf32edd893921e36d932c0843.jpg' layout-fill/>
        </md-grid-tile>
      
      <md-grid-tile md-rowspan="3" md-colspan="4" layout-align="end center" flex style="background: #b9f6ca;">
        <md-grid-tile-header layout-margin layout-align="center center" style="height: 25%">
          <h1 >{{$ctrl.item.name}}</h1>
        </md-grid-tile-header>
  
        <section flex>      
          <div layout-gt-sm="column" layout-margin layout-align=" center center"  style="height: 50%" >
            <h1 layout-margin>
            {{$ctrl.item.address}}
              12345 Somewhere St,
            <br>
              Some City, SomeState, 67890
            </h1>
            <h1>
            Contact: (213)456-7890
            </h1>
          </div>
        </section>
      </md-grid-tile>
      <md-grid-tile md-rowspan="3" md-colspan="4" md-colspan-gt-md="6" style="background: #b9f6ca;" flex>
        <div layout-gt-sm="column" layout-align=" center center" layout-padding flex>
          <p layout-margin>
            {{$ctrl.item.description}}
          </p>
        </div>
      
      </md-grid-tile> 
   
      

   <!-- <md-grid-tile md-rowspan="4" md-colspan="6" style="background: #b9f6ca;" flex>
        <div layout-gt-sm="column" layout-align=" center center" layout-padding flex>
          <p layout-margin>
          {{$ctrl.item.description}}
          </p>
        </div>
        
      </md-grid-tile> -->
    </md-grid-list> 
  </md-card>
  </md-content>
  </div>
  




`
});
