const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please check your data entry, no name is specified."]
  },
  rating: {
    type:Number,
    min:1,
  max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({

  rating: 10,
  review:"peaches are good."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name : String,
  age: Number,
  favouriteFruit:fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const Mango = new Fruit({
  name: "Mango",
  score:8,
  review:"I love Mangoes."
});

 Mango.save();

Person.updateOne({name:"John"},{favouriteFruit:Mango})
//
// const person = new Person({
//   name: "John",
//   age : 37,
//   favouriteFruit:Mango
// });
// //
// person.save();
//
// const kiwi = new Fruit({
//   name:"kiwi",
//   score:10,
//   review: "kiwi is good."
// });
//
//
// const orange = new Fruit({
//   name:"orange",
//   score:10,
//   review: "sour for me."
// });
//
//
// const banana = new Fruit({
//   name:"banana",
//   score:10,
//   review: "weird texture."
// });
//
// Fruit.insertMany([
//   kiwi,orange,banana
// ],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("succesfully saved all fruits.");
//   }
// });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

//
// Fruit.updateOne({_id:"62b6dd0f950598603eb0825e"},{name:"Peach"},function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("succesfully updated document.");
//   }
// });

// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the document");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted all the document.");
//   }
// });
