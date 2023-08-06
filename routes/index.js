var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var photos = []
photos.push({
  name:'aa',
  path:'https://ts1.cn.mm.bing.net/th/id/R-C.31df3a5a2d8462228734f95d459883e2?rik=7EE6TeWDk%2f%2bctQ&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214331.jpg&ehk=SpI7mz%2byLqOkT8BL79jcd3iCtQYNFlBHQzbtF1p0vuQ%3d&risl=&pid=ImgRaw&r=0'
})
photos.push({
  name:'bb',
  path:'https://ts1.cn.mm.bing.net/th/id/R-C.b49dbddffaa692d75988e0c5882dacca?rik=r6IIYs2muimY7A&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140529%2f1-140529145A4.jpg&ehk=Co9XURYRCjJXUTzFG0Mw6lD7olzDKceEgv3slEC8kvQ%3d&risl=&pid=ImgRaw&r=0'
})
photos.push({
  name:'bb',
  path:'https://tse1-mm.cn.bing.net/th/id/OIP-C.ZkoPhpKfJwsvGmpm8RsragHaFp?pid=ImgDet&rs=1'
})
router.get('/photos', function(req, res, next) {
  res.render('photos', { title: 'photos',photos: photos});
});
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'photos',photos: photos});
});

var Photo = require('../models/Photos')
var path = require('path')
var fs = require('fs')
var join = path.join
router.post('/upload', function(req, res, next) {
  console.log(Photo,'Photo')
  Photo.find().then((doc)=>{
    console.log(doc,'doc')
    const add = new Photo({name:'bb',path:'/path/bb'}) 
    add.save()
    res.send(doc)
  })
  var dir = router.get('photos')
  console.log(req,'req')
  console.log(req.files,'files')
  // var img = req.files.photo.image
  // var name = req.body.photo.name||img.name
  // var path = join(dir,img.name)
  // fs.rename(img.path,path,function(err){
  //   if(err) return next(err)
  //   Photo.create({
  //     name:name,
  //     path:img.name,
  //   },function(err){
  //   if(err) return next(err)
  //   res.redirect('/')
  //   })
  // })
});
router.put('/upload',function(req, res, next) {
  console.log('put')
  let aa = Photo.updateOne({_id:'64cc68707af2a4ad8b6ec352'},{$set:{name:'ee',description:'cc'}}).then(res=>{
    console.log(res,'ress')
  })
  Photo.find().then(doc=>{
    res.send(doc)
  })
})
module.exports = router;
