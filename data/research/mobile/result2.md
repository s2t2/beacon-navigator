# Beacon Mobility Experiment #2

This document contains the results of beacon mobility experiment
  whereby all three *estimote* beacons start across the room, perhaps 12 meters away,
  and one-by-one, in the order of `[PURPLE, BLUE, GREEN]`,
  each beacon is moved in a straight line towards the phone,
  then held next to the phone for a few seconds
  before being returned in a straight-line back to its origin.

## Purple

```` sh
07-25 23:36:35.936  6800  6865 I ReactNativeJS: Running application "BeaconNavigator" with appParams: {"initialProps":{},"rootTag":1}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
07-25 23:36:35.978  6800  6865 I ReactNativeJS: GETTING INITIAL STATE
07-25 23:36:35.978  6800  6865 I ReactNativeJS: COMPONENT WILL MOUNT
07-25 23:36:36.245  6800  6865 I ReactNativeJS: COMPONENT DID MOUNT
07-25 23:36:36.251  6800  6865 I ReactNativeJS: Beacon Ranging OK
07-25 23:36:37.311  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:37.313  6800  6865 I ReactNativeJS: 'NOW:', 1469482597311
07-25 23:36:37.313  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-93 strength)'
07-25 23:36:37.313  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:37.313  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:38.555  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:38.555  6800  6865 I ReactNativeJS: 'NOW:', 1469482598555
07-25 23:36:38.555  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:36:38.556  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:38.556  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:39.686  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:39.686  6800  6865 I ReactNativeJS: 'NOW:', 1469482599686
07-25 23:36:39.686  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.77 meters (-95 strength)'
07-25 23:36:39.686  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:39.687  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:40.877  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:40.878  6800  6865 I ReactNativeJS: 'NOW:', 1469482600877
07-25 23:36:40.878  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-86 strength)'
07-25 23:36:40.878  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:40.878  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:42.123  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:42.124  6800  6865 I ReactNativeJS: 'NOW:', 1469482602123
07-25 23:36:42.125  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.13 meters (-86 strength)'
07-25 23:36:42.125  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:42.125  6800  6865 I ReactNativeJS: 'GREEN:', 'FAR @ 3.12 meters (-96 strength)'
07-25 23:36:43.367  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:43.367  6800  6865 I ReactNativeJS: 'NOW:', 1469482603367
07-25 23:36:43.367  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.99 meters (-86 strength)'
07-25 23:36:43.368  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:43.368  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:44.617  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:44.617  6800  6865 I ReactNativeJS: 'NOW:', 1469482604617
07-25 23:36:44.617  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:36:44.618  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:44.618  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:45.788  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:45.788  6800  6865 I ReactNativeJS: 'NOW:', 1469482605788
07-25 23:36:45.788  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.07 meters (-91 strength)'
07-25 23:36:45.788  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:45.788  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:46.970  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:46.970  6800  6865 I ReactNativeJS: 'NOW:', 1469482606970
07-25 23:36:46.970  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.00 meters (-84 strength)'
07-25 23:36:46.970  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:46.970  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:48.227  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:48.227  6800  6865 I ReactNativeJS: 'NOW:', 1469482608227
07-25 23:36:48.227  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.97 meters (-88 strength)'
07-25 23:36:48.228  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:48.228  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:49.464  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:49.464  6800  6865 I ReactNativeJS: 'NOW:', 1469482609464
07-25 23:36:49.465  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.93 meters (-89 strength)'
07-25 23:36:49.465  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:49.465  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:50.680  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:50.680  6800  6865 I ReactNativeJS: 'NOW:', 1469482610680
07-25 23:36:50.681  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.98 meters (-91 strength)'
07-25 23:36:50.681  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:50.681  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:51.937  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:51.937  6800  6865 I ReactNativeJS: 'NOW:', 1469482611937
07-25 23:36:51.937  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.07 meters (-92 strength)'
07-25 23:36:51.938  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:51.938  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:53.175  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:53.175  6800  6865 I ReactNativeJS: 'NOW:', 1469482613175
07-25 23:36:53.175  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.09 meters (-91 strength)'
07-25 23:36:53.175  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:53.175  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:54.375  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:54.375  6800  6865 I ReactNativeJS: 'NOW:', 1469482614375
07-25 23:36:54.375  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:36:54.376  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:54.376  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:55.559  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:55.559  6800  6865 I ReactNativeJS: 'NOW:', 1469482615559
07-25 23:36:55.559  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:36:55.559  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:55.559  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:56.732  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:56.732  6800  6865 I ReactNativeJS: 'NOW:', 1469482616732
07-25 23:36:56.732  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.09 meters (-93 strength)'
07-25 23:36:56.732  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:56.732  6800  6865 I ReactNativeJS: 'GREEN:', 'FAR @ 3.03 meters (-95 strength)'
07-25 23:36:58.019  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:58.019  6800  6865 I ReactNativeJS: 'NOW:', 1469482618019
07-25 23:36:58.019  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:36:58.019  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:58.019  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:36:59.267  6800  6865 I ReactNativeJS: ------------------
07-25 23:36:59.267  6800  6865 I ReactNativeJS: 'NOW:', 1469482619267
07-25 23:36:59.268  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.06 meters (-84 strength)'
07-25 23:36:59.268  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:36:59.268  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:00.476  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:00.476  6800  6865 I ReactNativeJS: 'NOW:', 1469482620476
07-25 23:37:00.476  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:00.476  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:00.476  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:01.622  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:01.622  6800  6865 I ReactNativeJS: 'NOW:', 1469482621622
07-25 23:37:01.622  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.07 meters (-94 strength)'
07-25 23:37:01.622  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:01.622  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:02.778  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:02.778  6800  6865 I ReactNativeJS: 'NOW:', 1469482622778
07-25 23:37:02.778  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.01 meters (-77 strength)'
07-25 23:37:02.778  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:02.778  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:03.916  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:03.916  6800  6865 I ReactNativeJS: 'NOW:', 1469482623916
07-25 23:37:03.916  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:03.916  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:03.916  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:05.047  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:05.047  6800  6865 I ReactNativeJS: 'NOW:', 1469482625047
07-25 23:37:05.047  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.05 meters (-89 strength)'
07-25 23:37:05.047  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:05.047  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:06.307  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:06.307  6800  6865 I ReactNativeJS: 'NOW:', 1469482626307
07-25 23:37:06.307  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.88 meters (-72 strength)'
07-25 23:37:06.307  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:06.307  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:07.434  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:07.434  6800  6865 I ReactNativeJS: 'NOW:', 1469482627434
07-25 23:37:07.434  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:07.434  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:07.434  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:08.644  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:08.644  6800  6865 I ReactNativeJS: 'NOW:', 1469482628644
07-25 23:37:08.644  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:08.644  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:08.644  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:09.877  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:09.878  6800  6865 I ReactNativeJS: 'NOW:', 1469482629877
07-25 23:37:09.878  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.76 meters (-78 strength)'
07-25 23:37:09.878  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:09.878  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:11.079  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:11.080  6800  6865 I ReactNativeJS: 'NOW:', 1469482631079
07-25 23:37:11.080  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.45 meters (-70 strength)'
07-25 23:37:11.080  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:11.080  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:12.347  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:12.347  6800  6865 I ReactNativeJS: 'NOW:', 1469482632347
07-25 23:37:12.347  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.30 meters (-73 strength)'
07-25 23:37:12.348  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:12.348  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:13.636  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:13.636  6800  6865 I ReactNativeJS: 'NOW:', 1469482633636
07-25 23:37:13.636  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.17 meters (-57 strength)'
07-25 23:37:13.636  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:13.636  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:14.827  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:14.827  6800  6865 I ReactNativeJS: 'NOW:', 1469482634827
07-25 23:37:14.827  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.13 meters (-78 strength)'
07-25 23:37:14.827  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:14.827  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:16.048  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:16.048  6800  6865 I ReactNativeJS: 'NOW:', 1469482636048
07-25 23:37:16.048  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 1.02 meters (-62 strength)'
07-25 23:37:16.048  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:16.048  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:17.270  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:17.270  6800  6865 I ReactNativeJS: 'NOW:', 1469482637270
07-25 23:37:17.270  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.95 meters (-57 strength)'
07-25 23:37:17.270  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:17.270  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:18.447  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:18.447  6800  6865 I ReactNativeJS: 'NOW:', 1469482638447
07-25 23:37:18.447  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.79 meters (-51 strength)'
07-25 23:37:18.447  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:18.447  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:19.595  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:19.595  6800  6865 I ReactNativeJS: 'NOW:', 1469482639595
07-25 23:37:19.595  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.49 meters (-57 strength)'
07-25 23:37:19.595  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:19.595  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:20.788  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:20.788  6800  6865 I ReactNativeJS: 'NOW:', 1469482640788
07-25 23:37:20.789  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.36 meters (-52 strength)'
07-25 23:37:20.789  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:20.789  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:21.926  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:21.926  6800  6865 I ReactNativeJS: 'NOW:', 1469482641926
07-25 23:37:21.926  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:21.926  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:21.926  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:23.093  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:23.093  6800  6865 I ReactNativeJS: 'NOW:', 1469482643093
07-25 23:37:23.093  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.23 meters (-47 strength)'
07-25 23:37:23.093  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:23.093  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:24.280  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:24.280  6800  6865 I ReactNativeJS: 'NOW:', 1469482644280
07-25 23:37:24.280  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.21 meters (-57 strength)'
07-25 23:37:24.281  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:24.281  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:25.512  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:25.512  6800  6865 I ReactNativeJS: 'NOW:', 1469482645512
07-25 23:37:25.512  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.17 meters (-70 strength)'
07-25 23:37:25.512  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:25.512  6800  6865 I ReactNativeJS: 'GREEN:', 'FAR @ 3.12 meters (-96 strength)'
07-25 23:37:26.757  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:26.757  6800  6865 I ReactNativeJS: 'NOW:', 1469482646757
07-25 23:37:26.757  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.18 meters (-94 strength)'
07-25 23:37:26.757  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:26.757  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:27.880  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:27.880  6800  6865 I ReactNativeJS: 'NOW:', 1469482647880
07-25 23:37:27.880  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.22 meters (-77 strength)'
07-25 23:37:27.880  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:27.880  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:29.096  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:29.097  6800  6865 I ReactNativeJS: 'NOW:', 1469482649096
07-25 23:37:29.097  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:29.097  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:29.097  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:30.358  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:30.358  6800  6865 I ReactNativeJS: 'NOW:', 1469482650358
07-25 23:37:30.358  6800  6865 I ReactNativeJS: 'PURPLE:', 'IMMEDIATE @ 0.19 meters (-93 strength)'
07-25 23:37:30.358  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:30.358  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:31.596  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:31.596  6800  6865 I ReactNativeJS: 'NOW:', 1469482651596
07-25 23:37:31.596  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:31.596  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:31.596  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:32.815  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:32.815  6800  6865 I ReactNativeJS: 'NOW:', 1469482652815
07-25 23:37:32.816  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:32.816  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:32.816  6800  6865 I ReactNativeJS: 'GREEN:', 'FAR @ 3.21 meters (-97 strength)'
07-25 23:37:33.987  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:33.987  6800  6865 I ReactNativeJS: 'NOW:', 1469482653987
07-25 23:37:33.987  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:33.988  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:33.988  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:35.210  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:35.210  6800  6865 I ReactNativeJS: 'NOW:', 1469482655210
07-25 23:37:35.210  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:35.210  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:35.210  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:36.468  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:36.468  6800  6865 I ReactNativeJS: 'NOW:', 1469482656468
07-25 23:37:36.468  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:36.469  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:36.469  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
````

