var express = require('express');
var app = express();

var formidable = require('formidable')

var util = require('util');


app.post('/', function (req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    if (err) {

      // Check for and handle any errors here.

      console.error(err.message);
      return;
    }
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');

    // This last line responds to the form submission with a list of the parsed data and files.

    console.log("fields")
    console.log(fields)
    console.log("files")
    console.log(files)

    res.end(util.inspect({fields: fields, files: files}));
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
