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
    }, 5000);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 2000);
  }

  setEnergy() {
    setInterval(() => {
      this.energyLevel--;
    }, 5000);
  }

}
