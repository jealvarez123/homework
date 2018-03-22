console.log("Can I kick it?");

for (var i = 1; i <= 20; i++) {
console.log(i);
}

for (var i = 0; i <= 200; i++) {
if ( i % 2 === 0 ){
  console.log(i);
}
}

for (var i = 0; i <= 20; i++) {

console.log("Love me, pet me! HSSSSSS!");

}

var catThoughts = ["...human...why you taking pictures of me?..", "...the catnip made me do it...", "...why does the red dot always get away..."]

console.log(catThoughts);

for (var i = 0; i <= 20; i++) {
  if (i % 2===0){
    var random = catThoughts[Math.floor(Math.random() * catThoughts.length)];
    console.log(random);
  }


}

for (var i = 1; i <=100 ; i++) {
  if (i % 3===0 && i % 5 ===0) {
    console.log("fizzbuzz");


  } else if (i % 5 ===0 ) {
    console.log("buzz");

  } else if (i % 3 === 0 ) {
    console.log("fizz");

  }  else {
    console.log(i);
  }


}

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]


// Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".

const thom = ["Gameboy", 1000, "Christchurch"]

// Karolin just had her birthday; change Karolin's array to reflect her being a year older.

const karolin = ["Karolin", 17, "New York"]

// Change Matt H's hometown from Philadelphia to "Gotham City".

const matt = ["Matt H", 186, "Gotham City"]

// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".

const kristyn = ["Kristyn", 5, "Brooklyn"]
