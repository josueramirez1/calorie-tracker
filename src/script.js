import logMessage from "./logger.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max Calories exceeded");
    }
  }
}

const josueCalorieTracker = new CalorieTracker(1520);
const katieCalorieTracker = new CalorieTracker(1200);

josueCalorieTracker.trackCalories(500);
josueCalorieTracker.trackCalories(500);
josueCalorieTracker.trackCalories(500);
katieCalorieTracker.trackCalories(300);
console.log(katieCalorieTracker);
