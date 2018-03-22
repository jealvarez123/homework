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
var catThoughts = ["...human...why you taking pictures of me?..", "...the catnip made me do it...", "...why does the red dot always get away..."]

console.log(catThoughts);

for (var i = 0; i <= 20; i++) {
  if (i % 2===0){
    var random = catThoughts[Math.floor(Math.random() * catThoughts.length)];
    console.log(random);
  }


}
