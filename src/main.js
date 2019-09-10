import { FuzzyWuzzy } from './fuzzywuzzy';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#bear-form").submit(function(event) {
    event.preventDefault();


    let animalType = $('#difficulty').val();
    console.log(animalType);
    let animalName = $('#inputted-name').val();
    console.log(animalName);
    let newBear = new FuzzyWuzzy(animalType, animalName);
    console.log(newBear);

    $('form#bear-form').trigger("reset");
    let request = new XMLHttpRequest();
    const url = 'http://api.giphy.com/v1/gifs/random?api_key=m9fH4jBmiZbnscx9MUlcSn6lXL4ABkMp';

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getGifs(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getGifs = function (response) {
      $('#die-gif').html(`<img src=${response.data.images.original.url}>`);
    }


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
