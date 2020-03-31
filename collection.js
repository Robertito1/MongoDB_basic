var url = "mongodb://localhost:27017/newdb";
var MongoClient = require('mongodb').MongoClient ;

MongoClient.connect(url,function(err,db){
    if (err) throw err ;
    var dbo = db.db("mydb");

    dbo.createCollection("interns" ,  function(err,result){
        if (err) throw err;
        console.log("interns collection is created !");
        db.close();
    });
})