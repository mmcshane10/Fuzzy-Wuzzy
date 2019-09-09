import { FuzzyWuzzy } from './fuzzywuzzy';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#bear-form").submit(function(event) {
    event.preventDefault();

    let bearName = $('#inputted-name').val();
    let newBear = new FuzzyWuzzy(bearName);
    console.log(newBear);

    newBear.setHunger();
    newBear.setMood();
    newBear.setEnergy();

    setInterval(function(){
      $('#food-display').text(newBear.foodLevel);
      $('#mood-display').text(newBear.moodLevel);
      $('#energy-display').text(newBear.energyLevel);
    }, 1000);
  });
});
