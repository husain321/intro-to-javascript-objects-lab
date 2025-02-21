const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
//  console.dir(pokemon, { maxArrayLength: null })
 // console.log(game)


  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty=["Easy", "Med" ,"Hard"];
console.log(game.difficulty);
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
 pokemon.forEach((Pokémon) => {
if(Pokémon.starter===true){
  game.party.push(Pokémon);
};

});
//console.dir(game.party);
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/
game.party.push(
pokemon[5],
pokemon[10],
pokemon[17],
);
//console.dir(game.party);
/* pokemon.forEach((Pokémon) => {
  if(Pokémon.starter===true&&Pokémon.type===normal&&Pokémon.hp>=65){
    game.party.push(Pokémon);
  };
  console.dir(game.party);
  });
*/

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
/*
/*for (let i=0;i<game.gyms.length;i++) {
if(game.gyms[i].difficulty<3){
 game.gyms[i].completed=true;
}
}
console.log("Exercise 6: ",game.gyms);      //this code work 
*/

game.gyms.forEach(pgyms=>{
  if(pgyms.difficulty<3){
    pgyms.completed=true;
   }
});
console.log("Exercise 6: ",game.gyms); 
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
/*
//console.log('before replaced',game.party);
game.party.forEach((i,property) => {
  if(property.starter==true){
    for(let i=0;i<=game.party.length;i++){
    game.party.splice(i,1,game.party[i+1]);
  }}
});
console.log('Exercise 7 here: -after- replaced',game.party); //Is not corct 

// game.party.forEach((i,property) => {
  if(property==true)
  game.party.splice(i,1,game.party[i+1])  
// });

Maybe (this) is the buter 
*/
/*
 const evolves= pokemon.starter=true;
function pokemon(d){
for(let i=0;i>d.length;i++){
if(d[i]=evolves){
  evolves= d.starter.splice(i,1,d[i+1])
};
};
console.log(evolves);
};
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log("-------------Exercise 8 here:--------------")
game.party.forEach((partyPokemon)=>{
console.log(`Exercise 8: ${partyPokemon.name}`);
});
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log('--------------Exercise 9:----------------');
for(propaty of pokemon){
  if(propaty.starter){
  console.log(propaty.name,':',propaty.starter);
  }
};

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly.
 This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
console.log('------------Exercise 10 here-------------');
game.catchPokemon = function(pokemonObj){
  game.party.push(pokemonObj) // Push the pokemonObj to the party array
};
game.catchPokemon(game.party[25]);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the
 number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
console.log('--------Exercise 11 and 10 here: -------------');
game.catchPokemon=function(pokemonObj){
  this.party.push(pokemonObj);// Push the pokemonObj to the party array
  console.log('pokeballs before Catching:',game.items[1]);
  game.items[1].quantity=game.items[1].quantity-1;
  //game.items[1].quantity -= 1;
  console.log('pokeballs after Catching:',game.items[1]);
};
game.catchPokemon(pokemon[16]);
console.log('pokeballs after Catching:',game.party);
console.log('Exercise 11',game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach(pgyms=>{
  if(pgyms.difficulty<6){
    pgyms.completed=true;
   }
});
console.log("Exercise 12: ",game.gyms); 

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, 
the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus= function(){
const gymTally={
  completed:0,
  incomplete:0,
};
for(let i=0;i<game.gyms.length;i++){
  if (game.gyms[i].completed === true){
    gymTally.completed += 1;
} else{
    gymTally.incomplete += 1;
    }
}
console.log("Gym logged value would be: ",gymTally);
};
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
 //partyCount.game.party();
//  game.party.partyCount= function partyCount(){
// for(let i=0;i>game.party.length;i++){
// let totalNumber=i+totalNumber;
// console.log(totalNumber);
// };
//return`number of Pokemon in the party ${totalNumber} `
// };
game.partyCount = function () {
  return this.party.length;
};
console.log('Exercise 14 -number of Pokemon in the party:  '+game.partyCount())

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach(pgyms=>{
  if(pgyms.difficulty<8){
    pgyms.completed=true;
   }
});
console.log("Exercise 15: ",game.gyms); 
/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.
Solve Exercise 16 here:
*/
console.log("Exercise 16: ",game);
