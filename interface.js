$(document).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + '°C');  
  };
  
  updateTemperature();

  $('button').mouseup(function() {
    $(this).blur();
  });

  $('.PSM').text('Power Saving Mode: ON');

  $('.up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('.down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('.PSM').on('click', function() {
    if (thermostat.isPowerSavingOn() === true) {
      thermostat.switchPowerSavingOff();
      console.log('switching off')
      $('.PSM').text('Power Saving Mode: OFF');
    }
    else {
      thermostat.switchPowerSavingOn();
      console.log('swithing on')
      $('.PSM').text('Power Saving Mode: ON');
    }
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp + '°C');
    })
  })
})