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
})