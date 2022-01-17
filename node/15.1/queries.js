//display all restaurants:
"db.restaurants.find()";
// all restaurant that have a specific cuisine
'db.restaurants.find({cuisineType:"chinese"})';
// all kosher restaurants
"db.restaurants.find({isKosher: true})";
// display only spcific cities restaurants
'db.restaurants.find({"address.city":"Jerusalem"})';
// display specific restaurant address
'db.restaurants.find({name:"Flyburger"}, {"address":1})';
// display only coords of spec restaurants address
'db.restaurants.find({name:"Flyburger"}, {"address.coords":1})';
// display restaurants in an ascending order by name
"db.restaurants.find().sort({name:1})";
// Write a MongoDb query that should display all restaurants in ascending order by city names.
'db.restaurants.find().sort({"address.city":1})';
// Update a specific restaurant's name
'db.restaurants.updateOne({name:"Hatzilim"}, {$set:{name:"Hatzilim 2000"}})';
// Update a specific restaurant by adding a new review.
'db.restaurants.updateOne({name:"Hatzilim 2000"}, {$push:{reviews:{score:5, review:"I wanted baked eggplants instead of fried and they threw me out",date:"1.1.18"}}})';
// Update all restaurants to be kosher
"db.restaurants.updateMany({ },{$set: {isKosher: true}})";
// Delete a specific restaurant
'db.restaurants.deleteOne({name:"Hatzilim 2000"})';
// Delete all restaurant
"db.restaurant.deleteMany({ })";
// Write a MongoDb query to print all restaurant names
'db.restaurants.find().forEach(function(rest) {print("name: " + rest.name);})';
// Write a MongoDb query to print all restaurant cities
'db.restaurants.find().forEach(function(rest) {print("city: " + rest.address.city);})';
// Write a MongoDb query to print all restaurant coordinates
'db.restaurants.find().forEach(function(rest) {print("city: " + rest.address.coords);})';
// Query for restaurant names that start with a specific alphabet
"db.restaurants.find({name: /B/})";
// Query how many documents you have from the restaurant collection
"db.restaurants.countDocuments()";
// Write a MongoDb query to get restaurants that include reviews from a specific date
'db.restaurants.find({reviews : { $elemMatch:{"date":{$gte : "22-10-2022"}}}})';
"db.restaurants.find({'reviews.date':'22-10-2022'})";
// Write a mongoDb query to display all restaurants average score
'db.restaurants.aggregate([{$project: {reviewsAvg: {$avg: "reviews.score"}}}])';
// Write a mongoDb query to display all restaurants average score.
"db.restaurants.aggregate([{$unwind: '$reviews'},{$group : {_id: '$name', avgScore: { $avg: '$reviews.score'}}}])";
