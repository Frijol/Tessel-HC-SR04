var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Rangefinder (hardware, callback) {
  var self = this;
  // Port assignment
  self.hardware = hardware;
  // Pin assignment
  self.triggerPin = hardware.pin['G4'];
  self.echoPin = hardware.pin['G3'];
  // Emit ready event
  self.emit('ready');
  if (callback) {
    callback(null, self);
  }
}

util.inherits(Rangefinder, EventEmitter);

// Tells the rangefinder to send out a pulse
Rangefinder.prototype.pulse = function (callback) {
  var self = this;
  // Send a pulse
  self.triggerPin.output(0);
  setTimeout(function () {
    self.triggerPin.output(1);
    setTimeout(function () {
      self.triggerPin.output(0);
      var duration = 0;
      // This doesn't work yet
      // duration = echoPin.pulseIn(true);
      // var distance = duration / 60;
      if (callback) {
        callback(duration);
      }
    }, 1);
  }, 2);
};

function use (hardware, callback) {
  return new Rangefinder(hardware, callback);
}

exports.Rangefinder = Rangefinder;
exports.use = use;
