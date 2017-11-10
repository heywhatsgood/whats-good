const db = require('./models.js');


const controlUsers = {
  get: function(user, cb) {

  },
  post: function(user, cb) {
    db.Users.findOrCreate({
      where: {
        email: user.accountInfo.email,
        firebaseId: user.accountInfo.uid,
        displayname: user.displayName,        
      },
    })
      .spread((user, created) => {
        cb(user);
      });
  }
};


const controlUsersLists = {
  get: function(usersLists, cb) {

  },
  post: function(usersLists, cb) {
    db.UsersLists.findOrCreate({
      where: {
        listName: usersLists.listName
      }
    })
      .spread((usersLists, created) => {
        cb(usersLists);
      });
  }
};

module.exports.db = {
  controlUsers: controlUsers,
  controlUsersLists: controlUsersLists
};
