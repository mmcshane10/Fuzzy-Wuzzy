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

    $('.begin-game').show();

    newBear.setHunger();
    newBear.setMood();
    newBear.setEnergy();

    setInterval(function(){
      $('#food-display').text(newBear.foodLevel);
      $('#mood-display').text(newBear.moodLevel);
      $('#energy-display').text(newBear.energyLevel);
    }, 500);

    $("button#feed-button").click(function(event) {
      newBear.feed();
    });

    $("button#pet-button").click(function(event) {
      newBear.pet();
    });

    $("button#sleep-button").click(function(event) {
      newBear.sleep();
    });

    if (newBear.foodLevel === 0) {
      alert("you lose idiot");
    }

  });
});
