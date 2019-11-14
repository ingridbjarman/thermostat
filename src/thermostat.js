'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.MAXIMUM_TEMPERATURE = 32;
  this.temperature = 20;
  this.powerSavingOn = true;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }
  return this.temperature === this.MAXIMUM_TEMPERATURE_PSM;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.isMaxTemp()) {
    return (this.temperature);
  }
  this.temperature += 1
  return (this.temperature);
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1
  return (this.temperature);
};


Thermostat.prototype.isPowerSavingOn = function() {
  return this.powerSavingOn === true;
};

Thermostat.prototype.switchPowerSavingOff = function() {
  this.powerSavingOn = false;
};

Thermostat.prototype.switchPowerSavingOn = function() {
  this.powerSavingOn = true;
};
