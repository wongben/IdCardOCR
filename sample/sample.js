var tencentyoutuyun = require('..');
var fs = require('fs');
var conf  = tencentyoutuyun.conf;
var youtu = tencentyoutuyun.youtu;
var Clipper = require('image-clipper');
// 设置开发者和应用信息, 请填写你在开放平台
var appid = '10009865';
var secretId = 'AKIDJUsJwO4mjU4SdbNzObfbLcnlXFm6rhQx';
var secretKey = 'Wu66tZ3LQJ0UdeBeHppgPwHPK2Ys44uY';
var userid = '****';

conf.setAppInfo(appid, secretId, secretKey, userid, 0)


// youtu.imageporn('a1.jpg', function(data){
//    console.log("imagetag:" + JSON.stringify(data));
// });

youtu.idcardocr('a.jpg', 0, function(data){
   //console.log(JSON.stringify(data));
   console.log('id', data.data.id);
   console.log('name', data.data.name);
   console.log('address', data.data.address);
   console.log('nation', data.data.nation);
   fs.writeFile('result.jpg', data.data.frontimage, {encoding: 'base64'}, function(err){
   });
  //  Clipper('result.jpg', function() {
  //   this.crop(20, 20, 100, 100)
  //   .resize(50, 50)
  //   .quality(80)
  //   .toFile('/path/to/result.jpg', function() {
  //      console.log('saved!');
  //    });
  // });
  
});

// youtu.namecardocr('a.jpg', false, function(data){
//    console.log("namecardocr:" + JSON.stringify(data));
// });

// 其他接口 类似
