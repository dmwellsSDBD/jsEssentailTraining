/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Shoes{
    constructor(
        // Defines parameters:
        name,
        size,
        color,
        brand,
        type,
        hasLaces,
    ) {
        // Define properties:
        this.name = name;
        this.size = size;
        this.color = color;
        this.brand = brand;
        this.type = type;
        this.hasLaces = hasLaces
    }
    // Add methods like normal functions:
    toggleLaces(lacesStatus) {
        this.hasLaces = lacesStatus;
    }
}

export default Shoes;