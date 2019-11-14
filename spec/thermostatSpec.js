'use strict';


describe ('thermostat', function() {

  var thermo;
  
  beforeEach(function() {
    thermo = new Thermostat()
  });

  it('starts at 20 degrees when created', function() {
    expect(thermo.getCurrentTemperature()).toEqual(20);

  });

  it('increases the temperature by one degree when told to', function() {
    expect(thermo.increaseTemperature()).toEqual(21);

  });

  it('decreases the temperature by one degree when told to', function() {
    expect(thermo.decreaseTemperature()).toEqual(19);

  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermo.decreaseTemperature();
    }
    expect(thermo.getCurrentTemperature()).toEqual(10);
  });

  it('has Power Saving mode on by default', function() {
    expect(thermo.isPowerSavingOn()).toBe(true);
  });

  it('has the ability to turn PSM off', function() {
    thermo.switchPowerSavingOff();
    expect(thermo.isPowerSavingOn()).toBe(false);
  });

  it('has the ability to turn PSM back on', function() {
    thermo.switchPowerSavingOff();
    expect(thermo.isPowerSavingOn()).toBe(false);
    thermo.switchPowerSavingOn();
    expect(thermo.isPowerSavingOn()).toBe(true);
  });

  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 2; i++) {
      thermo.increaseTemperature();
    }
    thermo.resetTemperature();
    expect(thermo.getCurrentTemperature()).toEqual(20);
  });

  describe('when PSM is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermo.increaseTemperature();
      }
      expect(thermo.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when PSM is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermo.switchPowerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermo.increaseTemperature();
      }
      expect(thermo.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low usage', function() {
        for (var i = 0; i < 3; i++) {
          thermo.decreaseTemperature();
        }
        expect(thermo.energyUsage()).toEqual('Low Usage');
      });
    });
  
    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium usage', function() {
        expect(thermo.energyUsage()).toEqual('Medium Usage');
      });
    });
  
    describe('when the temperature is anything else', function() {
      it('it is considered high usage', function() {
        thermo.switchPowerSavingOff();
        for (var i = 0; i < 6; i++) {
          thermo.increaseTemperature();
        }
        expect(thermo.energyUsage()).toEqual('High Usage');
      });
    });
  });
});