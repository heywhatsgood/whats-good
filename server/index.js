const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const db = require('./db/mongo/controller.js');
const sqlDb = require('./db/sql/controller.js');
//external apis
const apiKeys = require('./helpers/config.js');
const yelp = require('./helpers/yelpHelpers.js');
const eventful = require('./helpers/eventful.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));


//LANDING PAGE
app.get('/', function(req, res) {
  //landing page is userlist AFTER login
  //get from mongoBD (see below)
  res.send();

});

app.post('/login', function(req, res) {
  //check if exists on sql db
  //return boolean
  const user = req.body;
  sqlDb.db.controlUsers.post(user, function(created) {
    //get user list data here before sending to user;
    console.log('user created in sql db');
    res.send(created);
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
      console.log(food);
      res.send(food);	
    });
  }
  
  if (data.type === 'Event') {
    eventful.getEvents(data.location, data.search, function(events) {
      console.log('get events ', events);
      res.send(events);
    });
  }
  
});



//CREATING ITINERARY

// app.get('/userlist', function(req, res){
// 	// get from mongodb

app.get('/test', (req, res) => {
  var eventids = req.query;
  db.getEventsArray(eventids, function(events) {
    res.send(events);
  });
});
// })

app.post('/itinerary', function(req, res) {
  const itinBody = req.body;
  //save userId, userlist to sql, grab id
  //sqlDb.POST(itinBody, function(res){
  //take both ids and put into new table in mongoDB
  //  db.POST(res, function(res){
  //  res.send(201, res?);
  //  })
  // })
});



app.listen(3000, () => console.log('Listening on port 3000'));
