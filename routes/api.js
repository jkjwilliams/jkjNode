var express = require('express');
var router = express.Router();


router.get('/api', function(req, res, next) {
    res.json({ message: 'hooray! we made it to the api call'});
});

module.exports = router;


// (function(apiController){
//     
//     var express = require('express');
//     var router = express.Router();
//     // var data = require('./data');
//     
//     
//     
// })(module.exports);