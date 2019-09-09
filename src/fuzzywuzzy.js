export class FuzzyWuzzy {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 20;
    this.energyLevel = 20;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 750);
  }

  setEnergy() {
    setInterval(() => {
      this.energyLevel--;
    }, 2000);
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
