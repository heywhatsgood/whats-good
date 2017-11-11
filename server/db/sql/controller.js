const db = require('./models.js');


const controlUsers = {
  get: function(user, cb) {
    db.Users.findOne({
      where: {
        firebaseId: user.firebaseId,
        displayName: user.displayName,
      }
    }).then((user) => {
      if (user) {
        cb(user);
      } else {
        cb(false);
      }
    });

  },
  post: function(user, cb) {
    db.Users.findOrCreate({
      where: {
        firebaseId: user.accountInfo.uid,
      }, defaults: {
        email: user.accountInfo.email,
        displayName: user.displayName,

      }
    })
      .spread((user, created) => {
        cb(user, true);
      });
  }
};


const controlUsersLists = {
  get: function(user, cb) {
    db.UsersLists.findAll({
      where: {
        firebaseId: user.firebaseId
      },
      attributes: ['id', 'itineraryName']
    })
      .then((allItineraries) => {
        cb(allItineraries);
      });

  },
  post: function(itinerary, cb) {
    // currentItinerary = {items:[item{type:'',...}], itineraryName, firebaseId}
    db.UsersLists.findOrCreate({
      where: {
        firebaseId: itinerary.firebaseId,
        itineraryName: itinerary.itineraryName
      }
    })
      .spread((userItinerary, created) => {
        cb(userItinerary);
      });
  }
};

module.exports.db = {
  controlUsers: controlUsers,
  controlUsersLists: controlUsersLists
};
