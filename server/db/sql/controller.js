const db = require('./models.js');


const controlUsers = {
  get: function(user, cb) {
    db.Users.findOne({
      where: {
        firebaseId: user.firebaseId,
        displayName: user.displayName,
      }
    }).then((userExists) => {
      if (userExists) {
        cb(true);
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
