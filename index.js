var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('Mongojs');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId;

var app = express();

var port = 2000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));



var db = mongojs('ecommerce', ['products']);

/////////////////////////////

app.post('/products', function(req, res){
  var toPost = req.body;
  db.products.insert(toPost, function(err, result){
    if(err){
      res.status(500).end();
    }
    res.send(result);
  });
  console.log('post');
});


app.get('/products', function(req, res){
  db.products.find({}, function(err, result){
    if(err){
      res.status(500).end();
      console.log('get has an error');
    }
    res.send(result);
  });
  console.log('get');
});

app.get('/products/:id', function(req, res){
  db.products.find({}, function(err, result){
    if(err){
      res.status(500).end();
      console.log('get has an error');
    }
    res.send(result);
  });
  console.log('get');
});




app.put('/products/:id', function(req, res){
  var idToModify = ObjectId(req.params.id);
  var updateObject = {
    query: {_id: idToModify},
    update: {$set: req.body},
    new: false
  };
  db.products.findAndModify(updateObject, function(err, result){
    res.send(result);
  });
  console.log('put');
});


app.delete('/products/:id', function(req, res){
  var idToDelete = ObjectId(req.params.id);
  console.log(idToDelete);
  db.products.remove({_id: idToDelete}, function(err, resolve){
    if(err){
      console.log(err);
      res.status(500).end();
    }
    res.send('object by ID deleted');
  });
  console.log('delete');
});


app.put('/products/:id', function(req, res) {
  console.log('update request received');
  var idToModify = ObjectId(req.params.id);
  var updateObject = {
    query: {_id: idToModify},
    update: {$set: req.body},
    new: false
  };
  db.products.findAndModify(updateObject, function(err, result){
    res.send(result);
  });
  console.log('put hit');

});





app.listen(port, function() {
  console.log('now listening at port ' + port);
});
