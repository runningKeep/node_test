var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/photo_app')
  var schema = new mongoose.Schema({
    name:String,
    age:Number,
    passward:String,
    account:String,
    description:String,
  })
  module.exports = mongoose.model('User',schema)