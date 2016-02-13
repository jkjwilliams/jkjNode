(function(database){
    var mongodb = require("mongodb");
    var mongolUrl = "mongodb://localhost:27017/hunting";
    var theDb = null;
    
    database.getDb = function(next){
        if(!theDb){
            //connect to the database
            mongodb.MongoClient.connect(mongolUrl, function(err, db){
                if(err){
                    next(err, null);
                } else {
                    theDb = { 
                        db: db,
                        locations: db.collection("locations")     
                    };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    }
})(module.exports);