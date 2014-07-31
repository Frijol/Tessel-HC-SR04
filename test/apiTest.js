var test = require('tinytap');
var async = require('async');

var tessel = require('tessel');
var rangefinderLib = require('../');
var portname = process.argv[2] || 'GPIO';
var ranger;

var timeout = 1000;

test.count(3);

async.series([
  // Test connecting
  test('Connecting to device', function (t) {
    // Connect
    ranger = rangefinderLib.use(tessel.port[portname], function (err, ranger) {
      t.ok(ranger, 'The rangefinder object was not returned');
      t.equal(err, undefined, 'There was an error connecting: ' + err);
      // Check for ready event
      var readyTimer = setTimeout(function () {
        t.ok(false, 'Failed to emit a ready event in a reasonable amount of time');
        t.end();
      }, timeout);
      ranger.on('ready', function () {
        clearTimeout(readyTimer);
        t.ok(true, 'Ready was emitted');
      });
      // Fail if we get an error
      ranger.on('error', function (err) {
        t.ok(false, 'error caught: ' + err);
        t.end();
      });
    });
  })
  
  ]);
