# Woobly

## If Build fails due to error "_reactNativeVersion...." in "react-native-linear-gradient" plugin then make following changes
in

node_modules/react-native-linear-gradient/android/build.gradle

Change

compileOnly "com.facebook.react:react-native:${_reactNativeVersion}"

To

compile "com.facebook.react:react-native:0.55.4"

## Git url for this issue 
https://github.com/react-native-community/react-native-linear-gradient/issues/336?_pjax=%23js-repo-pjax-container


## If Build fails due to errors like "Unable to resolve module 'AccessibilityInfo', when trying to create release bundle...." then follow:

react-native init AwesomeProject
cd AwesomeProject
react-native run-android
npm uninstall react-native
npm install --save react-native@0.55.4
react-native run-android
npm install --save babel-core@latest babel-loader@latest
npm uninstall --save babel-preset-react-native
npm install --save babel-preset-react-native@4.0.0
react-native run-android

## Stackoverflow url for this issue
https://stackoverflow.com/questions/48756550/unable-to-resolve-module-accessibilityinfo-when-trying-to-create-release-bund
