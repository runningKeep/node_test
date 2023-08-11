var Roles = require('../models/Roles')
exports.getRole = function(req, res, next) {
  let param = req.body
  console.log(param,'params')
  Roles.find().then((doc)=>{
    res.send(doc)
  })
}
exports.newRole = function(req, res, next) {
  const param = req.body
  const add = new Roles(param) 
  add.save()
  res.send('创建成功')
}