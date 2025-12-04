# tcserverside

 Commanders Act's ServerSide SDK bridge for react native

## 1. Installation

### 1.1 Package.json 

add the following dependencies into your package.json, and then install them using `npm install`

```sh
    "@commandersact/tccore-react-native": "git+https://github.com/commandersact/tccore-react-native#*.*.*", #check latest available version
    "@commandersact/tcserverside-react-native": "git+https://github.com/commandersact/tcserverside-react-native#*.*.*", #check latest available version
```


### 1.2 Podfile - iOS Specific

Once the JS packages installed, you'll need to manually add the required pods to your Podfile:

```
pod "tccore-react-native-swift", :path => '../node_modules/@commandersact/tccore-react-native/tccore-react-native-swift.podspec'
pod "tcserverside-react-native-swift", :path => '../node_modules/@commandersact/tcserverside-react-native/tcserverside-react-native-swift.podspec'
```

check the demo app podfile here : https://github.com/CommandersAct/TCDemoReactNative/blob/master/ios/Podfile

## 2. Usage

This bridge ports the TCServerSide SDK available on [Android](https://github.com/CommandersAct/androidV5/tree/master/TCServerSide) and [iOS](https://github.com/CommandersAct/iOSV5/tree/master/TCServerSide)

It is highly recommanded to take a look on the native SDK documentation for more insights and details. 

example code : 

```js
// imports : ...

import * as TCServerSide from '@commandersact/tcserverside-react-native';
import {TCBeginCheckoutEvent} from '@commandersact/tcserverside-react-native';

// initialisation ... (Mandatory !)
	TCServerSide.initServerSide(3311, 'a_source_key')

// creating event : 

	let event = new TCBeginCheckoutEvent();
  	event.currency = "USD"
  	event.value = 12

// executing event :
  	TCServerSide.execute(event)

```

If you wanna access other [event's payload](https://community.commandersact.com/platform-x/developers/tracking/about-events/mobile-sdk-event-specificity#event-specificity-for-mobile-app) schemes: 

```js
import {TCAppInstance, TCDeviceInstance} from '@commandersact/tcserverside-react-native';

// you can directly read SDK intialised values : 
  console.log(TCDeviceInstance.sdkID)
  console.log(TCAppInstance.nameSpace)

or overwrite : 

  console.log(TCDeviceInstance.sdkID = "my_custom_sdk_id"
  TCAppInstance.nameSpace = "my_custom_namespace"
```

## 3. Demo App : 

For a full demo app, please check our TDemoReactNative : https://github.com/CommandersAct/TCDemoReactNative 

main usage is sending event to your commandersAct platform. 


# Support & Contact : 

Support : support@commandersact.com

http://www.commandersact.com

Commanders Act | 7b rue taylor - 75010 PARIS - France

![Commanders Act logo](res/ca_logo.png)
