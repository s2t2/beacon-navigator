"use strict";

var knownBeacons = [
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":50644,
    "minor":34745,
    "details":{
      beaconColor: "Purple",
      displayName: "Eiffel Tower",
      iconName: "md-globe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":51618,
    "minor":2518,
    "details":{
      beaconColor: "Blue",
      displayName: "Bibliothèque François Mitterrand Station",
      iconName: "ios-train",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":29661,
    "minor":10707,
    "details":{
      beaconColor: "Green",
      displayName: "Park Monceau",
      iconName: "ios-basket-outline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
];

var beaconId = function(beacon){
  return beacon.uuid + "..." + beacon.major + "..." + beacon.minor
};

var beaconProximity = function(beacon){
  if (beacon) {
    return beacon.proximity.toLocaleUpperCase()
  } else {
    return "N/A"
  }
};

var beaconDistance = function(beacon){
  if (beacon) {
    return beacon.distance.toFixed(2)
  } else {
    return "N/A"
  }
};

var beaconStrength = function(beacon){
  if (beacon) {
    return beacon.rssi
  } else {
    return "N/A"
  }
};

var beaconPrettyDistance = function(beacon){
  if (beacon) {
    return beacon.distance.toFixed(2) + " meters away (" + beacon.rssi + " strength)"
  } else {
    return "N/A"
  }
};

var beaconPrettyProximity = function(beacon){
  if (beacon) {
    return beacon.proximity.toLocaleUpperCase() + " @ " + beacon.distance.toFixed(2) + " meters (" + beacon.rssi + " strength)"
  } else {
    return "N/A"
  }
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
  beaconProximity,
  beaconDistance,
  beaconStrength,
  beaconPrettyDistance,
  beaconPrettyProximity,
  lookupBeaconDetails
};
