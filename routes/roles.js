var express = require('express');
var router = express.Router();
const role_handler = require('../routes_handler/role_handler')
/* GET users listing. */
router.get('/roles', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/',role_handler.getRole)
router.post('/',role_handler.newRole)
// router.delete('/',role_handler.login)
module.exports = router;
