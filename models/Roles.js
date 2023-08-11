var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/photo_app')
  var schema = new mongoose.Schema({
    name:String,
    category:String,
    attack:Number,
    defnese:Number,
    gender:String,
    height:Number,
    weight:Number
  })
  module.exports = mongoose.model('Role',schema)