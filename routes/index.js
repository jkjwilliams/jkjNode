var express = require('express');
var router = express.Router();
var data = require('../data');

router.get('/api', function(req, res, next){
    res.json({ message: "we made it" });
})

router.get('/api/locations', function(req, res, next){
    data.getLocations(function(err, results){
        if(err){
            res.send(400, err);
        } else {
            res.json(results);
        }
    });
});

router.get('/api/locations/:icon', function(req, res, next){
    var rp = req.params.icon;
    data.getLocations(function(err, results){
        if(err){
            res.send(400, err);
        } else {
            res.json(results);
        }
    });
});

router.post('api/location', function(req, res){
    console.log('req.body');
    console.log(req.body);
    var location = req.body.location;
    data.addLocation(location, function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect('/map');
        }
    });
});

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'jkj MEAN' });
});

module.exports = router;

// (function(router){
// 
//     var express = require('express');
//     var router = express.Router();
//     var data = require('../data');
//     
//     /* GET home page. */
//     router.get('/', function(req, res, next) {
//         res.render('index', { title: 'jkj MEAN' });
//     });
// 
//     router.get('/api', function(req, res, next){
//         res.json({ message: "we made it" });
//     });
//     
//     router.get('/api/locations', function(req, res, next){
//         
//         data.getLocations(function(err, results){
//            if(err){
//                res.send(400, err);
//            } else {
//                res.json(results);
//            }
//         });
//     });
//     
// })(module.exports);