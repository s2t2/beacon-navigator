"use strict";

module.exports = {};

// Set this boolean variable as true to supress warning messages.
module.exports.presentationMode = false;

// Set this boolean variable as true to use mock Bluetooth detection results
// ... so you can develop more quickly on an Android Virtual Device (AVD), which doesn't have built-in bluetooth detection capabilities.
module.exports.mockBluetooth = true;

// A mock synthesizedAndMergedBeacons array. The result of merging beacon details with synthesized detection results. See data/mocks/synthesized-and-merged-beacons/ for examples.
// ... Pass this kind of object to the BeaconsIndexPage component.
module.exports.mockSynthesizedAndMergedBeacons = [
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":50644,
    "minor":34745,
    "detectionCount":8,
    "distances":[
      0.004389017964959747,
      0.004389017964959747,
      0.004389017964959747,
      0.004389017964959747,
      0.004650974096222348,
      0.007894619978870443,
      0.015135571128018334,
      0.024861805754569068
    ],
    "strengths":[
      -81,
      -66,
      -64,
      -55,
      -44,
      -43,
      -43,
      -43
    ],
    "details":{
      "displayName":"Eiffel Tower",
      "iconName":"md-map",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":29661,
    "minor":10707,
    "detectionCount":7,
    "distances":[
      0.025140992150393705,
      0.02538759140072723,
      0.02580343143384839,
      0.02580343143384839,
      0.026653551962814482,
      0.1129412161683649,
      0.42931091443483776
    ],
    "strengths":[
      -68,
      -52,
      -51,
      -51,
      -51,
      -51,
      -51
    ],
    "details":{
      "displayName":"Park Monceau",
      "iconName":"ios-basket-outline",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  {
    "uuid":"b9407f30-f5f8-466e-aff9-25556b57fe6d",
    "major":51618,
    "minor":2518,
    "detectionCount":6,
    "distances":[
      0.03200244966275618,
      0.03457161303360778,
      0.03457161303360778,
      0.03457161303360778,
      0.057004893698938755,
      0.06998874341970475
    ],
    "strengths":[
      -75,
      -75,
      -74,
      -65,
      -65,
      -64
    ],
    "details":{
      "displayName":"Bibliothèque François Mitterrand Station",
      "iconName":"ios-train",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
];
