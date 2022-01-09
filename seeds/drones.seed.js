require('../db/index.js')
const Drone = require("../models/drone.model");

// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


(async function () {
    try {
        const createdDrones = await Drone.create(drones);
        console.log(`Created ${createdDrones.length} drones`)
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit();
    }
})();