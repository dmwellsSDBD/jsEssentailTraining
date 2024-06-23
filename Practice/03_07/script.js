/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const marker = {
    name: "Sharpie King Size",
    color: "black",
    permanent: true,
    capOn: true,
    toggleCap: function (capStatus) {
        this.capOn = capStatus;
    },
};

console.log("This marker object:", marker);
console.log("The marker color is:", marker.color);

if (marker.permanent == true) {
    var permMark = "Yes";
} else {
    var permMark = "No";
}

console.log("Is this a permanent marker (Dot Notation):", marker.permanent);
console.log("Is this a permanent marker (Square Brackets):", marker[permMark]);
console.log("Is this a permanent marker (Using a Variable):", permMark);

const cellPhone = {
    make: "iPhone",
    model: "iPhone 14 Pro Max",
    opSys: "iOS 17.5.1",
    serialNum: "F4KWYRF7DT", 
    storage: "256 GB",
    color: "black",
    fullCharge: false,
    toggleCharge: function (chargeStatus) {
        this.fullCharge = chargeStatus;
    }
}

console.log("The cell phone object:", cellPhone);
console.log("This cell phone is an:", cellPhone.model);
console.log("The color of my cell phone is:", cellPhone.color);
