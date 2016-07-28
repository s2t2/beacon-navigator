# Beacon Navigator

A react-native android application
 to detect nearby points of interest
 based on proximity to Bluetooth beacons.

## Contributing

### Prerequisites

Follow [prerequisite steps](http://data-creative.info/process-documentation/2016/07/22/react-native-android-dev-env-setup-from-scratch/) as necessary to setup development environment.

### Installation

Download source code and install package dependencies:

```` sh
git clone git@github.com:s2t2/beacon-navigator.git
cd beacon-navigator/
npm install
````

### Development

Ensure an android emulator is running or an android device is connected:

```` sh
/Users/YOUR_USERNAME/Library/Android/sdk/platform-tools/adb devices
````

Then package and run the application:

```` sh
react-native run-android
````

To view the results of `console.log()` statements for debugging purposes, run:

```` sh
react-native log-android
````

Optionally toggle boolean values in `lib/dev_helper.js` to suit your development needs over time.
