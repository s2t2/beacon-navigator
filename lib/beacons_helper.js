"use strict";

var d3 = require("d3");

var unknownBeaconDetails = {
  displayName: "Unregistered Beacon",
  iconName: "ios-alert-outline",
  description: "Detailed information has not yet been registered for this beacon."
};

// These beacons were given to us for testing purposes. We assign additional details to represent real-world beacons.
var knownBeacons = [
  {
    beaconColor: "PURPLE",
    uuid:"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    major:50644,
    minor:34745,
    details:{
      displayName: "Eiffel Tower",
      iconName: "md-map", // "md-globe",
      description: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed in 1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015. The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris."
    }
  },
  {
    beaconColor: "BLUE",
    uuid:"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    major:51618,
    minor:2518,
    details:{
      displayName: "Bibliothèque François Mitterrand Station",
      iconName: "ios-train",
      description: "is a station of the Paris Métro and RER, named after the former French president, François Mitterrand, and serving the area surrounding the new building of the Bibliothèque nationale de France (BnF), whose site near the station is also named after Mitterrand, and the Paris Diderot University. It is a transfer point between Line 14 of the Paris Metro and the RER C. It is situated on the Paris–Bordeaux railway."
    }
  },
  {
    beaconColor: "GREEN",
    uuid:"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    major:29661,
    minor:10707,
    details:{
      displayName: "Park Monceau",
      iconName: "ios-basket-outline",
      description: "is a public park situated in the 8th arrondissement of Paris, France, at the junction of Boulevard de Courcelles, Rue de Prony and Rue Georges Berger. At the main entrance is a rotunda. The park covers an area of 8.2 hectares (20.3 acres)."
    }
  }
];

//
// BEACON INSTANCE METHODS
//

var beaconId = function(beacon){
  return beacon.uuid + "..." + beacon.major + "..." + beacon.minor; // the unique identifier for a given beacon is a composite of its "uuid", "major", and "minor" attributes.
};

//
// KNOWN BEACON INSTANCE METHODS
//

// @param [String] beaconColor The color of one of our known test beacons. Expects one of "PURPLE", "BLUE", or "GREEN".
var beaconIdOfColor = function(beaconColor){
  var beacon = knownBeacons.filter(function(kb){
    return kb.beaconColor == beaconColor;
  })[0]
  return beaconId(beacon);
};

//
// DETECTED BEACON METHODS
//

// @param [Array] detectedBeacons An array in the form of beaconsDidRangeResult["beacons"]. See data/mocks/beacons-did-range/ for examples.
var mergeBeaconDetails = function(detectedBeacons){
  return detectedBeacons.map(function(db){
    var match = knownBeacons.filter(function(kb){
      return beaconId(db) == beaconId(kb);
    })[0];
    if (match) {
      db.details = match.details; // merge beacon details into detection results.
    } else {
      db.details = unknownBeaconDetails;
    };
    return db;
  });
};

// Use this function to identify nearby beacons, including unknown beacons, and log them.
// @param [Array] detectedBeacons An array in the form of beaconsDidRangeResult["beacons"]. See data/mocks/beacons-did-range/ for examples.
var logBeacons = function(detectedBeacons){
  var near = detectedBeacons.filter(function(db){  return db.proximity == "near";  });
  var far = detectedBeacons.filter(function(db){  return db.proximity == "far";  });
  var whereverYouAre = detectedBeacons.filter(function(db){  return db.proximity == "immediate";  });
  console.log("------------------");
  console.log("NOW: " + Date.now());
  console.log("LOC: " + whereverYouAre.map(function(db){  return beaconId(db);  }));
  console.log("NEAR: " + near.map(function(db){  return beaconId(db);  }));
  console.log("FAR: " + far.map(function(db){  return beaconId(db);  }));
};

