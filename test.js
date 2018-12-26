const AWS = require('aws-sdk');
AWS.config.update({
accessKeyId : 'AKIAJJCRK3ZJJ7L4JUXA',
secretAccessKey : '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'
});
var s3 = new AWS.S3({apiVersion: "2012-10-17"});
var express = require('express');
var app = express();

app.get('/check', function (req, res) {
console.log('here');

    s3.listBuckets(function(err, data) {
       if (err) {
          console.log("Error", err);
          res.end( err );
       } else {
          console.log("Bucket List", data.Buckets);
          res.end(data)
       }
    });
    ;
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
  init ();
})


function init () {

 s3.listBuckets(function(err, data) {
       if (err) {
          console.log("Error", err);
       } else {
          console.log("Bucket List", data.Buckets);
       }
    });

}
/*GET /?encryptionHTTP/1.1;
Host: assignbuck2.s3.amazonaws.com;
Date:2012-10-17;
Authorization: authorization string;
Content-Length : length;*/