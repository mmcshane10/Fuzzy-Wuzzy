import { FuzzyWuzzy } from './../src/fuzzywuzzy.js';

describe('FuzzyWuzzy', function() {
  let honeycomb;

  beforeEach(function() {
      honeycomb = new FuzzyWuzzy("Honey Comb");
      jasmine.clock().install();
      honeycomb.setHunger();
      honeycomb.setMood();
      honeycomb.setEnergy();
  });

  afterEach(function() {
      jasmine.clock().uninstall();
  });

  it('should have a name, a food level of 10, and mood/energy levels of 20 when it is created', function() {
    expect(honeycomb.name).toEqual("Honey Comb");
    expect(honeycomb.foodLevel).toEqual(10);
    expect(honeycomb.moodLevel).toEqual(20);
    expect(honeycomb.energyLevel).toEqual(20);
  });

  it('should have a food level of 9 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(honeycomb.foodLevel).toEqual(9);
  });

  it('should have a mood level of 18 after 4001 milliseconds', function() {
    jasmine.clock().tick(4001);
    expect(honeycomb.moodLevel).toEqual(18);
  });

  it('should have an energy level of 7 after 65001 milliseconds', function() {
    jasmine.clock().tick(65001);
    expect(honeycomb.energyLevel).toEqual(7);
  });

});