// Use this function to identify nearby beacons, including unknown beacons, and log them
// ... to CSV format with pipe-delimited values
// ... using the column names: "timestamp | uuid | major | minor | prox | dist | strength".
// @param [Array] detectedBeacons An array in the form of beaconsDidRangeResult["beacons"]. See data/mocks/beacons-did-range/ for examples.
var logBeaconsToCSV = function(detectedBeacons){
  var timestamp = Date.now();
  detectedBeacons.forEach(function(db){
    console.log(
      timestamp +
      " | " + db.uuid +
      " | " + db.major +
      " | " + db.minor +
      " | " + beaconProximity(db) +
      " | " + beaconDistance(db) +
      " | " + beaconStrength(db)
    )
  })
};

// Use this function to track the proximity of known beacons.
// @param [Array] detectedBeacons An array in the form of beaconsDidRangeResult["beacons"]. See data/mocks/beacons-did-range/ for examples.
var logKnownBeacons = function(detectedBeacons){
  var purple = detectedBeacons.filter(function(db){  return beaconId(db) == beaconIdOfColor("PURPLE");  })[0];
  var blue = detectedBeacons.filter(function(db){  return beaconId(db) == beaconIdOfColor("BLUE");  })[0];
  var green = detectedBeacons.filter(function(db){  return beaconId(db) == beaconIdOfColor("GREEN");  })[0];
  console.log("------------------");
  console.log("NOW: " + Date.now());
  console.log("PURPLE: " + beaconPrettyProximity(purple));
  console.log("BLUE: " + beaconPrettyProximity(blue));
  console.log("GREEN: " + beaconPrettyProximity(green));
};

// Use this function to log the proximity of known beacons
// ... to CSV format with pipe-delimited values
// ... using the column names: "timestamp | purple_prox | purple_dist | purple_strength | blue_prox | blue_dist | blue_strength | green_prox | green_dist | green_strength".
// @param [Array] detectedBeacons An array in the form of beaconsDidRangeResult["beacons"]. See data/mocks/beacons-did-range/ for examples.
var logKnownBeaconsToCSV = function(detectedBeacons){
  var purple = detectedBeacons.filter(function(db){  return beaconId(db) == beaconIdOfColor("PURPLE");  })[0];
  var blue = detectedBeacons.filter(function(db){  return beaconId(db) == beaconIdOfColor("BLUE");  })[0];
  var green = detectedBeacons.filter(function(db){  return beaconId(db) == beaconIdOfColor("GREEN");  })[0];
  console.log(
    Date.now() +
    " | " + beaconProximity(purple) +
    " | " + beaconDistance(purple) +
    " | " + beaconStrength(purple) +
    " | " + beaconProximity(blue) +
    " | " + beaconDistance(blue) +
    " | " + beaconStrength(blue) +
    " | " + beaconProximity(green) +
    " | " + beaconDistance(green) +
    " | " + beaconStrength(green)
  );
};

//
// DETECTED BEACON INSTANCE METHODS
//

// @param [Object] beacon An instance of an object inside the beaconsDidRangeResult["beacons"] array. See data/mocks/beacons-did-range/ for examples.
// ... This param can be null if representing a known beacon that does not show up in a detection result. See logKnownBeacons and logKnownBeaconsToCSV.
var beaconProximity = function(beacon){
  if (beacon) {
    return beacon.proximity.toLocaleUpperCase();
  } else {
    return "N/A";
  };
};

// @param [Object] beacon An instance of an object inside the beaconsDidRangeResult["beacons"] array. See data/mocks/beacons-did-range/ for examples.
// ... This param can be null if representing a known beacon that does not show up in a detection result. See logKnownBeacons and logKnownBeaconsToCSV.
var beaconDistance = function(beacon){
  if (beacon) {
    return beacon.distance.toFixed(2);
  } else {
    return "N/A";
  };
};

// @param [Object] beacon An instance of an object inside the beaconsDidRangeResult["beacons"] array. See data/mocks/beacons-did-range/ for examples.
// ... This param can be null if representing a known beacon that does not show up in a detection result. See logKnownBeacons and logKnownBeaconsToCSV.
var beaconStrength = function(beacon){
  if (beacon) {
    return beacon.rssi;
  } else {
    return "N/A";
  };
};

