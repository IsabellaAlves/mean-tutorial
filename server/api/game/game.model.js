'use strict';

// var mongoose = require('bluebird').promisifyAll(require('mongoose'));

// var GameSchema = new mongoose.Schema({
//   name: String,
//   info: String,
//   active: Boolean
// });

// export default mongoose.model('Game', GameSchema);


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
var GameSchema = new Schema({
  name: String,
  platform: String,
  genre: String
});
 
module.exports = mongoose.model('Game', GameSchema);

