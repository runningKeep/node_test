var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/photo_app')
  var schema = new mongoose.Schema({
    name:String,
    path:String,
    description:String,
  })
  module.exports = mongoose.model('Photo',schema)