// @param [Object] beacon An instance of an object inside the beaconsDidRangeResult["beacons"] array. See data/mocks/beacons-did-range/ for examples.
// ... This param can be null if representing a known beacon that does not show up in a detection result. See logKnownBeacons and logKnownBeaconsToCSV.
var beaconPrettyDistance = function(beacon){
  if (beacon) {
    return beacon.distance.toFixed(2) + " meters away (" + beacon.rssi + " strength)";
  } else {
    return "N/A";
  };
};

// @param [Object] beacon An instance of an object inside the beaconsDidRangeResult["beacons"] array. See data/mocks/beacons-did-range/ for examples.
// ... This param can be null if representing a known beacon that does not show up in a detection result. See logKnownBeacons and logKnownBeaconsToCSV.
var beaconPrettyProximity = function(beacon){
  if (beacon) {
    return beacon.proximity.toLocaleUpperCase() + " @ " + beacon.distance.toFixed(2) + " meters (" + beacon.rssi + " strength)"
  } else {
    return "N/A"
  }
};

//
// COLELCTED BEACON DETECTION METHODS
//

// @param [Array] detections A collection of beaconsDidRangeResult["beacons"]. See data/mocks/collected-detection-results/ for examples.
var synthesizeDetections = function(detections){
  var groups = d3.nest()
    .key(function(db){  return beaconId(db);  })
    .rollup(function(rows){
      return {
        uuid: rows.map(function(r){  return r.uuid  })[0], // assumes all "uuid" values are the same, which should be the case when grouping by beaconId().
        major: rows.map(function(r){  return r.major  })[0], // assumes all "major" values are the same, which should be the case when grouping by beaconId().,
        minor: rows.map(function(r){  return r.minor  })[0], // assumes all "minor" values are the same, which should be the case when grouping by beaconId().,,
        //detections: rows,
        detectionCount: rows.length,
        distances: rows.map(function(r){  return r.distance  }).sort(d3.ascending),
        strengths: rows.map(function(r){  return r.rssi  }).sort(d3.ascending)
      };
    })
    .entries(detections);

  groups.sort(function(a, b){
    return d3.ascending(  d3.median(a.value.distances), d3.median(b.value.distances)  );
  });

  console.log(groups);

  return groups;
};


//
// SYNTHESIZED BEACON DETECTION METHODS
//

// @param [Array] synthesizedResults The result of the synthesizeDetections function. See data/mocks/synthesized-detection-results/ for examples.
var mergeBeaconDetailsWithSynthesizedResults = function(synthesizedResults){
  return synthesizedResults.map(function(group){
    var db = group.value;
    var match = knownBeacons.filter(function(kb){
      return beaconId(db) == beaconId(kb);
    })[0];
    if (match) {
      db.details = match.details; // merge beacon details into detection results.
    } else {
      db.details = unknownBeaconDetails;
    };
    return db;
  });
};

//
// SYNTHESIZED BEACON DETECTION INSTANCE METHODS
//

// @param [Array] synthesizedBeacon The result of the mergeBeaconDetailsWithSynthesizedResults function.
var beaconPrettyMedianDistance = function(synthesizedBeacon){
  return d3.median(synthesizedBeacon.distances).toFixed(2) + " meters away (" + d3.median(synthesizedBeacon.strengths) + " strength)";
};

module.exports = {
  unknownBeaconDetails,
  knownBeacons,

  beaconId,
  beaconIdOfColor,

  mergeBeaconDetails,
  logBeacons,
  logBeaconsToCSV,
  logKnownBeacons,
  logKnownBeaconsToCSV,

  beaconProximity,
  beaconDistance,
  beaconStrength,
  beaconPrettyDistance,
  beaconPrettyProximity,

  synthesizeDetections,
  mergeBeaconDetailsWithSynthesizedResults,
  beaconPrettyMedianDistance
};
