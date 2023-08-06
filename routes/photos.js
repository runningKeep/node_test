var express = require('express');
var router = express.Router();

/* GET home page. */

var photos = []
// photos.push({
//   name:'aa',
//   path:'https://tse1-mm.cn.bing.net/th/id/OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp?pid=ImgDet&rs=1'
// })
// photos.push({
//   name:'bb',
//   path:'https://tse1-mm.cn.bing.net/th/id/OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp?pid=ImgDet&rs=1'
// })
router.get('/photos', function(req, res, next) {
  res.render('photos', { title: 'photos',photos: photos});
});
module.exports = router;