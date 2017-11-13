const yelpApi = require('./config.js');
const request = require('request-promise');
// const eventfulKey = require('./config.js');
const apiKey = process.env.yelpApiKey || eventfulKey.yelpApiKey 

const yelpRequest = function(location, query, callback) {
  const params = { 
    location: location.city + ',' + location.state,
     radius: '5000',
     sort: '2',
     term: query,
     limit: '20' }

var options = { 
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: params,
  headers: {
    authorization: apiKey
  }
  // json:true
  }
    

  request(options)
  .then(function (res) {
    callback(res)
    // console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = yelpRequest;