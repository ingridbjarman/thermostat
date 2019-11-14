'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MEDIUM_USAGE_LIMIT = 18;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingOn = true;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
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

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
    return 'Low Usage';
  }
  if (this.temperature >= this.MEDIUM_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMPERATURE_PSM) {
    return 'Medium Usage';
  }
  return 'High Usage';
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

