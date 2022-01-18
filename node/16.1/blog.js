const { ObjectID } = require("bson");
const { MongoClient, ObjectId } = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://localhost:27017";
const databaseName = "blog";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("connected");
    const db = client.db(databaseName);

    db.collection("articles").insertOne(
      {
        title: "Hello Moon",
        user_id: 123456,
        text: "Why is the moon made of cheese?",
        comments: [
          { text: "FU, liberal scum", user_id: 6543231, votes: [1987654] },
          { text: "FU, conservative scum", user_id: 9847654, votes: [132345, 6554321] },
        ],
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result);
      }
    );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 27,
    //     },
    //     {
    //       name: "Gunthar",
    //       age: 31,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert docs");
    //     }
    //     console.log(result);
    //   }
    // );
  }
);
