// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 3,
    review: "Pretty solid as fruit"
})

//fruit.save();

// fruit.updateOne(
//     {_id: "60323da709668f97b17c57e2"},
//     {name: "Peach"}, function(err) {
//         if (err){
//             console.log(err)
//         } else {
//             console.log("success")
//         }
//     });

Fruit.deleteOne(
    {name: "orange"},
    function(err) {
        if (err){
            console.log(err)
        } else {
            console.log("deleted")
        }
    });


// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 10,
//     review: "sweet as desert"
// })


// const orange = new Fruit ({
//     name: "orange",
//     rating: 10,
//     review: "good on trips outside in the cold"
// })

// const banana = new Fruit ({
//     name: "banana",
//     rating: 10,
//     review: "makes you happy"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Success")
//     }
// })

Fruit.find(function(err, fruits){
    
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})






const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit"
})

const potato = new Fruit({
    name: "lemon",
    score: 9,
    review: "ground fruit"
})


pineapple.save();

const person = new Person ({
    name: "amy",
    age: 12,
    favoriteFruit: pineapple
})

person.save();
fruit.save();

//Person.deleteMany({name: 'Andreas'}, function(err){});


// const insertDocuments = function(db, callback) {

//     // Get the documents collection
  
//     const collection = db.collection('fruits');
  
//     // Insert some documents
  
//     collection.insertMany([ {
  
//       name: "Banana",
  
//       score: 9,
  
//       review: "Great stuff!!"
  
//     }], function(err, result) {
  
//       assert.equal(err, null);
  
//       console.log(result);
  
//       assert.equal(1, result.result.n);
  
//       assert.equal(1, result.ops.length);
  
//       console.log("Inserted 1 document into the collection");
  
//       callback(result);
  
//     });
  
//   }
  
  