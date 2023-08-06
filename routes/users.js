var express = require('express');
var router = express.Router();
const user_handler = require('../routes_handler/user_handler')
/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/reguser',user_handler.reguser)
router.post('/login',user_handler.login)
module.exports = router;
