import { FuzzyWuzzy } from './fuzzywuzzy';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#bear-form").submit(function(event) {
    event.preventDefault();

    $('form#bear-form').trigger("reset");

    let bearName = $('#inputted-name').val();
    let newBear = new FuzzyWuzzy(bearName);
    console.log(newBear);

    $('.begin-game').show();
    $('.game-over').hide();

    newBear.setHunger();
    newBear.setMood();
    newBear.setEnergy();

    let id = setInterval(function(){
      $('#food-display').text(newBear.foodLevel);
      if (newBear.foodLevel === 0) {
        $('.begin-game').hide();
        $('#bear-form').show();
        $('.game-over').show();
        clearInterval(id);
      }
      $('#mood-display').text(newBear.moodLevel);
      $('#energy-display').text(newBear.energyLevel);
    }, 0);

    $("button#feed-button").click(function(event) {
      newBear.feed();
    });

    $("button#pet-button").click(function(event) {
      newBear.pet();
    });

    $("button#sleep-button").click(function(event) {
      newBear.sleep();
    });

  });
});
