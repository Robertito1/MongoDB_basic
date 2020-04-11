var url = "mongodb://localhost:27017/newdb";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.collection("myMovies").findOne({}, function (err, res) {
    if (err) throw err;
    console.log("THIS IS QUESTION A");

    console.log(res);

    dbo
      .collection("myMovies")
      .find({ rating: { $eq: 7 } })
      .toArray(function (err, result) {
        if (err) throw err;
        console.log("THIS IS QUESTION B");
        console.log(result);

        dbo
          .collection("myMovies")
          .find({}, { projection: { _id: 0 } })
          .toArray(function (err, result) {
            if (err) throw err;
            console.log("THIS IS QUESTION C");
            console.log(result[0].movie);
            console.log(result[1].movie);
            console.log(result[2].movie);
            console.log(result[3].movie);
            console.log(result[4].movie);

            db.close();
          });
      });
  });
});