## Blue

```` sh
07-25 23:37:37.696  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:37.696  6800  6865 I ReactNativeJS: 'NOW:', 1469482657696
07-25 23:37:37.696  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:37.696  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:37.696  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:38.916  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:38.916  6800  6865 I ReactNativeJS: 'NOW:', 1469482658916
07-25 23:37:38.916  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:38.916  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:38.916  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:40.029  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:40.029  6800  6865 I ReactNativeJS: 'NOW:', 1469482660029
07-25 23:37:40.029  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:40.029  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:40.029  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:41.216  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:41.216  6800  6865 I ReactNativeJS: 'NOW:', 1469482661216
07-25 23:37:41.216  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:41.216  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:41.216  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:42.487  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:42.487  6800  6865 I ReactNativeJS: 'NOW:', 1469482662487
07-25 23:37:42.487  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:42.488  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:42.488  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:43.687  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:43.687  6800  6865 I ReactNativeJS: 'NOW:', 1469482663687
07-25 23:37:43.687  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:43.687  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:43.687  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:44.723  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:44.723  6800  6865 I ReactNativeJS: 'NOW:', 1469482664723
07-25 23:37:44.723  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:44.723  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:44.723  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:45.844  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:45.844  6800  6865 I ReactNativeJS: 'NOW:', 1469482665844
07-25 23:37:45.844  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.69 meters (-94 strength)'
07-25 23:37:45.844  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:45.844  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:47.087  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:47.087  6800  6865 I ReactNativeJS: 'NOW:', 1469482667087
07-25 23:37:47.087  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:47.087  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:47.087  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:48.250  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:48.251  6800  6865 I ReactNativeJS: 'NOW:', 1469482668250
07-25 23:37:48.251  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-91 strength)'
07-25 23:37:48.251  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:48.251  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:49.508  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:49.508  6800  6865 I ReactNativeJS: 'NOW:', 1469482669508
07-25 23:37:49.508  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.69 meters (-95 strength)'
07-25 23:37:49.508  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:49.508  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:50.766  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:50.766  6800  6865 I ReactNativeJS: 'NOW:', 1469482670766
07-25 23:37:50.767  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:50.767  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:50.767  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:52.068  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:52.068  6800  6865 I ReactNativeJS: 'NOW:', 1469482672068
07-25 23:37:52.068  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.53 meters (-91 strength)'
07-25 23:37:52.068  6800  6865 I ReactNativeJS: 'BLUE:', 'NEAR @ 1.12 meters (-95 strength)'
07-25 23:37:52.069  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:53.387  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:53.387  6800  6865 I ReactNativeJS: 'NOW:', 1469482673387
07-25 23:37:53.387  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.46 meters (-91 strength)'
07-25 23:37:53.387  6800  6865 I ReactNativeJS: 'BLUE:', 'IMMEDIATE @ 0.99 meters (-88 strength)'
07-25 23:37:53.387  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:54.545  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:54.545  6800  6865 I ReactNativeJS: 'NOW:', 1469482674545
07-25 23:37:54.545  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.42 meters (-91 strength)'
07-25 23:37:54.545  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:54.545  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:55.811  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:55.811  6800  6865 I ReactNativeJS: 'NOW:', 1469482675811
07-25 23:37:55.812  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.40 meters (-90 strength)'
07-25 23:37:55.812  6800  6865 I ReactNativeJS: 'BLUE:', 'IMMEDIATE @ 0.72 meters (-88 strength)'
07-25 23:37:55.812  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:57.061  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:57.061  6800  6865 I ReactNativeJS: 'NOW:', 1469482677061
07-25 23:37:57.061  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.39 meters (-91 strength)'
07-25 23:37:57.061  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:57.061  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:58.327  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:58.327  6800  6865 I ReactNativeJS: 'NOW:', 1469482678327
07-25 23:37:58.327  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.36 meters (-90 strength)'
07-25 23:37:58.327  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:37:58.327  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:37:59.610  6800  6865 I ReactNativeJS: ------------------
07-25 23:37:59.610  6800  6865 I ReactNativeJS: 'NOW:', 1469482679610
07-25 23:37:59.610  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:37:59.610  6800  6865 I ReactNativeJS: 'BLUE:', 'IMMEDIATE @ 0.72 meters (-69 strength)'
07-25 23:37:59.610  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:00.780  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:00.781  6800  6865 I ReactNativeJS: 'NOW:', 1469482680780
07-25 23:38:00.781  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.32 meters (-91 strength)'
07-25 23:38:00.781  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:00.781  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:01.989  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:01.989  6800  6865 I ReactNativeJS: 'NOW:', 1469482681989
07-25 23:38:01.989  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.32 meters (-91 strength)'
07-25 23:38:01.989  6800  6865 I ReactNativeJS: 'BLUE:', 'IMMEDIATE @ 0.74 meters (-89 strength)'
07-25 23:38:01.989  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:03.135  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:03.136  6800  6865 I ReactNativeJS: 'NOW:', 1469482683135
07-25 23:38:03.136  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:03.136  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:03.136  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:04.296  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:04.296  6800  6865 I ReactNativeJS: 'NOW:', 1469482684296
07-25 23:38:04.296  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:04.296  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:04.296  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:05.557  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:05.557  6800  6865 I ReactNativeJS: 'NOW:', 1469482685557
07-25 23:38:05.557  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.32 meters (-95 strength)'
07-25 23:38:05.557  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:05.557  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:06.796  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:06.796  6800  6865 I ReactNativeJS: 'NOW:', 1469482686796
07-25 23:38:06.796  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:06.797  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:06.797  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:07.914  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:07.914  6800  6865 I ReactNativeJS: 'NOW:', 1469482687914
07-25 23:38:07.914  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:07.914  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:07.914  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:09.089  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:09.089  6800  6865 I ReactNativeJS: 'NOW:', 1469482689089
07-25 23:38:09.089  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:09.089  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:09.090  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:10.307  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:10.307  6800  6865 I ReactNativeJS: 'NOW:', 1469482690307
07-25 23:38:10.307  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.32 meters (-93 strength)'
07-25 23:38:10.307  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:10.307  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
````

