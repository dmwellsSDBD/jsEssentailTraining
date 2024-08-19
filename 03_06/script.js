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
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum); // Using Dot Notation
console.log("Strap length L:", backpack.strapLength.left); // Dot Notation will be used most
                                                          // of the time

var query = "pocketNum"; // Use a variable to hold a property value

console.log("The pocketNum value:", backpack[query]); // Using Bracket Notation
// This cannot be done with dot-notation, it will break the script.
