const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./db/mongo/controller.js');
const sqlDb = require('./db/sql/controller.js');
const yelp = require('./helpers/yelpHelpers.js');
const eventful = require('./helpers/eventful.js');


const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));


//LANDING PAGE
app.get('/login', function(req, res) {
  //landing page is userlist AFTER login
  //get from mongoBD (see below)
  const user = req.query;
  if (user.firebaseId) {
    sqlDb.db.controlUsers.get(user, function(currentUser) {
      currentUser = currentUser.dataValues;
      sqlDb.db.controlUsersLists.get(currentUser, function(allItineraries) {
        // console.log(allItineraries);
        currentUser.allItineraries = allItineraries;
        res.send(currentUser);
      });
    });
  } else {
    console.log('no user uid');
    res.send(false);
  }

});

app.post('/login', function(req, res) {
  //check if exists on sql db
  //return boolean
  const user = req.body;
  sqlDb.db.controlUsers.post(user, function(user, created) {
    //if user created get user list data here before sending to user;
    const currentUser = user.dataValues;
    sqlDb.db.controlUsersLists.get(user, function(allItineraries) {
      // console.log(allItineraries);
      currentUser.allItineraries = allItineraries;
      res.send(user);
    });
    // console.log('user created in sql db', currentUser);
  });
});


//SEARCH
app.post('/search', function(req, res) {
  var data = req.body;
  //data = {
  //type: 'Event' || 'Food'
  //location: {city, state, date}
  //search: '';
  //}

  if (data.type === 'Food') {

    yelp(data.location, data.search, function(food) {
      // console.log(food);
      res.send(food);	
    });
  }
  
  if (data.type === 'Event') {
    eventful.getEvents(data.location, data.search, function(events) {
      // console.log('get events ', events);
      res.send(events);
    });
  }
  
});



//CREATING ITINERARY

// app.get('/userlist', function(req, res){
// 	// get from mongodb

app.get('/itinerary', (req, res) => {
  var eventids = req.query;
  currentId = eventids.id;
  console.log('server itin ', currentId);
  db.getItinerary(currentId, function(events) {
    res.send(events);
  });
});
// })

app.post('/itinerary', function(req, res) {
  // currentItinerary = {items:[item{type:'',...}], itineraryName, firebaseId}
  const currentItinerary = req.body;
  //save userId, userlist to sql, grab id


  sqlDb.db.controlUsersLists.post(currentItinerary, function(userItinerary) {
    // console.log(userItinerary.dataValues.id);
    currentItinerary.listid = userItinerary.dataValues.id;
    console.log(currentItinerary);
    db.saveItinerary(currentItinerary)
    //take listId and attatch rest of items to it in mongo db

    res.send();  

  });
});


app.get('/itineraries', function(req, res) {
  const currentUser = req.query;
  // console.log(currentUser);
  sqlDb.db.controlUsersLists.get(currentUser, function(userLists) {
    // console.log(currentUser, userLists);
    res.send(userLists);
  });
});

var PORT = 3000

// var PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log('Listening on port ', PORT));
