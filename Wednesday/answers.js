console.log("Can I kick it?");

// for (var i = 1; i <= 20; i++) {
// console.log(i);
// }
//
// for (var i = 0; i <= 200; i++) {
// if ( i % 2 === 0 ){
//   console.log(i);
// }
// }
//
// for (var i = 0; i <= 20; i++) {
//
// console.log("Love me, pet me! HSSSSSS!");
//
// }
//
// var catThoughts = ["...human...why you taking pictures of me?..", "...the catnip made me do it...", "...why does the red dot always get away..."]
//
// console.log(catThoughts);
//
// for (var i = 0; i <= 20; i++) {
//   if (i % 2===0){
//     var random = catThoughts[Math.floor(Math.random() * catThoughts.length)];
//     console.log(random);
//   }
//
//
// }

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
