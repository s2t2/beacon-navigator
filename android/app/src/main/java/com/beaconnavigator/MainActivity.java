package com.beaconnavigator;

import com.facebook.react.ReactActivity;
import com.joshblour.reactnativediscovery.ReactNativeDiscoveryPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "BeaconNavigator";
    }


    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new ReactNativeDiscoveryPackage(this) // <------ add the package
        );
    }
}
