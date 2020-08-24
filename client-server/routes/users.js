var express = require('express');
var restify = require('restify-clients')
var assert = require('assert')
var router = express.Router();


// Creates a JSON client
/* where is our client API to be access*/
var client = restify.createJsonClient({
  url: 'http://127.0.0.1:4000/'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.get('/users', function(err, request, respond, obj) {

    assert.ifError(err);
    res.json(obj)
    
  });
})

/* GET users listing. */
router.get('/:id', function(req, res, next) {

  client.get(`/users/${req.params.id}`, function(err, request, respond, obj) {

    assert.ifError(err);
    res.json(obj)
    
  });
})
/* GET users listing. */
router.put('/:id', function(req, res, next) {

  client.put(`/users/${req.params.id}`, req.body , function(err, request, respond, obj) {

    assert.ifError(err);
    res.json(obj)
    
  });
})  

/* DELETE users listing. */
router.delete('/:id', function(req, res, next) {

  client.del(`/users/${req.params.id}`, function(err, request, respond, obj) {

    assert.ifError(err);
    res.json(obj)
    
  });
})

/* POST users listing. */
router.post('/', function(req, res, next) {

  client.post(`/users`, req.body , function(err, request, respond, obj) {

    assert.ifError(err);
    res.json(obj)
    
  });
})

module.exports = router
