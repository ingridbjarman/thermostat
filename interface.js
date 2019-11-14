$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + '°C');  
  };
  
  updateTemperature();

  $('.up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('.down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });
})