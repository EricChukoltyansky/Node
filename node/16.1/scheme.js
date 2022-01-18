// ONE-TO-ONE
// Prefer key-value pair embedded in the document.
// For example, an employee can work in one and only one department.
// {
//     "_id": "ObjectId('AAA')",
//     "name": "Joe Karlsson",
//     "company": "MongoDB",
//     "twitter": "@JoeKarlsson1",
//     "twitch": "joe_karlsson",
//     "tiktok": "joekarlsson",
//     "website": "joekarlsson.com"
// }

// ONE-TO-FEW
// Prefer embedding for one-to-few relationships.
// {
//     "_id": "ObjectId('AAA')",
//     "name": "Joe Karlsson",
//     "company": "MongoDB",
//     "twitter": "@JoeKarlsson1",
//     "twitch": "joe_karlsson",
//     "tiktok": "joekarlsson",
//     "website": "joekarlsson.com",
//     "addresses": [
//         { "street": "123 Sesame St", "city": "Anytown", "cc": "USA" },
//         { "street": "123 Avenue Q",  "city": "New York", "cc": "USA" }
//     ]
// }

// ONE-TO-MANY

// Products
// {
//     "name": "left-handed smoke shifter",
//     "manufacturer": "Acme Corp",
//     "catalog_number": "1234",
//     "parts": ["ObjectID('AAAA')", "ObjectID('BBBB')", "ObjectID('CCCC')"]
// }

// Parts
// {
//     "_id" : "ObjectID('AAAA')",
//     "partno" : "123-aff-456",
//     "name" : "#4 grommet",
//     "qty": "94",
//     "cost": "0.94",
//     "price":" 3.99"
// }

// ONE-TO-SQUILIIIONS

// Hosts
// {
//     "_id": ObjectID("AAAB"),
//     "name": "goofy.example.com",
//     "ipaddr": "127.66.66.66"
// }

// Log Messages
// {
//     "time": ISODate("2014-03-28T09:42:41.382Z"),
//     "message": "cpu is on fire!",
//     "host": ObjectID("AAAB")
// }

// MANY-TO-MANY

// Users
// {
//     "_id": ObjectID("AAF1"),
//     "name": "Kate Monster",
//     "tasks": [ObjectID("ADF9"), ObjectID("AE02"), ObjectID("AE73")]
// }

// Tasks
// {
//     "_id": ObjectID("ADF9"),
//     "description": "Write blog post about MongoDB schema design",
//     "due_date": ISODate("2014-04-01"),
//     "owners": [ObjectID("AAF1"), ObjectID("BB3G")]
// }

// RECAP
// One-to-One - Prefer key value pairs within the document
// One-to-Few - Prefer embedding
// One-to-Many - Prefer embedding
// One-to-Squillions - Prefer Referencing
// Many-to-Many - Prefer Referencing

// GENERAL RULES
// Rule 1: Favor embedding unless there is a compelling reason not to.
// Rule 2: Needing to access an object on its own is a compelling reason not to embed it.
// Rule 3: Avoid joins and lookups if possible, but don't be afraid if they can provide a better schema design.
// Rule 4: Arrays should not grow without bound. If there are more than a couple of hundred documents on the many side,
//         don't embed them; if there are more than a few thousand documents on the many side,
//         don't use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.
// Rule 5: As always, with MongoDB, how you model your data depends entirely on your particular application's data access patterns.
//         You want to structure your data to match the ways that your application queries and updates it.