## Green

```` sh
07-25 23:38:11.514  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:11.514  6800  6865 I ReactNativeJS: 'NOW:', 1469482691514
07-25 23:38:11.514  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:11.514  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:11.514  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:12.715  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:12.716  6800  6865 I ReactNativeJS: 'NOW:', 1469482692715
07-25 23:38:12.716  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:12.716  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:12.716  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:13.898  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:13.898  6800  6865 I ReactNativeJS: 'NOW:', 1469482693898
07-25 23:38:13.898  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:13.898  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:13.898  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:15.151  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:15.151  6800  6865 I ReactNativeJS: 'NOW:', 1469482695151
07-25 23:38:15.151  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:15.151  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:15.151  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.85 meters (-87 strength)'
07-25 23:38:16.429  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:16.429  6800  6865 I ReactNativeJS: 'NOW:', 1469482696429
07-25 23:38:16.429  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:16.429  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:16.429  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:17.580  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:17.580  6800  6865 I ReactNativeJS: 'NOW:', 1469482697580
07-25 23:38:17.581  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:17.581  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:17.581  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.95 meters (-89 strength)'
07-25 23:38:18.752  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:18.752  6800  6865 I ReactNativeJS: 'NOW:', 1469482698752
07-25 23:38:18.753  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:18.753  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:18.754  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.85 meters (-83 strength)'
07-25 23:38:19.977  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:19.977  6800  6865 I ReactNativeJS: 'NOW:', 1469482699977
07-25 23:38:19.977  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:19.978  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:19.978  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.95 meters (-90 strength)'
07-25 23:38:21.203  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:21.203  6800  6865 I ReactNativeJS: 'NOW:', 1469482701203
07-25 23:38:21.204  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-93 strength)'
07-25 23:38:21.204  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:21.204  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.92 meters (-87 strength)'
07-25 23:38:22.471  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:22.471  6800  6865 I ReactNativeJS: 'NOW:', 1469482702471
07-25 23:38:22.471  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-93 strength)'
07-25 23:38:22.471  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:22.471  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.90 meters (-87 strength)'
07-25 23:38:23.701  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:23.701  6800  6865 I ReactNativeJS: 'NOW:', 1469482703701
07-25 23:38:23.701  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.65 meters (-93 strength)'
07-25 23:38:23.701  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:23.701  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.80 meters (-81 strength)'
07-25 23:38:24.967  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:24.967  6800  6865 I ReactNativeJS: 'NOW:', 1469482704967
07-25 23:38:24.968  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.70 meters (-95 strength)'
07-25 23:38:24.968  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:24.968  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:26.188  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:26.188  6800  6865 I ReactNativeJS: 'NOW:', 1469482706188
07-25 23:38:26.188  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.64 meters (-92 strength)'
07-25 23:38:26.188  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:26.188  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:27.488  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:27.488  6800  6865 I ReactNativeJS: 'NOW:', 1469482707488
07-25 23:38:27.488  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-89 strength)'
07-25 23:38:27.488  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:27.489  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.71 meters (-76 strength)'
07-25 23:38:28.501  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:28.502  6800  6865 I ReactNativeJS: 'NOW:', 1469482708502
07-25 23:38:28.502  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-92 strength)'
07-25 23:38:28.502  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:28.502  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.59 meters (-58 strength)'
07-25 23:38:29.768  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:29.768  6800  6865 I ReactNativeJS: 'NOW:', 1469482709768
07-25 23:38:29.768  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.59 meters (-90 strength)'
07-25 23:38:29.768  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:29.768  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.31 meters (-63 strength)'
07-25 23:38:31.039  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:31.039  6800  6865 I ReactNativeJS: 'NOW:', 1469482711039
07-25 23:38:31.039  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.57 meters (-92 strength)'
07-25 23:38:31.039  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:31.039  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.18 meters (-64 strength)'
07-25 23:38:32.308  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:32.309  6800  6865 I ReactNativeJS: 'NOW:', 1469482712308
07-25 23:38:32.309  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.56 meters (-94 strength)'
07-25 23:38:32.309  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:32.309  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 1.09 meters (-59 strength)'
07-25 23:38:33.540  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:33.540  6800  6865 I ReactNativeJS: 'NOW:', 1469482713540
07-25 23:38:33.540  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.53 meters (-91 strength)'
07-25 23:38:33.540  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:33.540  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.98 meters (-65 strength)'
07-25 23:38:34.778  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:34.778  6800  6865 I ReactNativeJS: 'NOW:', 1469482714778
07-25 23:38:34.778  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.50 meters (-90 strength)'
07-25 23:38:34.779  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:34.779  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.72 meters (-52 strength)'
07-25 23:38:35.998  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:35.998  6800  6865 I ReactNativeJS: 'NOW:', 1469482715998
07-25 23:38:35.998  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.52 meters (-93 strength)'
07-25 23:38:35.998  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:35.998  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.66 meters (-64 strength)'
07-25 23:38:37.287  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:37.287  6800  6865 I ReactNativeJS: 'NOW:', 1469482717287
07-25 23:38:37.287  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.51 meters (-92 strength)'
07-25 23:38:37.287  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:37.288  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:38.468  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:38.468  6800  6865 I ReactNativeJS: 'NOW:', 1469482718468
07-25 23:38:38.468  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.52 meters (-93 strength)'
07-25 23:38:38.468  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:38.468  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.39 meters (-58 strength)'
07-25 23:38:39.769  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:39.769  6800  6865 I ReactNativeJS: 'NOW:', 1469482719769
07-25 23:38:39.769  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.53 meters (-93 strength)'
07-25 23:38:39.769  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:39.769  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.26 meters (-59 strength)'
07-25 23:38:40.979  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:40.979  6800  6865 I ReactNativeJS: 'NOW:', 1469482720979
07-25 23:38:40.979  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.53 meters (-93 strength)'
07-25 23:38:40.979  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:40.979  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.24 meters (-58 strength)'
07-25 23:38:42.094  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:42.094  6800  6865 I ReactNativeJS: 'NOW:', 1469482722094
07-25 23:38:42.094  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:42.094  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:42.094  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.15 meters (-62 strength)'
07-25 23:38:43.207  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:43.207  6800  6865 I ReactNativeJS: 'NOW:', 1469482723207
07-25 23:38:43.207  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:43.207  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:43.207  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.14 meters (-56 strength)'
07-25 23:38:44.325  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:44.325  6800  6865 I ReactNativeJS: 'NOW:', 1469482724325
07-25 23:38:44.325  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.49 meters (-92 strength)'
07-25 23:38:44.325  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:44.325  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:45.588  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:45.588  6800  6865 I ReactNativeJS: 'NOW:', 1469482725588
07-25 23:38:45.588  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.44 meters (-90 strength)'
07-25 23:38:45.588  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:45.588  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.13 meters (-54 strength)'
07-25 23:38:46.798  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:46.798  6800  6865 I ReactNativeJS: 'NOW:', 1469482726798
07-25 23:38:46.799  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:46.799  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:46.799  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.14 meters (-64 strength)'
07-25 23:38:47.869  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:47.869  6800  6865 I ReactNativeJS: 'NOW:', 1469482727869
07-25 23:38:47.869  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:47.869  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:47.869  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.14 meters (-79 strength)'
07-25 23:38:49.087  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:49.087  6800  6865 I ReactNativeJS: 'NOW:', 1469482729087
07-25 23:38:49.087  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:49.087  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:49.087  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.15 meters (-94 strength)'
07-25 23:38:50.296  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:50.296  6800  6865 I ReactNativeJS: 'NOW:', 1469482730296
07-25 23:38:50.296  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:50.296  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:50.296  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.18 meters (-92 strength)'
07-25 23:38:51.431  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:51.431  6800  6865 I ReactNativeJS: 'NOW:', 1469482731431
07-25 23:38:51.432  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.49 meters (-92 strength)'
07-25 23:38:51.432  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:51.432  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:52.636  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:52.637  6800  6865 I ReactNativeJS: 'NOW:', 1469482732636
07-25 23:38:52.637  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:52.637  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:52.637  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:53.909  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:53.909  6800  6865 I ReactNativeJS: 'NOW:', 1469482733909
07-25 23:38:53.909  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.52 meters (-93 strength)'
07-25 23:38:53.910  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:53.910  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:55.137  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:55.137  6800  6865 I ReactNativeJS: 'NOW:', 1469482735137
07-25 23:38:55.137  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:55.137  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:55.137  6800  6865 I ReactNativeJS: 'GREEN:', 'IMMEDIATE @ 0.33 meters (-95 strength)'
07-25 23:38:56.387  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:56.387  6800  6865 I ReactNativeJS: 'NOW:', 1469482736387
07-25 23:38:56.387  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.53 meters (-97 strength)'
07-25 23:38:56.387  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:56.387  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:57.559  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:57.560  6800  6865 I ReactNativeJS: 'NOW:', 1469482737560
07-25 23:38:57.560  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:57.560  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:57.560  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:38:58.787  6800  6865 I ReactNativeJS: ------------------
07-25 23:38:58.787  6800  6865 I ReactNativeJS: 'NOW:', 1469482738787
07-25 23:38:58.787  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:38:58.787  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:38:58.787  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:00.029  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:00.030  6800  6865 I ReactNativeJS: 'NOW:', 1469482740029
07-25 23:39:00.030  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:39:00.030  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:00.030  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:01.267  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:01.267  6800  6865 I ReactNativeJS: 'NOW:', 1469482741267
07-25 23:39:01.267  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:39:01.267  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:01.267  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:02.526  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:02.526  6800  6865 I ReactNativeJS: 'NOW:', 1469482742526
07-25 23:39:02.527  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:39:02.527  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:02.527  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:03.728  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:03.728  6800  6865 I ReactNativeJS: 'NOW:', 1469482743728
07-25 23:39:03.728  6800  6865 I ReactNativeJS: 'PURPLE:', 'N/A'
07-25 23:39:03.729  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:03.729  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:04.917  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:04.917  6800  6865 I ReactNativeJS: 'NOW:', 1469482744917
07-25 23:39:04.917  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.56 meters (-93 strength)'
07-25 23:39:04.917  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:04.917  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:06.160  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:06.160  6800  6865 I ReactNativeJS: 'NOW:', 1469482746160
07-25 23:39:06.160  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.61 meters (-93 strength)'
07-25 23:39:06.160  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:06.160  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:07.383  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:07.383  6800  6865 I ReactNativeJS: 'NOW:', 1469482747383
07-25 23:39:07.383  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.57 meters (-91 strength)'
07-25 23:39:07.384  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:07.384  6800  6865 I ReactNativeJS: 'GREEN:', 'N/A'
07-25 23:39:08.618  6800  6865 I ReactNativeJS: ------------------
07-25 23:39:08.618  6800  6865 I ReactNativeJS: 'NOW:', 1469482748618
07-25 23:39:08.618  6800  6865 I ReactNativeJS: 'PURPLE:', 'NEAR @ 2.58 meters (-93 strength)'
07-25 23:39:08.618  6800  6865 I ReactNativeJS: 'BLUE:', 'N/A'
07-25 23:39:08.618  6800  6865 I ReactNativeJS: 'GREEN:', 'NEAR @ 2.85 meters (-96 strength)'
````

# Observations

Perhaps distance is being measured in feet or some relative metric instead of meters.

Distance is probably a function of both beacon proximity and strength.
