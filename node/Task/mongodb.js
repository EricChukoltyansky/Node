const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://localhost:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("connected");
    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //   name: "Eric",
    //   age: 32,
    // },(error, result)=>{
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result)
    // });

    db.collection("users").insertMany([
      {
        name: "Jen",
        age: 27,
      },
      {
        name: "Gunthar",
        age: 31,
      },
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert docs')
        }
        console.log(result)
    });
  }
);
