var tessel = require('tessel');
var rangefinderLib = require('../');
var ranger = rangefinderLib.use(tessel.port['GPIO']);

// ranger.on('ready', function () {
  console.log('ready')
  setInterval(function () {
    ranger.pulse();
    // console.log(ranger.echoPin.read());
    // Need to: measure the length of pulse received back over echo pin
  }, 1);
  // ranger.on('data', function (data) {
  //   console.log(data);
  // });
// });
