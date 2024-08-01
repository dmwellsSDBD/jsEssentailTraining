/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class CoffeeCup {
    constructor(
        // Defines parameters:
        name,
        volume,
        color,
        brand,
        magnetLid,
    ) {
        // Define properties:
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.brand = brand;
        this.magnetLid = magnetLid;
        this.lidOpen = lidOpen;
    }
    // Add methods like normal functions:
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
        
}