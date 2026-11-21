class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance is required to calculate fare");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative");
    }
    const baseFare = 50;
    const perKm = 12;
    return baseFare + this.distance * perKm;
  }
}

const rider = new User("Kavya", 4.8);
const driver = new Driver("Suresh", 4.6, { model: "Swift Dzire", number: "UP85 AB 1234" });

console.log(`Rider: ${rider.name} (${rider.rating})`);
console.log(`Driver: ${driver.name} (${driver.rating}) | Vehicle: ${driver.vehicle.model} - ${driver.vehicle.number}`);
console.log("");

const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -5),
  new Trip("Mathura", "Delhi")
];

trips.forEach((trip) => {
  try {
    const fare = trip.calculateFare();
    console.log(`Trip ${trip.fromLocation} -> ${trip.toLocation}: Fare Rs. ${fare}`);
  } catch (error) {
    console.log(`Trip ${trip.fromLocation} -> ${trip.toLocation}: Error - ${error.message}`);
  }
});
