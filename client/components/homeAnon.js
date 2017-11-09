angular.module('whatsGood')
  .component('homeAnon', {
    bindings: {
    },
    controller: function () {
    },
    template: `
    <div layout="column" flex>
    
      <div flex layout-gt-layout-align= "center center" max-height="30%">WELCOME goes here
      
      
      <p>Integer neque leo, faucibus vitae eros at, mollis placerat libero. Vivamus iaculis diam velit, at egestas lorem sodales ac. Maecenas sit amet pharetra purus. Aenean in tortor ultrices, placerat augue vitae, faucibus nisl. Suspendisse potenti. Phasellus porttitor pretium nisl non rhoncus. In sit amet leo semper dolor hendrerit condimentum sit amet id diam. Praesent et nisl eget diam placerat dignissim. Praesent a felis diam. Ut euismod, dolor vitae tempor faucibus, enim purus fermentum nibh, in elementum dolor erat vel felis. In in maximus dui, ac molestie dolor. Nullam dapibus leo eu elementum vehicula. Vivamus ultricies dui vitae commodo sollicitudin.</p>
      
      
      
      </div>
    
      <div layout-gt-lg= "row" flex >
        <md-card flex flex-gt-md="30">
        <img ng-src="http://www.minico.com/blog/wp-content/uploads/2015/04/ThinkstockPhotos-460880491.jpg" class="md-card-image" alt="Washed Out" >
          <md-card-content>
            <h2 class="md-title">SEARCH</h2>
            <p>
            Pellentesque at cursus libero. In pretium leo eget felis accumsan laoreet venenatis in erat. Nullam cursus leo eu tempor rhoncus. Nam sit amet lobortis felis. Etiam iaculis non augue et consequat. Sed tempus arcu nec faucibus ullamcorper. Curabitur odio libero, pulvinar eu mauris sed, porttitor commodo lacus. Maecenas magna nisi, malesuada vitae tristique in, vehicula vel dui. Praesent sit amet suscipit ligula, nec convallis est.
            </p>
          </md-card-content>
          <span flex></span>
        </md-card>
        
        <md-card flex flex-gt-md="30">
        <img ng-src="https://www.50statesstaffing.com/sites/default/files/styles/large/public/field/image/travel-nursing-requirements.jpg?itok=l6taSjKW" class="md-card-image" alt="Washed Out" >
        <md-card-content>
          <h2 class="md-title">ADD TO ITINERARY</h2>
          <p>
          Pellentesque at cursus libero. In pretium leo eget felis accumsan laoreet venenatis in erat. Nullam cursus leo eu tempor rhoncus. Nam sit amet lobortis felis. Etiam iaculis non augue et consequat. Sed tempus arcu nec faucibus ullamcorper. Curabitur odio libero, pulvinar eu mauris sed, porttitor commodo lacus. Maecenas magna nisi, malesuada vitae tristique in, vehicula vel dui. Praesent sit amet suscipit ligula, nec convallis est.
          </p>
        </md-card-content>
        <span flex></span>
        </md-card>
      
        <md-card flex flex-gt-md="30">
        <md-card-content>
          <h2 class="md-title">SHARE</h2>
          <p>
          Pellentesque at cursus libero. In pretium leo eget felis accumsan laoreet venenatis in erat. Nullam cursus leo eu tempor rhoncus. Nam sit amet lobortis felis. Etiam iaculis non augue et consequat. Sed tempus arcu nec faucibus ullamcorper. Curabitur odio libero, pulvinar eu mauris sed, porttitor commodo lacus. Maecenas magna nisi, malesuada vitae tristique in, vehicula vel dui. Praesent sit amet suscipit ligula, nec convallis est.
          </p>
          <span flex></span>
        </md-card-content>
        
        </md-card>
        </div>
    
        </div>
`
  });
