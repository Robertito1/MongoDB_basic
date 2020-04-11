var url = "mongodb://localhost:27017/";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var base = [
    { name: "john", address: "highway 37" },
    { name: "peter", address: "lowstreet 4" },
    { name: "amy", address: "appleway 652" },
    { name: "hannah", address: "mountain 21" },
    { name: "michael", address: "valley 345" },
    { name: "sandy", address: "ocean blvd 2" },
    { name: "betty", address: "green grass 1" },
    { name: "richard", address: "sky st 1" },
    { name: "susan", address: "one way 98" },
    { name: "vicky", address: "yellow garden 2" },
    { name: "ben", address: "park lane 2" },
    { name: "william", address: "central srt 954" },
    { name: "chuck", address: "main road 989" },
    { name: "viola", address: "sideway 1633" }
  ];

  dbo.collection("interns").insertMany(base, function(err, result) {
    if (err) throw err;
    console.log("number of documents inserted : " + result.insertedCount);
    db.close();
  });
});
