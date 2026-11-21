class FitnessAnalytics {
  constructor(data) {
    this.data = data;
  }

  validate() {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      throw new Error("Dataset is empty");
    }
  }

  getActiveUsers() {
    this.validate();
    return this.data.filter((entry) => entry.steps > 7000);
  }

  getAverageCalories() {
    this.validate();
    const total = this.data.reduce((sum, entry) => sum + entry.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    this.validate();
    return this.data.map(
      (entry) => `User ${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`
    );
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

const analytics = new FitnessAnalytics(workoutData);

console.log("Active users (steps > 7000):");
console.log(analytics.getActiveUsers());

console.log("\nAverage calories:");
console.log(analytics.getAverageCalories());

console.log("\nUser summary:");
analytics.getUserSummary().forEach((message) => console.log(message));

console.log("\nEmpty dataset test:");
try {
  const emptyAnalytics = new FitnessAnalytics([]);
  emptyAnalytics.getAverageCalories();
} catch (error) {
  console.log(`Error: ${error.message}`);
}
