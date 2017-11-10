const Sequelize = require('sequelize');
const postgresUrl = 'postgres://ojgiieyj:B_Umu3eifqfsPAiNNzUNkT_eXDpIHXG5@baasu.db.elephantsql.com:5432/ojgiieyj';

const db = new Sequelize(postgresUrl, {
  dialect: 'postgres',
  operatorsAliases: false
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch(err => {
    console.log('Unable to connect to the database');
  });

const Users = db.define('users', {
  displayname: Sequelize.STRING,
  firebaseId: Sequelize.STRING,
  email: Sequelize.STRING
}, {
  timestamps: false 
});

const UsersLists = db.define('usersLists', {
  listName: Sequelize.STRING
});

UsersLists.belongsTo(Users, {
  foreignKey: 'UserId'
});
Users.hasMany(UsersLists, {
  foreignKey: 'UserId'
});

// db.sync({force: true});
db.sync();

module.exports = { Users, UsersLists };
