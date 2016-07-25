# Beacon Identification Experiment - Red (Follow-up)

The red beacon is a [Texas Instruments SensorTag](http://www.ti.com/ww/en/wireless_connectivity/sensortag2015/?INTC=SensorTag&HQS=sensortag), different from the other beacons.

It has a power button. When pressed, a green light on the bottom starts flashing. If inactive for a few minutes, the sensor turns off.

When accessed through the [SensorTag](https://play.google.com/store/apps/details?id=com.ti.ble.sensortag) app, additional information is revealed, such as the sensor's capabilities to detect temperature, light, humidity, barometer, and motion data.

The app reveals the sensor's Device ID: `B0:B4:48:BD:8E:07`. Maybe it's UUID does not resemble those of iBeacon UUIDs and therefore isn't detected during attempts to detect iBeacons. A switch to attempts to [detect estimotes](https://github.com/mmazzarolo/react-native-beacons-android/blob/3fd2b8a24a6a3e1b46d31d6cd1fd8971a5402600/index.js#L21-L23) does not detect the sensor. Perhaps attempts to [detect a custom beacon identifier pattern](https://github.com/mmazzarolo/react-native-beacons-android/blob/3fd2b8a24a6a3e1b46d31d6cd1fd8971a5402600/index.js#L25-L27) might yield better results.

<hr>

This document contains the results of beacon detection
  when the **red** beacon is on the desk next to the phone,
  and the other three are on the other side of the room, perhaps 30 meters away.

```` sh
TODO: HOW TO DETECT???
````
