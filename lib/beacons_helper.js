"use strict";

var knownBeacons = [
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":50644,
    "minor":34745,
    "details":{
      color: "Purple",
      displayName:"Eiffel Tower"
    }
  },
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":51618,
    "minor":2518,
    "details":{
      color: "Blue",
      displayName: "Bibliothèque François Mitterrand Station"
    }
  },
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":29661,
    "minor":10707,
    "details":{
      color: "Green",
      displayName: "Park Monceau"
    }
  }
];

var beaconId = function(beacon){
  return beacon.uuid + "..." + beacon.major + "..." + beacon.minor
};

// @param [Array] detectedBeacons An array in the form of a beaconsDidRangeResult. See data/mocks/beacons-did-range/ for examples.
var lookupBeaconDetails = function(detectedBeacons){
  var component = this;
  return detectedBeacons.map(function(db){
    var match = knownBeacons.filter(function(kb){
      return beaconId(db) == beaconId(kb);
    })[0];
    db.details = match.details; // merge beacon details into the detection results.
    return db;
  })
};

module.exports = {
  knownBeacons,
  beaconId,
  lookupBeaconDetails
};
