var tessel = require('tessel');
var rangefinderLib = require('../');
var ranger = rangefinderLib.use(tessel.port['GPIO']);

// ranger.on('ready', function () {
  console.log('ready')
  setInterval(function () {
    ranger.pulse();
    // console.log(ranger.echoPin.read());
  }, 100);
  // ranger.on('data', function (data) {
  //   console.log(data);
  // });
// });

// triggerPin = tessel.port['GPIO'].digital[0];
// echoPin = tessel.port['GPIO'].analog[0];
// // Turn on
// triggerPin.output[0];
// setTimeout(function () {
//   triggerPin.output[1];
//   setTimeout(function () {
//     self.triggerPin.output[0];
//     self.emit('ready');
//     if (callback) {
//       callback(null, self);
//     }
//   }, 10);
// }, 20);