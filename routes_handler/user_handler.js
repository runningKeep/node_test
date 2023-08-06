var Users = require('../models/Users')
const config = require('../config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.reguser = function(req, res, next) {
  let param = req.body
  console.log(param,'params')
  Users.find({name:param.name}).then((doc)=>{
    if(doc.length===0){
      let passward = bcrypt.hashSync(param.passward,10)
      param = {...param,passward}
      const add = new Users(param) 
      add.save()
      res.send('创建成功')
    }else{
      res.send('该用户已存在')
    }
  })
}
exports.login = function(req, res, next) {
  const param = req.body
  Users.find({name:param.name}).then(doc=>{
    if(doc.length===0){
      return res.send('该用户不存在')
    }
    const compareResult = bcrypt.compareSync(param.passward,doc[0].passward)
    if(!compareResult){
      return res.send('密码错误')
    }
    const tokenstr = jwt.sign(param,config.jwtSecretKey,{expiresIn:config.expiresTime})
    res.send('登录成功'+tokenstr)
  })
}