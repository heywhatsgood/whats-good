var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/eventlist', {useMongoClient: true});
// var keys = require('../../helpers/config.js');
console.log(keys)
var mlabKey = process.env.mlabsKey || keys.mlabsKey;
// Use below for Mlabs address
var db = mongoose.connect(mlabKey,{useMongoClient:true}) 

mongoose.Promise = global.Promise;

db.once('open', ()=>{
  console.log('Connected to the DB');
});

var ItinerarySchema = new mongoose.Schema({
  firebaseId: String,
  listid: String,
  itineraryName: String,
  items: [mongoose.Schema.Types.Mixed],
});

var EventSchema = new mongoose.Schema({
  eventname: String,
  eventid: Number,
  description: String,
  image: String,
  location: String,
  url: String,
});

var Itinerary = mongoose.model('Itinerary', ItinerarySchema);
var Event = mongoose.model('Event', EventSchema);

// Helper functions:

var getItem = function(type) {
  db.type.find({}, (err, data) =>{
    if (err) {
      return console.log (err);
    } else {
      return data;
      console.log(data); //Slash this out later
    }
  });
};

// Will need options for an ID or something specific
// Possibly a function that reads an Itinerary, 
// Returns all event IDS in the event ID array,

var saveEvent = function(passE) {

  var newE = new db.Event;
  newE.eventname = passE.eventname;
  newE.eventid = passE.eventid;
  newE.description = passE.description;
  newE.image = passE.image;
  newE.location = passE.location;
  newE.url = passE.url;

  newE.save(function (err, newE) {
    if (err) {return console.log(err);}
    console.log('Event successfully added to db!');
  });
  return (newE);
};

var saveItinerary = function(passI) {
  console.log('passI list id is, ', passI.listId)

  var newI = new Itinerary;
  newI.itineraryName = passI.itineraryName;
  newI.firebaseId = passI.firebaseId;
  newI.listid = passI.listid;
  console.log('newI.listid, ', newI.listid)
  passI.items.forEach(function(item){
    delete item['$']
    delete item['$$hashKey']
  })
  newI.items = passI.items;

  newI.save(function (err, newItinerary) {
    if (err) {return console.log(err);}
    console.log('Itinerary successfully added to db!');
  });
  return (newI);
};

// This function takes in an Itinerary ID, finds the itineray's eventsid,
// Which is an array of event ids, and then gets all those events,
// Attaches them to the iternary data as itdata.events;
// And returns the whole events obj with that array attached to it.

var getItsEvents = function(id) {
  Itinerary.find({listid: id}, (err, itdata) =>{
    if (err) {
      return console.log (err);
    } else {
      console.log(itdata.eventids);
      return getEventsArray(itdata.eventids);
    }
  });  
};

// var getEventsArray = function(eventsarr) {
//   var totalevents = [];
//   for (var i = 0; i < eventsarr.length; i++) {
//     Event.find({eventid: eventsarr[i]}, (err, event) =>{
//       if (err) {
//         return console.log(err);
//       } else {
//         totalevents.push(event);
//       }
//     });
//   }
//   return totalevents;
// };

var getItinArray = function(itinarr, cb) {
  var totalitins = [];
  for (var i = 0; i < itinarr.length; i++) {
    Itinerary.find({listid: itinarr[i]}, (err, itin) =>{
      if (err) {
        return console.log(err);
      } else {
        totalevents.push(itin);
      }
    });
  }
  cb(totalitins)
};

var getItinerary = function(listid, cb) {
  console.log('calling on getItinerary, list id is: ', listid);

  Itinerary.findOne({ listid: listid }, function (err, itinobj) {
    if (err) {console.log('the error is, ', err)
    } else {
      cb(itinobj)
    }
  })
}

module.exports = {Itinerary, Event, saveEvent, saveItinerary, getItsEvents, getItinArray, getItinerary};
