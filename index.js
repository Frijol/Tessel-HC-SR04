// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Rangefinder (hardware, callback) {
  var self = this;
  // Port assignment
  self.hardware = hardware;
  // Pin assignment
  self.triggerPin = hardware.pin['G3'];//digital[0];
  self.echoPin = hardware.pin['G4'];
  // Emit ready event
  self.emit('ready');
  if (callback) {
    callback(null, self);
  }
}

util.inherits(Rangefinder, EventEmitter);

Rangefinder.prototype.pulse = function (callback) {
  var self = this;
  // Send a pulse
  self.triggerPin.output(0);
  setTimeout(function () {
    self.triggerPin.output(1);
    setTimeout(function () {
      self.triggerPin.output(0);
      if (callback) {
        callback();
      }
    }, 0.01);
  }, 2);
};

function use (hardware, callback) {
  return new Rangefinder(hardware, callback);
}

exports.Rangefinder = Rangefinder;
exports.use = use;