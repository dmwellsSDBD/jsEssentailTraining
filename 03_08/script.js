/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,

  // A Method is a function inside of an Object Property
  
  toggleLid: function (lidStatus) { // This is a Method
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) { // This is a Method
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);
console.log("Left after:", backpack.strapLength.left);

console.log("Lid before toggleLid:", backpack.lidOpen)
backpack.toggleLid(true);
console.log("Lid after toggleLid:", backpack.lidOpen)