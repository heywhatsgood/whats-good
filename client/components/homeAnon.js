angular.module('whatsGood')
  .component('homeAnon', {
    bindings: {
    },
    controller: function () {
    },
    template: `
    <div layout="column" flex>
    
      <div flex layout ="column" layout-align= "center center" layout-margin layout-padding >
      
        <h1 class="md-display-2" style="font-weight:bold; font-size:4em; font: roboto;">WELCOME</h1> 
      
      <div layout-margin layout-padding flex >
      <p style="font-size:1.4em;">Spending a day out about town with friends? Well this completely sick app will save you some time by finding you the best spots to eat and hang out, and making it easy to share them!</p>
      </div>
      
      
      </div>

      <md-divider></md-divider>
    
      <div layout-gt-sm="row" layout-align= "center center" flex >
        <md-card flex flex-gt-md="30">
          <img ng-src="./images/truncmap.jpg" class="md-card-image" alt="Washed Out" >
          <md-card-content>
            <h2 class="md-title" style="font-weight:bold; font-size:2em;">SEARCH</h2>
            <p>
            Search places and activities by keyword. Find out the top rated places to eat or most popular events in any city. 
            </p>
          </md-card-content>
          <span flex></span>
        </md-card>

        <md-card flex flex-gt-md="30">
        <img ng-src="./images/turncchecklist.jpg" class="md-card-image" alt="Washed Out" >
        <md-card-content>
          <h2 class="md-title" style="font-weight:bold; font-size:2em;">ADD TO ITINERARY</h2>
          <p>
          Add an event or food venue to your itinerary. Once you have your day planned, login and save.
          </p>
        </md-card-content>
        <span flex></span>
      </md-card>

      <md-card flex flex-gt-md="30">
      <img ng-src="./images/share.jpg" class="md-card-image" alt="Washed Out" >
      <md-card-content>
        <h2 class="md-title" style="font-weight:bold; font-size:2em;">SHARE</h2>
        <p>
        What's Good makes it easy to plan and share your day with your friends and family. Just share the whole itinerary - addresses included - with no hassle.
        </p>
      </md-card-content>
      <span flex></span>
    </md-card>
        
       <!-- <md-card flex flex-gt-md="30">
            <img ng-src="./images/turncchecklist.jpg" class="md-card-image" >
          <md-card-content>
            <h2 class="md-title">ADD TO ITINERARY</h2>
            <p>
            Pellentesque at cursus libero. In pretium leo eget felis accumsan laoreet venenatis in erat. Nullam cursus leo eu tempor rhoncus. Nam sit amet lobortis felis. Etiam iaculis non augue et consequat. Sed tempus arcu nec faucibus ullamcorper. Curabitur odio libero, pulvinar eu mauris sed, porttitor commodo lacus. Maecenas magna nisi, malesuada vitae tristique in, vehicula vel dui. Praesent sit amet suscipit ligula, nec convallis est.
            </p>
          </md-card-content>
          <span flex></span>
        </md-card>
      
        <md-card flex flex-gt-md="30">
          <div >
            <img ng-src="https://www.deliveringinnovation.com/images/ShareMail_2.gif" class="md-card-image" style="width: 80%;">
          </div>
          <md-card-content>
            <h2 class="md-title">SHARE</h2>
            <p>
            Pellentesque at cursus libero. In pretium leo eget felis accumsan laoreet venenatis in erat. Nullam cursus leo eu tempor rhoncus. Nam sit amet lobortis felis. Etiam iaculis non augue et consequat. Sed tempus arcu nec faucibus ullamcorper. Curabitur odio libero, pulvinar eu mauris sed, porttitor commodo lacus. Maecenas magna nisi, malesuada vitae tristique in, vehicula vel dui. Praesent sit amet suscipit ligula, nec convallis est.
            </p>
            <span flex></span>
          </md-card-content>
          
        </md-card>-->
      </div>
    
    </div>
`
  });
