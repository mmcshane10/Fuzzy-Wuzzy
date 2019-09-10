export class FuzzyWuzzy {

  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 20;
    this.energyLevel = 20;
  }

  setHunger() {
    let interval;
    if (this.animal === "Squirrel") {
      interval = 2000;
    } else if (this.animal === "Bear") {
      interval = 1000;
    } else if (this.animal === "Fox") {
      interval = 500;
    } else {
      interval = 10;
    }
    setInterval(() => {
      this.foodLevel--;
    }, interval);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 500);
  }

  setEnergy() {
    setInterval(() => {
      this.energyLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    if (this.foodLevel <= 0) {
      return `Sorry, you killed ${this.name}.`
    } else {
      this.foodLevel = 10;
    }
  }

  didFuzzyGetSad() {
    if (this.moodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  pet() {
    this.moodLevel = 20;
  }

  didFuzzyFallAsleep() {
    if (this.energyLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  sleep() {
    this.energyLevel = 20;
  }

}
